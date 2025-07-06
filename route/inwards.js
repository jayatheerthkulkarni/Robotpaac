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
        i.batchcode,
        i.itemcode,
        i.suppcode,
        i.requestedqty,
        i.receivedqty,
        i.purchase_price_per_unit,
        i.estimate_percentage,
        i.datepurchase,
        i.expiry,
        inv.itemused,
        inv.itemdesc1,
        inv.itemdesc2,
        inv.itemdesc3
      FROM inwards i
      LEFT JOIN inventory inv ON i.batchcode = inv.batchcode`,
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve inwards records.' });
  }
});

router.get('/item-list', async (req, res) => {
  try {
    const items = await dbAll(
      'SELECT itemcode, itemname FROM itemlist ORDER BY itemname',
    );
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve item list.' });
  }
});

router.get('/supplier-list', async (req, res) => {
  try {
    const suppliers = await dbAll(
      'SELECT suppcode, suppname FROM suppliers ORDER BY suppname',
    );
    res.json(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve supplier list.' });
  }
});

router.post('/', async (req, res) => {
  const {
    batchcode,
    itemcode,
    suppcode,
    requestedqty,
    receivedqty,
    purchase_price_per_unit,
    estimate_percentage,
    datepurchase,
    expiryDays,
    itemused,
    itemdesc1,
    itemdesc2,
    itemdesc3,
  } = req.body;

  let expiryDate = null;
  if (datepurchase && expiryDays !== undefined && expiryDays !== null) {
    const purchaseDateObj = new Date(datepurchase);
    if (!isNaN(purchaseDateObj.getTime()) && expiryDays >= 0) {
      purchaseDateObj.setDate(purchaseDateObj.getDate() + parseInt(expiryDays));
      expiryDate = purchaseDateObj.toISOString().split('T')[0];
    } else {
      return res
        .status(400)
        .json({ error: 'Invalid purchase date or negative expiry days.' });
    }
  } else if (expiryDays < 0) {
    return res.status(400).json({ error: 'Expiry days cannot be negative.' });
  }

  if (
    !batchcode ||
    !itemcode ||
    !suppcode ||
    requestedqty === undefined ||
    receivedqty === undefined ||
    purchase_price_per_unit === undefined ||
    estimate_percentage === undefined ||
    !datepurchase ||
    expiryDays === undefined ||
    expiryDays === null
  ) {
    return res.status(400).json({
      error:
        'All core fields (batchcode, itemcode, suppcode, requestedqty, receivedqty, purchase_price_per_unit, estimate_percentage, datepurchase, expiryDays) are required.',
    });
  }

  if (
    receivedqty < 0 ||
    requestedqty < 0 ||
    purchase_price_per_unit < 0 ||
    estimate_percentage < 0
  ) {
    return res
      .status(400)
      .json({ error: 'Quantities, price, and percentage cannot be negative.' });
  }
  if (receivedqty > requestedqty) {
    return res
      .status(400)
      .json({ error: 'Received quantity cannot exceed requested quantity.' });
  }

  try {
    await dbRun('BEGIN TRANSACTION');

    const existingBatch = await dbGet(
      'SELECT 1 FROM inwards WHERE batchcode = ?',
      batchcode,
    );
    if (existingBatch) {
      await dbRun('ROLLBACK');
      return res.status(409).json({ error: 'Batch code already exists.' });
    }

    const itemExists = await dbGet(
      'SELECT 1 FROM itemlist WHERE itemcode = ?',
      itemcode,
    );
    if (!itemExists) {
      await dbRun('ROLLBACK');
      return res
        .status(400)
        .json({ error: `Item code '${itemcode}' does not exist.` });
    }
    const supplierExists = await dbGet(
      'SELECT 1 FROM suppliers WHERE suppcode = ?',
      suppcode,
    );
    if (!supplierExists) {
      await dbRun('ROLLBACK');
      return res
        .status(400)
        .json({ error: `Supplier code '${suppcode}' does not exist.` });
    }

    await dbRun(
      'INSERT INTO inwards (batchcode, itemcode, suppcode, requestedqty, receivedqty, purchase_price_per_unit, estimate_percentage, datepurchase, expiry) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      batchcode,
      itemcode,
      suppcode,
      requestedqty,
      receivedqty,
      purchase_price_per_unit,
      estimate_percentage,
      datepurchase,
      expiryDate,
    );

    await dbRun(
      'UPDATE inventory SET itemused = ?, itemdesc1 = ?, itemdesc2 = ?, itemdesc3 = ? WHERE batchcode = ?',
      itemused || null,
      itemdesc1 || null,
      itemdesc2 || null,
      itemdesc3 || null,
      batchcode,
    );

    await dbRun('COMMIT');
    res
      .status(201)
      .json({ success: true, message: 'Inwards record and inventory added.' });
  } catch (err) {
    console.error(err);
    await dbRun('ROLLBACK');
    if (err.message.includes('FOREIGN KEY constraint failed')) {
      return res.status(400).json({ error: 'Invalid itemcode or suppcode.' });
    }
    if (err.message.includes('SQLITE_CONSTRAINT_PRIMARYKEY')) {
      return res.status(409).json({
        error:
          'Batch code already exists in inventory (should be caught by initial check).',
      });
    }
    res.status(500).json({ error: 'Failed to add inwards record.' });
  }
});

router.put('/:batchcode', async (req, res) => {
  const { batchcode } = req.params;
  const {
    itemcode,
    suppcode,
    requestedqty,
    receivedqty,
    purchase_price_per_unit,
    estimate_percentage,
    datepurchase,
    expiryDays,
    itemused,
    itemdesc1,
    itemdesc2,
    itemdesc3,
  } = req.body;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'No update fields provided.' });
  }

  let oldReceivedQty;
  let oldRequestedQty;
  let currentInventoryQty;
  let oldPurchaseDate;
  let oldEstimatePercentage;

  try {
    await dbRun('BEGIN TRANSACTION');

    const inwardsRecord = await dbGet(
      'SELECT requestedqty, receivedqty, datepurchase, expiry, estimate_percentage FROM inwards WHERE batchcode = ?',
      batchcode,
    );
    if (!inwardsRecord) {
      await dbRun('ROLLBACK');
      return res.status(404).json({ error: 'Inwards record not found.' });
    }
    oldReceivedQty = inwardsRecord.receivedqty;
    oldRequestedQty = inwardsRecord.requestedqty;
    oldPurchaseDate = inwardsRecord.datepurchase;
    oldEstimatePercentage = inwardsRecord.estimate_percentage;

    const inventoryRecord = await dbGet(
      'SELECT qty FROM inventory WHERE batchcode = ?',
      batchcode,
    );
    if (!inventoryRecord) {
      await dbRun('ROLLBACK');
      return res.status(500).json({
        error:
          'Associated inventory record not found. Data inconsistency detected.',
      });
    }
    currentInventoryQty = inventoryRecord.qty;

    const newRequestedQty =
      requestedqty !== undefined ? requestedqty : oldRequestedQty;
    const newReceivedQty =
      receivedqty !== undefined ? receivedqty : oldReceivedQty;
    const newEstimatePercentage =
      estimate_percentage !== undefined
        ? estimate_percentage
        : oldEstimatePercentage;

    if (
      newReceivedQty < 0 ||
      newRequestedQty < 0 ||
      (purchase_price_per_unit !== undefined && purchase_price_per_unit < 0) ||
      (newEstimatePercentage !== undefined && newEstimatePercentage < 0) ||
      (expiryDays !== undefined && expiryDays < 0)
    ) {
      await dbRun('ROLLBACK');
      return res.status(400).json({
        error:
          'Quantities, price, percentage, and expiry days cannot be negative.',
      });
    }

    if (newReceivedQty > newRequestedQty) {
      await dbRun('ROLLBACK');
      return res.status(400).json({
        error: 'Updated received quantity cannot exceed requested quantity.',
      });
    }

    const availableForOutwards = oldReceivedQty - currentInventoryQty;
    if (newReceivedQty < availableForOutwards) {
      await dbRun('ROLLBACK');
      return res.status(400).json({
        error: `Cannot reduce received quantity below what has already been dispatched. (Min allowed receivedqty: ${availableForOutwards})`,
      });
    }

    const updateInwardsFields = [];
    const updateInwardsValues = [];
    let calculatedExpiryDate = inwardsRecord.expiry;

    if (itemcode !== undefined) {
      const itemExists = await dbGet(
        'SELECT 1 FROM itemlist WHERE itemcode = ?',
        itemcode,
      );
      if (!itemExists) {
        await dbRun('ROLLBACK');
        return res
          .status(400)
          .json({ error: `Item code '${itemcode}' does not exist.` });
      }
      updateInwardsFields.push('itemcode = ?');
      updateInwardsValues.push(itemcode);
    }
    if (suppcode !== undefined) {
      const supplierExists = await dbGet(
        'SELECT 1 FROM suppliers WHERE suppcode = ?',
        suppcode,
      );
      if (!supplierExists) {
        await dbRun('ROLLBACK');
        return res
          .status(400)
          .json({ error: `Supplier code '${suppcode}' does not exist.` });
      }
      updateInwardsFields.push('suppcode = ?');
      updateInwardsValues.push(suppcode);
    }
    if (requestedqty !== undefined) {
      updateInwardsFields.push('requestedqty = ?');
      updateInwardsValues.push(requestedqty);
    }
    if (receivedqty !== undefined) {
      updateInwardsFields.push('receivedqty = ?');
      updateInwardsValues.push(receivedqty);
    }
    if (purchase_price_per_unit !== undefined) {
      updateInwardsFields.push('purchase_price_per_unit = ?');
      updateInwardsValues.push(purchase_price_per_unit);
    }
    if (estimate_percentage !== undefined) {
      updateInwardsFields.push('estimate_percentage = ?');
      updateInwardsValues.push(estimate_percentage);
    }

    const currentPurchaseDate =
      datepurchase !== undefined ? datepurchase : oldPurchaseDate;
    if (
      datepurchase !== undefined ||
      (expiryDays !== undefined && expiryDays !== null)
    ) {
      const pDateObj = new Date(currentPurchaseDate);
      const eDays =
        expiryDays !== undefined
          ? parseInt(expiryDays)
          : calculateExpiryDays(oldPurchaseDate, inwardsRecord.expiry);
      if (isNaN(pDateObj.getTime()) || eDays === null || eDays < 0) {
        await dbRun('ROLLBACK');
        return res.status(400).json({
          error: 'Invalid purchase date or expiry days for recalculation.',
        });
      }
      pDateObj.setDate(pDateObj.getDate() + eDays);
      calculatedExpiryDate = pDateObj.toISOString().split('T')[0];
    }
    if (datepurchase !== undefined) {
      updateInwardsFields.push('datepurchase = ?');
      updateInwardsValues.push(datepurchase);
    }
    updateInwardsFields.push('expiry = ?');
    updateInwardsValues.push(calculatedExpiryDate);

    if (updateInwardsFields.length > 0) {
      const updateInwardsQuery = `UPDATE inwards SET ${updateInwardsFields.join(', ')} WHERE batchcode = ?`;
      await dbRun(updateInwardsQuery, ...updateInwardsValues, batchcode);
    }

    const updateInventoryFields = [];
    const updateInventoryValues = [];

    const qtyDifference = newReceivedQty - oldReceivedQty;
    if (qtyDifference !== 0) {
      await dbRun(
        'UPDATE inventory SET qty = qty + ? WHERE batchcode = ?',
        qtyDifference,
        batchcode,
      );
    }

    if (itemused !== undefined) {
      updateInventoryFields.push('itemused = ?');
      updateInventoryValues.push(itemused);
    }
    if (itemdesc1 !== undefined) {
      updateInventoryFields.push('itemdesc1 = ?');
      updateInventoryValues.push(itemdesc1);
    }
    if (itemdesc2 !== undefined) {
      updateInventoryFields.push('itemdesc2 = ?');
      updateInventoryValues.push(itemdesc2);
    }
    if (itemdesc3 !== undefined) {
      updateInventoryFields.push('itemdesc3 = ?');
      updateInventoryValues.push(itemdesc3);
    }

    if (updateInventoryFields.length > 0) {
      const updateInventoryQuery = `UPDATE inventory SET ${updateInventoryFields.join(', ')} WHERE batchcode = ?`;
      await dbRun(updateInventoryQuery, ...updateInventoryValues, batchcode);
    }

    await dbRun('COMMIT');
    res.json({
      success: true,
      message: 'Inwards record and inventory updated.',
    });
  } catch (err) {
    console.error(err);
    await dbRun('ROLLBACK');
    if (err.message.includes('FOREIGN KEY constraint failed')) {
      return res
        .status(400)
        .json({ error: 'Invalid itemcode or suppcode provided for update.' });
    }
    res.status(500).json({ error: 'Failed to update inwards record.' });
  }
});

function calculateExpiryDays(purchaseDateStr, expiryDateStr) {
  if (!purchaseDateStr || !expiryDateStr) return null;
  const pDate = new Date(purchaseDateStr);
  const eDate = new Date(expiryDateStr);
  if (isNaN(pDate.getTime()) || isNaN(eDate.getTime())) return null;

  const diffTime = eDate.getTime() - pDate.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default router;
