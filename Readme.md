# Inventory Management System

## Features

* Add, track, and update inventory batches
* Manage inwards (purchases) and outwards (sales)
* Compute profit per item and per transaction
* Average purchase and selling price calculation
* Expiry tracking for inventory
* Export inventory data to Excel
* Search, filter, and sort inventory
* Unit-based stock tracking

## Tech Stack

* Frontend: Svelte
* Backend: Node.js (Express)
* Database: SQLite3(Can use any by changing the routes APIs)


## How to Run

### Backend

You can paste these commands 
in Git bash to run 
(If you have `make` installed).
`bun i`
and `cd route` `bun i`.

After the packages are installed you can do 
`cd ..` and `make`

## Database Setup

* Uses SQLite (`data.db`)
* Tables:

  * `itemlist`
  * `inventory`
  * `inwards`
  * `outwards`
  * `suppliers`
  * `customers`

Data is automatically updated via API interactions when inwards or outwards are recorded.

## License

Currently not decided, can contact via a pull request if 
there is an urgency.
