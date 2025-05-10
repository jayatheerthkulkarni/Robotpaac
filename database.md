#  Inventory Database Schema

This database tracks item stock, purchase inwards, and customer outwards efficiently while ensuring audit safety and real-time stock accuracy.

---

## Table Definitions

>  **Note**: Tables must be created in this exact order to satisfy foreign key dependencies.

### 1. `itemlist` — Item Master

```sql
CREATE TABLE itemlist (
    itemcode VARCHAR(13) PRIMARY KEY,
    itemname VARCHAR(50) NOT NULL
);
```

### 2. `suppliers` — Supplier Master

```sql
CREATE TABLE suppliers (
    suppcode VARCHAR(13) PRIMARY KEY,
    suppname VARCHAR(50) NOT NULL,
    suppcontact VARCHAR(10) NOT NULL
);
```

### 3. `customers` — Customer Master

```sql
CREATE TABLE customers (
    custcode VARCHAR(13) PRIMARY KEY,
    custname VARCHAR(50) NOT NULL,
    custcontact VARCHAR(10) NOT NULL
);
```

### 4. `inwards` — Purchase Records (Immutable)

```sql
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
```

### 5. `inventory` — Live Stock by Batch

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

### 6. `outwards` — Sales/Dispatch Records (Immutable)

```sql
CREATE TABLE outwards (
    outid VARCHAR(13) PRIMARY KEY,
    batchcode VARCHAR(13) NOT NULL,
    custcode VARCHAR(13) NOT NULL,
    qty INTEGER NOT NULL CHECK (qty > 0),
    dateout DATE NOT NULL,
    FOREIGN KEY (batchcode) REFERENCES inventory(batchcode),
    FOREIGN KEY (custcode) REFERENCES customers(custcode)
);
```

---

##  Trigger Logic

Triggers ensure inventory integrity by:

* Preventing overselling.
* Automatically reducing inventory after each sale.
* Keeping `inwards` untouched for tax & audit compliance.

---

###  Trigger 1: Prevent Overselling (Although there is a guardrail this is better)

```sql
CREATE TRIGGER trg_check_inventory_before_outwards
BEFORE INSERT ON outwards
BEGIN
    SELECT
    CASE
        WHEN (
            SELECT qty FROM inventory WHERE batchcode = NEW.batchcode
        ) < NEW.qty
        THEN RAISE(ABORT, ' Not enough stock available for this batch')
    END;
END;
```

 Ensures that sales do not exceed available stock.
 Aborts insert if inventory is insufficient.

---

###  Trigger 2: Reduce Inventory After Sale

```sql
CREATE TRIGGER trg_after_outwards_insert
AFTER INSERT ON outwards
BEGIN
    UPDATE inventory
    SET qty = qty - NEW.qty
    WHERE batchcode = NEW.batchcode;

    -- Extra Guard Rail: Ensure inventory never goes negative (failsafe)
    SELECT
    CASE
        WHEN (
            SELECT qty FROM inventory WHERE batchcode = NEW.batchcode
        ) < 0
        THEN RAISE(ABORT, ' Inventory fell below 0. This should never happen.')
    END;
END;
```

 Updates inventory automatically.
 Has a **failsafe check** in case logic ever bypasses trigger 1 (e.g., via direct manipulation).

---

##  Summary

*  `inwards` — Immutable purchase log.
*  `outwards` — Immutable dispatch log.
*  `inventory` — Live stock tracking.
*  Triggers ensure logical integrity and business safety.

---
