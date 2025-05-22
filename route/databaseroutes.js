import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Sets up the main dir path and sets it up*/
const main_project_dir = path.join(__dirname, "..");
/* sets up every other path that is required throughout the project */
/* Please set up all the paths here, we don't want path.join again and again */
const path_of_db = path.join(main_project_dir, "database_location", "data.db");

const db = new sqlite3.Database(path_of_db);

router.get("/top/five/batches", (req, res) => {
	db.all(
		"SELECT batchcode, SUM(qty) AS total_sold FROM outwards GROUP BY batchcode ORDER BY total_sold DESC LIMIT 5;",
		(err, rows) => {
			if (err) {
				res.status(500).json({ error: "Could not fetch top 5 batches" });
			} else {
				res.json(rows);
			}
		}
	);
});

export default router;