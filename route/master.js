import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main_project_dir = path.join(__dirname, '..');
const path_of_db = path.join(main_project_dir, 'database_location', 'data.db');

console.log('Master API DB Path: ', path_of_db);
const db = new sqlite3.Database(path_of_db);

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
            s.suppname,
            il.min_stock_level,
            inv.itemused,
            inv.itemdesc1,
            inv.itemdesc2,
            inv.itemdesc3
        FROM inventory inv
        JOIN itemlist il ON inv.itemcode = il.itemcode
        JOIN inwards i ON inv.batchcode = i.batchcode
        JOIN suppliers s ON i.suppcode = s.suppcode
        ORDER BY inv.itemcode, i.expiry ASC;
    `;
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching all inventory:', err);
      res.status(500).json({ error: 'Could not fetch all inventory data' });
    } else {
      res.json(rows || []);
    }
  });
});

export default router;
