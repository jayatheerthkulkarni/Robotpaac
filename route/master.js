import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main_project_dir = path.join(__dirname, '..');
const path_of_db = path.join(main_project_dir, 'database_location', 'data.db');

const db = new sqlite3.Database(path_of_db);

router.post('/add-item', (req, res) => {
  const { itemcode, itemname, min_stock_level, unit_name } = req.body;

  if (!itemcode || !itemname) {
    return res
      .status(400)
      .json({ error: 'Item Code and Item Name are required.' });
  }

  db.serialize(() => {
    db.run('BEGIN TRANSACTION;');

    const insertItemlistSql = `INSERT INTO itemlist (itemcode, itemname, min_stock_level) VALUES (?, ?, ?)`;
    db.run(
      insertItemlistSql,
      [itemcode, itemname, min_stock_level || 0],
      function (err) {
        if (err) {
          db.run('ROLLBACK;');
          if (
            err.message.includes('UNIQUE constraint failed: itemlist.itemcode')
          ) {
            return res.status(409).json({ error: 'Item Code already exists.' });
          }
          return res
            .status(500)
            .json({ error: 'Failed to add item to itemlist.' });
        }

        if (unit_name) {
          const insertUnitsSql = `INSERT INTO units (itemcode, unit_name) VALUES (?, ?)`;
          db.run(insertUnitsSql, [itemcode, unit_name], function (err) {
            if (err) {
              db.run('ROLLBACK;');
              return res
                .status(500)
                .json({ error: 'Failed to add unit for item.' });
            }
            db.run('COMMIT;');
            res
              .status(201)
              .json({ message: 'Item and unit added successfully.' });
          });
        } else {
          db.run('COMMIT;');
          res
            .status(201)
            .json({ message: 'Item added successfully (no unit specified).' });
        }
      },
    );
  });
});

router.get('/all-inventory', (req, res) => {
  const query = `
        SELECT
            inv.batchcode,
            inv.itemcode,
            il.itemname,
            inv.qty AS current_stock_in_batch,
            i.datepurchase,
            i.expiry,
            i.purchase_price_per_unit,
            i.estimate_percentage,
            s.suppname,
            il.min_stock_level,
            un.unit_name,
            inv.itemused,
            inv.itemdesc1,
            inv.itemdesc2,
            inv.itemdesc3
        FROM inventory inv
        JOIN itemlist il ON inv.itemcode = il.itemcode
        JOIN inwards i ON inv.batchcode = i.batchcode
        JOIN suppliers s ON i.suppcode = s.suppcode
        LEFT JOIN units un ON il.itemcode = un.itemcode
        ORDER BY inv.itemcode, i.expiry ASC;
    `;
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Could not fetch all inventory data' });
    } else {
      res.json(rows || []);
    }
  });
});

export default router;
