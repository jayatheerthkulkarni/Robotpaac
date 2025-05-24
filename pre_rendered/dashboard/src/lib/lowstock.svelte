
<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	let lowStockItems = $state([]);
	let isLoading = $state(true);
	let errorMessage = $state('');

	async function fetchLowStockItems() {
		isLoading = true;
		errorMessage = '';
		try {
			const response = await axios.get(`http://localhost:3000/api/data/lowstock/items`);
			lowStockItems = response.data;
		} catch (error) {
			console.error('Error fetching low stock items:', error);
			errorMessage = 'Failed to load low stock items.';
			lowStockItems = [];
		} finally {
			isLoading = false;
		}
	}

	onMount(() => {
		fetchLowStockItems();
	});

</script>

<div class="container">
	<div class="header">
		<p class="title-text">Low Stock Items (Below Reorder Point)</p>
	</div>

	{#if isLoading}
		<div class="loading-state"><p>Loading low stock items...</p></div>
	{:else if errorMessage}
		<div class="error-state"><p>{errorMessage}</p></div>
	{:else if lowStockItems.length === 0}
		<p class="no-data-message">All items are currently above their defined minimum stock levels.</p>
	{:else}
		<div class="list-container">
			<table class="items-table">
				<thead>
					<tr>
						<th>Item Code</th>
						<th>Item Name</th>
						<th>Current Stock</th>
						<th>Min. Stock Level</th>
					</tr>
				</thead>
				<tbody>
					{#each lowStockItems as item (item.itemcode)}
						<tr class="item-row">
							<td>{item.itemcode}</td>
							<td>{item.itemname}</td>
							<td class="stock-warning">{item.total_current_stock}</td>
							<td>{item.min_stock_level}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<style>
	.container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
        padding: 1.5rem;
        box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	}

	.header {
		text-align: left;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
	}

	.title-text {
		font-size: 1.6rem;
		font-weight: 600;
        margin: 0;
		color: #333;
	}

	.list-container {
		overflow-x: auto;
        flex-grow: 1;
	}

	.items-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.items-table th, .items-table td {
		border: 1px solid #ddd;
		padding: 8px 12px;
		text-align: left;
	}

	.items-table th {
		background-color: #f2f2f2;
		font-weight: 600;
	}
    .items-table td.stock-warning {
        color: #d9534f;
        font-weight: bold;
    }
	

	.loading-state, .error-state {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		font-size: 1.2rem;
		color: #555;
		padding: 2rem;
	}
	.error-state p {
		color: #c0392b;
		background-color: #fceded;
		padding: 0.75rem 1.25rem;
		border-radius: 6px;
		border: 1px solid #f5c6cb;
	}
	.no-data-message {
		padding: 2rem;
		text-align: center;
		color: #777;
	}
</style>