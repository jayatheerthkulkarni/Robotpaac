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
Installing bun run time is recommended 
but if you want to use node
You can edit the make file and it will be just fine.

Use can use these commands to run.

`make` in the main directory
and the suggested port is 
3000,
you can change the port only if you want to change the frontend APIs.

The codebase itself is a prototype
has a lot of non standard practices, which will be slowly removed.


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
