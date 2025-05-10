#!/bin/bash
# Only initialize schema when the directory doesn't already exist
# Please be careful while editing this file

TARGET_DIR="database_location"
TARGET_FILE="data.db"
FILE_PATH="$TARGET_DIR/$TARGET_FILE"

if [ -d "$TARGET_DIR" ]; then
  # Directory already exists → do nothing and exit cleanly
  echo -e "\033[32mDatabase folder found please do not create this manually
  if done delete and let it happen automatically
  Do not delete the directory without consulting\033[0m"
  exit 0
fi

# Directory does not exist: create it and initialize the DB
mkdir -p "$TARGET_DIR" || { echo "Error: failed to create directory."; exit 1; }

sqlite3 "$FILE_PATH" <<'EOF'
PRAGMA foreign_keys = ON;

-- 1. Item Master
CREATE TABLE itemlist (
    itemcode VARCHAR(13) PRIMARY KEY,
    itemname VARCHAR(50) NOT NULL
);

-- 2. Supplier Master
CREATE TABLE suppliers (
    suppcode VARCHAR(13) PRIMARY KEY,
    suppname VARCHAR(50) NOT NULL,
    suppcontact VARCHAR(10) NOT NULL
);

-- 3. Customer Master
CREATE TABLE customers (
    custcode VARCHAR(13) PRIMARY KEY,
    custname VARCHAR(50) NOT NULL,
    custcontact VARCHAR(10) NOT NULL
);

-- 4. Inwards (Immutable Purchase Records)
CREATE TABLE inwards (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    suppcode VARCHAR(13) NOT NULL,
    requestedqty INT NOT NULL,
    receivedqty INT NOT NULL,
    datepurchase DATE NOT NULL,
    expiry DATE NOT NULL,
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode),
    FOREIGN KEY (suppcode) REFERENCES suppliers(suppcode)
);

-- 5. Inventory (Live Stock per Batch)
CREATE TABLE inventory (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    itemused VARCHAR(45),
    itemdesc1 TEXT,
    itemdesc2 TEXT,
    itemdesc3 TEXT,
    qty INTEGER NOT NULL CHECK(qty >= 0),
    FOREIGN KEY (batchcode) REFERENCES inwards(batchcode),
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode)
);

-- 6. Outwards (Immutable Sales/Dispatch Records)
CREATE TABLE outwards (
    outid VARCHAR(13) PRIMARY KEY,
    batchcode VARCHAR(13) NOT NULL,
    custcode VARCHAR(13) NOT NULL,
    qty INTEGER NOT NULL CHECK(qty > 0),
    dateout DATE NOT NULL,
    FOREIGN KEY (batchcode) REFERENCES inventory(batchcode),
    FOREIGN KEY (custcode) REFERENCES customers(custcode)
);

-- Trigger 1: Prevent Overselling
CREATE TRIGGER trg_check_inventory_before_outwards
BEFORE INSERT ON outwards
BEGIN
    SELECT CASE
        WHEN (SELECT qty FROM inventory WHERE batchcode = NEW.batchcode) < NEW.qty
        THEN RAISE(ABORT, 'Not enough stock available for this batch')
    END;
END;

-- Trigger 2: Reduce Inventory After Sale
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
EOF

if [ $? -eq 0 ]; then
  echo "Database initialized at '$FILE_PATH'."
  exit 0
else
  echo "Error: failed to initialize database schema or triggers."
  exit 1
fi
