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
      'SELECT suppcode AS id, suppname AS name, suppcontact AS contact FROM suppliers',
    );
    res.json(rows);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { suppcode, suppname, suppcontact } = req.body;
  try {
    await dbRun(
      'INSERT INTO suppliers (suppcode, suppname, suppcontact) VALUES (?, ?, ?)',
      suppcode,
      suppname,
      suppcontact,
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
      'SELECT COUNT(*) AS count FROM inwards WHERE suppcode = ?',
      id,
    );
    if (count > 0) {
      return res
        .status(400)
        .json({ error: 'Cannot delete supplier with existing purchases' });
    }
    await dbRun('DELETE FROM suppliers WHERE suppcode = ?', id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
