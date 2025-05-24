# Inventory Database Schema

A structured schema to manage **item stock**, **supplier inwards**, and **customer outwards**, while ensuring **audit integrity**, **real-time stock accuracy**, and enabling **profit calculation**.

---

## Table Structure

> **Creation Order Matters** — tables are created in dependency order to satisfy foreign keys.
> **Pricing Fields Added** — `purchase_price_per_unit` in `inwards` and `selling_price_per_unit` in `outwards` are crucial for profit analysis.

---

### 1. `itemlist` – Master List of Items

```sql
CREATE TABLE itemlist (
    itemcode VARCHAR(13) PRIMARY KEY,
    itemname VARCHAR(50) NOT NULL
);
```

### 2. `suppliers` – Supplier Master

```sql
CREATE TABLE suppliers (
    suppcode VARCHAR(13) PRIMARY KEY,
    suppname VARCHAR(50) NOT NULL,
    suppcontact VARCHAR(10) NOT NULL
);
```

### 3. `customers` – Customer Master

```sql
CREATE TABLE customers (
    custcode VARCHAR(13) PRIMARY KEY,
    custname VARCHAR(50) NOT NULL,
    custcontact VARCHAR(10) NOT NULL
);
```

### 4. `inwards` – Immutable Purchase Records

```sql
CREATE TABLE inwards (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    suppcode VARCHAR(13) NOT NULL,
    requestedqty INT NOT NULL,
    receivedqty INT NOT NULL,
    purchase_price_per_unit DECIMAL(10, 2) NOT NULL CHECK (purchase_price_per_unit >= 0), -- Cost price per unit for this batch
    datepurchase DATE NOT NULL,
    expiry DATE NOT NULL,
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode),
    FOREIGN KEY (suppcode) REFERENCES suppliers(suppcode)
);
```

### 5. `inventory` – Live Stock by Batch

```sql
CREATE TABLE inventory (
    batchcode VARCHAR(13) PRIMARY KEY,
    itemcode VARCHAR(13) NOT NULL,
    itemused VARCHAR(45),
    itemdesc1 TEXT,
    itemdesc2 TEXT,
    itemdesc3 TEXT,
    qty INTEGER NOT NULL CHECK (qty >= 0),
    FOREIGN KEY (batchcode) REFERENCES inwards(batchcode),
    FOREIGN KEY (itemcode) REFERENCES itemlist(itemcode)
);
```

### 6. `outwards` – Immutable Dispatch Records

```sql
CREATE TABLE outwards (
    outid VARCHAR(13) PRIMARY KEY,
    batchcode VARCHAR(13) NOT NULL,
    custcode VARCHAR(13) NOT NULL,
    qty INTEGER NOT NULL CHECK (qty > 0),
    selling_price_per_unit DECIMAL(10, 2) NOT NULL CHECK (selling_price_per_unit >= 0), -- Selling price per unit for this transaction
    dateout DATE NOT NULL,
    FOREIGN KEY (batchcode) REFERENCES inventory(batchcode),
    FOREIGN KEY (custcode) REFERENCES customers(custcode)
);
```

## Trigger System

Automated triggers enforce stock integrity, prevent overselling, and ensure data consistency. (Triggers remain unchanged as they primarily deal with quantity, not price).

### Trigger 1: Prevent Overselling

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

### Trigger 2: Reduce Stock After Sale

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

### Trigger 3: Auto-Insert Into Inventory After Inward

```sql
CREATE TRIGGER trg_auto_inventory_insert
AFTER INSERT ON inwards
BEGIN
    INSERT INTO inventory (batchcode, itemcode, qty)
    VALUES (NEW.batchcode, NEW.itemcode, NEW.receivedqty);
END;
```

## Summary

| Table     | Purpose                                     | Mutable?   |
| --------- | ------------------------------------------- | ---------- |
| itemlist  | Master reference for items                  | Yes        |
| suppliers | Supplier contact and ID                     | Yes        |
| customers | Customer contact and ID                     | Yes        |
| inwards   | Purchase logs (with expiry and cost price)  | No         |
| inventory | Current stock by batch                      | Yes (live) |
| outwards  | Sales/dispatch records (with selling price) | No         |

Triggers keep everything in sync and safe from bad inserts. The addition of pricing fields in `inwards` and `outwards` tables now allows for profit calculations.