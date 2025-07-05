import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_DIR = path.resolve(__dirname, 'database_location');
const TARGET_FILE = 'data.db';
const FILE_PATH = path.join(TARGET_DIR, TARGET_FILE);

if (fs.existsSync(FILE_PATH)) {
  console.log(`Database already exists at '${FILE_PATH}'.`);
  process.exit(0);
}

fs.mkdirSync(TARGET_DIR, { recursive: true });

const db = new sqlite3.Database(FILE_PATH, (err) => {
  if (err) {
    console.error('Failed to create database:', err.message);
    process.exit(1);
  }
});

const schema = `
PRAGMA foreign_keys = ON;

CREATE TABLE itemlist (
    itemcode VARCHAR(13) PRIMARY KEY,
    itemname VARCHAR(50) NOT NULL,
    min_stock_level DECIMAL(10, 3) NOT NULL DEFAULT 10.000 CHECK (min_stock_level >= 0)
);

CREATE TABLE suppliers (
    suppcode VARCHAR(13) PRIMARY KEY,
    suppname VARCHAR(50) NOT NULL,
    suppcontact VARCHAR(10) NOT NULL
);

CREATE TABLE customers (
    custcode VARCHAR(13) PRIMARY KEY,
    custname VARCHAR(50) NOT NULL,
    custcontact VARCHAR(10) NOT NULL,
    notes TEXT
);

CREATE TABLE inwards (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    suppcode VARCHAR(13) NOT NULL,
    requestedqty DECIMAL(10, 3) NOT NULL,
    receivedqty DECIMAL(10, 3) NOT NULL,
    purchase_price_per_unit DECIMAL(10, 3) NOT NULL CHECK (purchase_price_per_unit >= 0),
    estimate_percentage DECIMAL(5, 2) CHECK (estimate_percentage >= 0),
    datepurchase DATE NOT NULL,
    expiry DATE NOT NULL,
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode),
    FOREIGN KEY (suppcode) REFERENCES suppliers(suppcode)
);

CREATE TABLE inventory (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    itemused VARCHAR(45),
    itemdesc1 TEXT,
    itemdesc2 TEXT,
    itemdesc3 TEXT,
    qty DECIMAL(10, 3) NOT NULL CHECK (qty >= 0),
    FOREIGN KEY (batchcode) REFERENCES inwards(batchcode),
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode)
);

CREATE TABLE outwards (
    outid VARCHAR(13) PRIMARY KEY,
    batchcode VARCHAR(13) NOT NULL,
    custcode VARCHAR(13) NOT NULL,
    qty DECIMAL(10, 3) NOT NULL CHECK (qty > 0),
    selling_price_per_unit DECIMAL(10, 3) NOT NULL CHECK (selling_price_per_unit >= 0),
    dateout DATE NOT NULL,
    FOREIGN KEY (batchcode) REFERENCES inventory(batchcode),
    FOREIGN KEY (custcode) REFERENCES customers(custcode)
);

CREATE TRIGGER trg_check_inventory_before_outwards
BEFORE INSERT ON outwards
BEGIN
    SELECT CASE
        WHEN (SELECT qty FROM inventory WHERE batchcode = NEW.batchcode) < NEW.qty
        THEN RAISE(ABORT, 'Not enough stock available for this batch')
    END;
END;

CREATE TRIGGER trg_after_outwards_insert
AFTER INSERT ON outwards
BEGIN
    UPDATE inventory
    SET qty = qty - NEW.qty
    WHERE batchcode = NEW.batchcode;

    SELECT CASE
        WHEN (SELECT qty FROM inventory WHERE batchcode = NEW.batchcode) < 0
        THEN RAISE(ABORT, 'Inventory fell below 0. This should never happen.')
    END;
END;

CREATE TRIGGER trg_auto_inventory_insert
AFTER INSERT ON inwards
BEGIN
    INSERT INTO inventory (batchcode, itemcode, qty)
    VALUES (NEW.batchcode, NEW.itemcode, NEW.receivedqty);
END;

CREATE TABLE units (
    itemcode VARCHAR(13) PRIMARY KEY,
    unit_name VARCHAR(20) NOT NULL,
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode)
);
`;

db.exec(schema, (err) => {
  if (err) {
    console.error('Failed to initialize schema:', err.message);
    process.exit(1);
  } else {
    console.log(`Database initialized at '${FILE_PATH}'.`);
    db.close();
  }
});
