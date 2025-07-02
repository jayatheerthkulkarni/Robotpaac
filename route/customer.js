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
      'SELECT custcode AS code, custname AS name, custcontact AS contact FROM customers',
    );
    res.json(rows);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { custcode, custname, custcontact } = req.body;
  try {
    await dbRun(
      'INSERT INTO customers (custcode, custname, custcontact) VALUES (?, ?, ?)',
      custcode,
      custname,
      custcontact,
    );
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { count } = await dbGet(
      'SELECT COUNT(*) AS count FROM outwards WHERE custcode = ?',
      id,
    );

    if (count > 0) {
      return res
        .status(400)
        .json({ error: 'Cannot delete customer with existing transactions' });
    }
    await dbRun('DELETE FROM customers WHERE custcode = ?', id);
    res.json({ success: true });
  } catch (err) {
    console.error('Error during deletion:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { custname, custcontact } = req.body;

  if (!custname || !custcontact) {
    return res.status(400).json({ error: 'Name and Contact are required' });
  }

  try {
    await dbRun(
      'UPDATE customers SET custname = ?, custcontact = ? WHERE custcode = ?',
      custname,
      custcontact,
      id,
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
