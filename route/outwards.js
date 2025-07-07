import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../database_location/data.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('DB connect error:', err);
});

const dbAll = promisify(db.all.bind(db));
const dbGet = promisify(db.get.bind(db));
const dbRun = promisify(db.run.bind(db));

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const rows = await dbAll(
      `SELECT
        o.outid,
        o.batchcode,
        o.custcode,
        c.custname,       -- This will be NULL if no matching customer
        o.qty,
        o.selling_price_per_unit,
        o.dateout,
        il.itemcode,      -- This will be NULL if no matching itemlist
        il.itemname       -- This will be NULL if no matching itemlist
      FROM outwards o
      LEFT JOIN customers c ON o.custcode = c.custcode
      LEFT JOIN inventory inv ON o.batchcode = inv.batchcode
      LEFT JOIN itemlist il ON inv.itemcode = il.itemcode
      ORDER BY o.dateout DESC`,
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve outwards records.' });
  }
});

router.get('/batch-customer-lists', async (req, res) => {
  try {
    const batches = await dbAll(`
      SELECT
        inv.batchcode,
        inv.qty AS current_stock,
        il.itemname,
        il.itemcode,
        i.purchase_price_per_unit
      FROM inventory inv
      JOIN itemlist il ON inv.itemcode = il.itemcode
      JOIN inwards i ON inv.batchcode = i.batchcode
      WHERE inv.qty > 0
      ORDER BY il.itemname, inv.batchcode
    `);
    const customers = await dbAll('SELECT custcode, custname FROM customers ORDER BY custname');
    res.json({ batches, customers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve batch and customer lists.' });
  }
});

router.post('/', async (req, res) => {
  const {
    outid,
    batchcode,
    custcode,
    qty,
    selling_price_per_unit,
    dateout,
  } = req.body;

  if (
    !outid ||
    !batchcode ||
    !custcode ||
    qty === undefined ||
    selling_price_per_unit === undefined ||
    !dateout
  ) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (qty <= 0 || selling_price_per_unit < 0) {
    return res.status(400).json({ error: 'Quantity must be positive, selling price non-negative.' });
  }

  try {
    await dbRun('BEGIN TRANSACTION');

    const existingOutward = await dbGet('SELECT 1 FROM outwards WHERE outid = ?', outid);
    if (existingOutward) {
      await dbRun('ROLLBACK');
      return res.status(409).json({ error: 'Outward ID already exists.' });
    }

    const inventoryRecord = await dbGet('SELECT qty FROM inventory WHERE batchcode = ?', batchcode);
    if (!inventoryRecord) {
      await dbRun('ROLLBACK');
      return res.status(404).json({ error: 'Batch not found in inventory.' });
    }

    if (inventoryRecord.qty < qty) {
      await dbRun('ROLLBACK');
      return res.status(400).json({ error: `Not enough stock in batch. Available: ${inventoryRecord.qty}` });
    }

    const customerExists = await dbGet('SELECT 1 FROM customers WHERE custcode = ?', custcode);
    if (!customerExists) {
      await dbRun('ROLLBACK');
      return res.status(400).json({ error: `Customer code '${custcode}' does not exist.` });
    }

    await dbRun(
      'INSERT INTO outwards (outid, batchcode, custcode, qty, selling_price_per_unit, dateout) VALUES (?, ?, ?, ?, ?, ?)',
      outid,
      batchcode,
      custcode,
      qty,
      selling_price_per_unit,
      dateout,
    );

    await dbRun('COMMIT');
    res.status(201).json({ success: true, message: 'Outwards record added.' });
  } catch (err) {
    console.error(err);
    await dbRun('ROLLBACK');
    if (err.message.includes('FOREIGN KEY constraint failed')) {
      return res.status(400).json({ error: 'Invalid batchcode or custcode.' });
    }
    res.status(500).json({ error: 'Failed to add outwards record.' });
  }
});

router.delete('/:outid', async (req, res) => {
  const { outid } = req.params;
  try {
    const result = await dbRun('DELETE FROM outwards WHERE outid = ?', outid);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Outwards record not found.' });
    }
    res.json({ success: true, message: 'Outwards record deleted.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete outwards record.' });
  }
});

router.put('/:outid', async (req, res) => {
  const { outid } = req.params;
  const {
    batchcode,
    custcode,
    qty,
    selling_price_per_unit,
    dateout,
  } = req.body;

  if (
    !batchcode ||
    !custcode ||
    qty === undefined ||
    selling_price_per_unit === undefined ||
    !dateout
  ) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (qty <= 0 || selling_price_per_unit < 0) {
    return res.status(400).json({ error: 'Quantity must be positive, selling price non-negative.' });
  }

  try {
    await dbRun('BEGIN TRANSACTION');

    const existingOutward = await dbGet('SELECT * FROM outwards WHERE outid = ?', outid);
    if (!existingOutward) {
      await dbRun('ROLLBACK');
      return res.status(404).json({ error: 'Outwards record not found.' });
    }

    const customerExists = await dbGet('SELECT 1 FROM customers WHERE custcode = ?', custcode);
    if (!customerExists) {
      await dbRun('ROLLBACK');
      return res.status(400).json({ error: `Customer code '${custcode}' does not exist.` });
    }

    await dbRun(
      `UPDATE outwards
       SET batchcode = ?, custcode = ?, qty = ?, selling_price_per_unit = ?, dateout = ?
       WHERE outid = ?`,
      batchcode,
      custcode,
      qty,
      selling_price_per_unit,
      dateout,
      outid
    );

    await dbRun('COMMIT');
    res.json({ success: true, message: 'Outwards record updated.' });
  } catch (err) {
    console.error(err);
    await dbRun('ROLLBACK');
    res.status(500).json({ error: 'Failed to update outwards record.' });
  }
});

export default router;