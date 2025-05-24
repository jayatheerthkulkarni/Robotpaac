import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main_project_dir = path.join(__dirname, "..");
const path_of_db = path.join(main_project_dir, "database_location", "data.db");

const db = new sqlite3.Database(path_of_db);

router.get("/top/five/batches", (req, res) => {
	db.all(
		`SELECT batchcode, SUM(qty) AS total_sold
		 FROM outwards
		 GROUP BY batchcode
		 ORDER BY total_sold DESC
		 LIMIT 5;`,
		(err, rows) => {
			if (err) {
				res.status(500).json({ error: "Could not fetch top 5 batches" });
			} else {
				res.json(rows);
			}
		}
	);
});

router.get("/expired/total", (req, res) => {
	db.get(
		`SELECT SUM(qty) AS total_expired_qty
		 FROM inventory
		 JOIN inwards USING(batchcode)
		 JOIN itemlist USING(itemcode)
		 WHERE expiry < DATE('now') AND qty > 0;`,
		(err, row) => {
			if (err) {
				res.status(500).json({ error: "Cannot get total expired items" });
			} else {
				res.json(row);
			}
		}
	);
});

router.get("/expired", (req, res) => {
	db.all(
		`SELECT itemname, inventory.batchcode, qty, expiry
		 FROM inventory
		 JOIN inwards USING(batchcode)
		 JOIN itemlist USING(itemcode)
		 WHERE expiry < DATE('now') AND qty > 0;`,
		(err, rows) => {
			if (err) {
				res.status(500).json({ error: "Cannot find expired items from the server try again" });
			} else {
				res.json(rows);
			}
		}
	);
});

router.get("/total/items/bought", (req, res) => {
	const queryTimeSeries = `
		SELECT datepurchase, SUM(receivedqty) AS total_bought_on_date
		FROM inwards
		GROUP BY datepurchase
		ORDER BY datepurchase ASC;
	`;
	const queryGrandTotal = `
		SELECT SUM(receivedqty) AS grand_total_bought
		FROM inwards;
	`;

	Promise.all([
		new Promise((resolve, reject) => {
			db.all(queryTimeSeries, (err, rows) => {
				if (err) return reject(err);
				resolve(rows);
			});
		}),
		new Promise((resolve, reject) => {
			db.get(queryGrandTotal, (err, row) => {
				if (err) return reject(err);
				resolve(row);
			});
		})
	]).then(([timeSeriesData, grandTotalData]) => {
		res.json({
			timeSeries: timeSeriesData || [],
			grandTotal: grandTotalData ? grandTotalData.grand_total_bought : 0
		});
	}).catch(() => {
		res.status(500).json({ error: "Could not fetch total items bought data" });
	});
});

router.get("/total/items/sold", (req, res) => {
	const queryTimeSeries = `
		SELECT
		dateout,
		SUM(qty) AS total_sold_on_date
		FROM outwards
		GROUP BY dateout
		ORDER BY dateout ASC;
	`;
	const queryGrandTotal = `
		SELECT
		SUM(qty) AS grand_total_sold
		FROM outwards;
	`;

	Promise.all([
		new Promise((resolve, reject) => {
		db.all(queryTimeSeries, (err, rows) => {
			if (err) {
			console.error("Error in queryTimeSeries (sold):", err);
			return reject(err);
			}
			resolve(rows);
		});
		}),
		new Promise((resolve, reject) => {
		db.get(queryGrandTotal, (err, row) => {
			if (err) {
			console.error("Error in queryGrandTotal (sold):", err);
			return reject(err);
			}
			resolve(row);
		});
		})
	]).then(([timeSeriesData, grandTotalData]) => {
		res.json({
		timeSeries: timeSeriesData || [],
		grandTotal: grandTotalData ? grandTotalData.grand_total_sold : 0
		});
	}).catch(err => {
		console.error("Error fetching total items sold from backend route:", err);
		res.status(500).json({ error: "Could not fetch total items sold data" });
	});
});


router.get("/batches/summary", (req, res) => {
	const query = `
		SELECT 
		i.batchcode, 
		il.itemname,
		i.receivedqty,
		inv.qty AS current_stock,
		i.expiry
		FROM inwards i
		JOIN itemlist il ON i.itemcode = il.itemcode
		LEFT JOIN inventory inv ON i.batchcode = inv.batchcode 
		ORDER BY i.datepurchase DESC, i.batchcode;
	`;
	db.all(query, (err, rows) => {
		if (err) {
		console.error("Error fetching batch summary:", err);
		res.status(500).json({ error: "Could not fetch batch summary" });
		} else {
		res.json(rows || []);
		}
	});
});

router.get("/batch/details/:batchcode", (req, res) => {
	const { batchcode } = req.params;
	const query = `
		SELECT 
		i.batchcode,
		i.itemcode,
		il.itemname,
		i.suppcode,
		s.suppname,
		s.suppcontact,
		i.requestedqty,
		i.receivedqty,
		i.datepurchase,
		i.expiry,
		inv.qty AS current_stock_in_inventory,
		inv.itemused,
		inv.itemdesc1,
		inv.itemdesc2,
		inv.itemdesc3,
		(SELECT SUM(o.qty) FROM outwards o WHERE o.batchcode = i.batchcode) AS total_sold_from_batch
		FROM inwards i
		JOIN itemlist il ON i.itemcode = il.itemcode
		JOIN suppliers s ON i.suppcode = s.suppcode
		LEFT JOIN inventory inv ON i.batchcode = inv.batchcode
		WHERE i.batchcode = ?;
	`;
	db.get(query, [batchcode], (err, row) => {
		if (err) {
		console.error("Error fetching batch details for " + batchcode + ":", err);
		res.status(500).json({ error: "Could not fetch batch details" });
		} else if (row) {
		res.json(row);
		} else {
		res.status(404).json({ error: "Batch not found" });
		}
	});
});

router.get("/lowstock/items", (req, res) => {
	const query = `
		SELECT 
		inv.itemcode,
		il.itemname,
		SUM(inv.qty) AS total_current_stock,
		il.min_stock_level
		FROM inventory inv
		JOIN itemlist il ON inv.itemcode = il.itemcode
		GROUP BY inv.itemcode, il.itemname, il.min_stock_level
		HAVING SUM(inv.qty) <= il.min_stock_level AND SUM(inv.qty) > 0
		ORDER BY (CAST(SUM(inv.qty) AS REAL) / il.min_stock_level) ASC, total_current_stock ASC;
	`;
	db.all(query, [], (err, rows) => {
		if (err) {
		console.error("Error fetching low stock items:", err);
		res.status(500).json({ error: "Could not fetch low stock items" });
		} else {
		res.json(rows || []);
		}
	});
});

router.get("/profits/summary", (req, res) => {
	const query = `
		SELECT
		o.outid AS sale_id,
		o.dateout AS sale_date,
		o.batchcode,
		i.itemcode,
		il.itemname,
		o.custcode,
		c.custname,
		o.qty AS quantity_sold,
		i.purchase_price_per_unit,
		o.selling_price_per_unit,
		(o.selling_price_per_unit - i.purchase_price_per_unit) AS profit_per_unit,
		(o.selling_price_per_unit - i.purchase_price_per_unit) * o.qty AS total_profit_for_transaction
		FROM outwards o
		JOIN inwards i ON o.batchcode = i.batchcode
		JOIN itemlist il ON i.itemcode = il.itemcode
		JOIN customers c ON o.custcode = c.custcode
		ORDER BY o.dateout DESC, o.outid DESC;
	`;

	db.all(query, [], (err, rows) => {
		if (err) {
		console.error("Error fetching profit summary:", err);
		res.status(500).json({ error: "Could not fetch profit summary" });
		} else {
		const grandTotalProfit = rows.reduce((sum, row) => sum + row.total_profit_for_transaction, 0);
		res.json({
			transactions: rows || [],
			grandTotalProfit: grandTotalProfit
		});
		}
	});
});

router.get("/profits/byitem", (req, res) => {
	const query = `
		SELECT
		i.itemcode,
		il.itemname,
		SUM(o.qty) AS total_quantity_sold,
		SUM((o.selling_price_per_unit - i.purchase_price_per_unit) * o.qty) AS total_profit_for_item,
		AVG(i.purchase_price_per_unit) as avg_purchase_price,
		AVG(o.selling_price_per_unit) as avg_selling_price
		FROM outwards o
		JOIN inwards i ON o.batchcode = i.batchcode
		JOIN itemlist il ON i.itemcode = il.itemcode
		GROUP BY i.itemcode, il.itemname
		ORDER BY total_profit_for_item DESC;
	`;
	db.all(query, [], (err, rows) => {
		if (err) {
		console.error("Error fetching profit by item:", err);
		res.status(500).json({ error: "Could not fetch profit by item" });
		} else {
		res.json(rows || []);
		}
	});
});

router.get("/top/suppliers", (req, res) => {
	const limit = parseInt(req.query.limit, 10) || 5; // Default to top 5
	const query = `
		SELECT
		s.suppcode,
		s.suppname,
		COUNT(DISTINCT i.batchcode) AS total_batches_supplied,
		SUM(i.receivedqty) AS total_quantity_supplied,
		SUM(i.receivedqty * i.purchase_price_per_unit) AS total_purchase_value
		FROM inwards i
		JOIN suppliers s ON i.suppcode = s.suppcode
		GROUP BY s.suppcode, s.suppname
		ORDER BY total_purchase_value DESC 
		LIMIT ?;
	`;
	db.all(query, [limit], (err, rows) => {
		if (err) {
		console.error("Error fetching top suppliers:", err);
		res.status(500).json({ error: "Could not fetch top suppliers" });
		} else {
		res.json(rows || []);
		}
	});
});

router.get("/top/customers", (req, res) => {
	const limit = parseInt(req.query.limit, 10) || 5; // Default to top 5
	const query = `
		SELECT
		c.custcode,
		c.custname,
		COUNT(o.outid) AS total_orders,
		SUM(o.qty) AS total_quantity_purchased,
		SUM(o.qty * o.selling_price_per_unit) AS total_revenue_from_customer,
		SUM((o.selling_price_per_unit - i.purchase_price_per_unit) * o.qty) AS total_profit_from_customer
		FROM outwards o
		JOIN customers c ON o.custcode = c.custcode
		JOIN inwards i ON o.batchcode = i.batchcode 
		GROUP BY c.custcode, c.custname
		ORDER BY total_profit_from_customer DESC
		LIMIT ?;
	`;
	db.all(query, [limit], (err, rows) => {
		if (err) {
		console.error("Error fetching top customers:", err);
		res.status(500).json({ error: "Could not fetch top customers" });
		} else {
		res.json(rows || []);
		}
	});
});

export default router;
