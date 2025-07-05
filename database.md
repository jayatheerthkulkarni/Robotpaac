
# Inventory Database Schema (Updated with DECIMAL(10, 3) for all relevant numerical fields)

## Table: itemlist

Stores the master list of all items that can be stocked or sold.

```sql
CREATE TABLE itemlist (
    itemcode VARCHAR(13) PRIMARY KEY,
    itemname VARCHAR(50) NOT NULL,
    min_stock_level DECIMAL(10, 3) NOT NULL DEFAULT 10.000 CHECK (min_stock_level >= 0)
);
```

## Table: suppliers

Stores information about suppliers who provide items.

```sql
CREATE TABLE suppliers (
    suppcode VARCHAR(13) PRIMARY KEY,
    suppname VARCHAR(50) NOT NULL,
    suppcontact VARCHAR(10) NOT NULL
);
```

## Table: customers

Stores information about customers who receive items. Includes an optional notes column for internal comments.

```sql
CREATE TABLE customers (
    custcode VARCHAR(13) PRIMARY KEY,
    custname VARCHAR(50) NOT NULL,
    custcontact VARCHAR(10) NOT NULL,
    notes TEXT
);
```

## Table: inwards

Stores records of incoming stock from suppliers. Each entry represents a purchase batch. Immutable once inserted.
Includes profit estimation via `estimate_percentage`.

```sql
CREATE TABLE inwards (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    suppcode VARCHAR(13) NOT NULL,
    requestedqty DECIMAL(10, 3) NOT NULL, -- CHANGED from INT to DECIMAL(10, 3)
    receivedqty DECIMAL(10, 3) NOT NULL,  -- CHANGED from INT to DECIMAL(10, 3)
    purchase_price_per_unit DECIMAL(10, 3) NOT NULL CHECK (purchase_price_per_unit >= 0), -- CHANGED DECIMAL(10, 2) to DECIMAL(10, 3)
    estimate_percentage DECIMAL(5, 2) CHECK (estimate_percentage >= 0),
    datepurchase DATE NOT NULL,
    expiry DATE NOT NULL,
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode),
    FOREIGN KEY (suppcode) REFERENCES suppliers(suppcode)
);
```

## Table: inventory

Tracks the current live stock available per batch. Automatically updated via triggers.

```sql
CREATE TABLE inventory (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    itemused VARCHAR(45),
    itemdesc1 TEXT,
    itemdesc2 TEXT,
    itemdesc3 TEXT,
    qty DECIMAL(10, 3) NOT NULL CHECK (qty >= 0), -- CHANGED from INTEGER to DECIMAL(10, 3)
    FOREIGN KEY (batchcode) REFERENCES inwards(batchcode),
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode)
);
```

## Table: outwards

Records dispatches of items to customers. Each entry removes quantity from a batch. Immutable once inserted.

```sql
CREATE TABLE outwards (
    outid VARCHAR(13) PRIMARY KEY,
    batchcode VARCHAR(13) NOT NULL,
    custcode VARCHAR(13) NOT NULL,
    qty DECIMAL(10, 3) NOT NULL CHECK (qty > 0), -- CHANGED from INTEGER to DECIMAL(10, 3)
    selling_price_per_unit DECIMAL(10, 3) NOT NULL CHECK (selling_price_per_unit >= 0), -- CHANGED DECIMAL(10, 2) to DECIMAL(10, 3)
    dateout DATE NOT NULL,
    FOREIGN KEY (batchcode) REFERENCES inventory(batchcode),
    FOREIGN KEY (custcode) REFERENCES customers(custcode)
);
```

## Table: units

```sql
CREATE TABLE units (
    itemcode VARCHAR(13) PRIMARY KEY,
    unit_name VARCHAR(20) NOT NULL, -- e.g., 'kg', 'liter', 'pcs', 'box'
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode)
);
```

---

## Trigger: trg_check_inventory_before_outwards

Prevents selling more items than available in stock.

```sql
CREATE TRIGGER trg_check_inventory_before_outwards
BEFORE INSERT ON outwards
BEGIN
    SELECT
    CASE
        WHEN (
            SELECT qty FROM inventory WHERE batchcode = NEW.batchcode
        ) < NEW.qty
        THEN RAISE(ABORT, 'Not enough stock available for this batch')
    END;
END;
```

## Trigger: trg_after_outwards_insert

Automatically reduces quantity from inventory after a sale.

```sql
CREATE TRIGGER trg_after_outwards_insert
AFTER INSERT ON outwards
BEGIN
    UPDATE inventory
    SET qty = qty - NEW.qty
    WHERE batchcode = NEW.batchcode;

    SELECT
    CASE
        WHEN (
            SELECT qty FROM inventory WHERE batchcode = NEW.batchcode
        ) < 0
        THEN RAISE(ABORT, 'Inventory fell below 0. This should never happen.')
    END;
END;
```

## Trigger: trg_auto_inventory_insert

Automatically inserts stock into inventory after a new inwards record.

```sql
CREATE TRIGGER trg_auto_inventory_insert
AFTER INSERT ON inwards
BEGIN
    INSERT INTO inventory (batchcode, itemcode, qty)
    VALUES (NEW.batchcode, NEW.itemcode, NEW.receivedqty);
END;
```

---

## Table Summary

| Table name | Description                                 | Mutable    | Quantity/Price Columns (Type) |
| ---------- | ------------------------------------------- | ---------- | ----------------------------- |
| itemlist   | Master list of items                        | Yes        | `min_stock_level` (DECIMAL)   |
| suppliers  | Supplier information                        | Yes        |                               |
| customers  | Customer info with optional notes           | Yes        |                               |
| inwards    | Incoming stock records with profit estimate | No         | `requestedqty` (DECIMAL), `receivedqty` (DECIMAL), `purchase_price_per_unit` (DECIMAL) |
| inventory  | Current stock by batch                      | Yes (live) | `qty` (DECIMAL)               |
| outwards   | Dispatch records with pricing               | No         | `qty` (DECIMAL), `selling_price_per_unit` (DECIMAL) |
| units      | Measurement unit for each item              | Yes        |                               |
