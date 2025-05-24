<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	let batches = $state([]);
	let selectedBatchDetails = $state(null);
	let isLoadingList = $state(true);
	let isLoadingDetails = $state(false);
	let listError = $state('');
	let detailError = $state('');

	async function fetchBatchSummary() {
		isLoadingList = true;
		listError = '';
		try {
			const response = await axios.get('http://localhost:3000/api/data/batches/summary');
			batches = response.data;
		} catch (error) {
			console.error('Error fetching batch summary:', error);
			listError = 'Failed to load batch list.';
			batches = [];
		} finally {
			isLoadingList = false;
		}
	}

	async function fetchBatchDetails(batchcode) {
		if (!batchcode) return;
		selectedBatchDetails = null; 
		isLoadingDetails = true;
		detailError = '';
		try {
			const response = await axios.get(`http://localhost:3000/api/data/batch/details/${batchcode}`);
			selectedBatchDetails = response.data;
		} catch (error) {
			console.error(`Error fetching details for batch ${batchcode}:`, error);
			detailError = `Failed to load details for batch ${batchcode}.`;
		} finally {
			isLoadingDetails = false;
		}
	}

	function openModal(batchcode) {
		fetchBatchDetails(batchcode);
	}

	function closeModal() {
		selectedBatchDetails = null;
		detailError = '';
	}

	function formatDate(dateString) {
		if (!dateString) return 'N/A';
		try {
			return new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
		} catch (e) {
			return dateString; 
		}
	}

    function handleRowKeyDown(event, batchcode) {
        if (event.key === 'Enter' || event.key === ' ') {
            openModal(batchcode);
        }
    }

    function handleModalBackdropKeyDown(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }


	onMount(() => {
		fetchBatchSummary();
	});

</script>

<div class="container">
	<div class="header">
		<p class="title-text">Batch Overview</p>
	</div>

	{#if isLoadingList}
		<div class="loading-state"><p>Loading batch list...</p></div>
	{:else if listError}
		<div class="error-state"><p>{listError}</p></div>
	{:else if batches.length === 0}
		<p class="no-data-message">No batches found.</p>
	{:else}
		<div class="batch-list-container">
			<table class="batch-table">
				<thead>
					<tr>
						<th>Batch Code</th>
						<th>Item Name</th>
						<th>Received Qty</th>
						<th>Current Stock</th>
						<th>Expiry Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each batches as batch (batch.batchcode)}
						<tr 
                            onclick={() => openModal(batch.batchcode)} 
                            onkeydown={(e) => handleRowKeyDown(e, batch.batchcode)}
                            role="button"
                            tabindex="0"
                            class="batch-row"
                        >
							<td>{batch.batchcode}</td>
							<td>{batch.itemname || 'N/A'}</td>
							<td>{batch.receivedqty}</td>
							<td>{batch.current_stock === null || batch.current_stock === undefined ? 'N/A (Not in Inv.)' : batch.current_stock}</td>
							<td>{formatDate(batch.expiry)}</td>
							<td>
								<button 
                                    type="button"
                                    class="details-button" 
                                    onclick={(event) => { event.stopPropagation(); openModal(batch.batchcode); }}
                                >
									View Details
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>


{#if selectedBatchDetails || isLoadingDetails}
<div 
    class="modal-backdrop" 
    onclick={closeModal}
    onkeydown={handleModalBackdropKeyDown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title-id" 
    tabindex="-1"
>
	<div 
        class="modal-content" 
        onclick={(event) => event.stopPropagation()}
        role="document" 
    >
		<button type="button" class="modal-close-button" onclick={closeModal} aria-label="Close modal">×</button>
		{#if isLoadingDetails}
			<div class="loading-state"><p>Loading batch details...</p></div>
		{:else if detailError}
			<div class="error-state"><p>{detailError}</p></div>
		{:else if selectedBatchDetails}
			<h3 class="modal-title" id="modal-title-id">Batch Details: {selectedBatchDetails.batchcode}</h3>
			<div class="details-grid">
				<div class="detail-item"><span class="detail-label">Item Name:</span> {selectedBatchDetails.itemname}</div>
				<div class="detail-item"><span class="detail-label">Item Code:</span> {selectedBatchDetails.itemcode}</div>
				
				<div class="detail-item"><span class="detail-label">Supplier:</span> {selectedBatchDetails.suppname} ({selectedBatchDetails.suppcode})</div>
				<div class="detail-item"><span class="detail-label">Supplier Contact:</span> {selectedBatchDetails.suppcontact}</div>

				<div class="detail-item"><span class="detail-label">Date Purchased:</span> {formatDate(selectedBatchDetails.datepurchase)}</div>
				<div class="detail-item"><span class="detail-label">Expiry Date:</span> {formatDate(selectedBatchDetails.expiry)}</div>

				<div class="detail-item"><span class="detail-label">Requested Qty:</span> {selectedBatchDetails.requestedqty}</div>
				<div class="detail-item"><span class="detail-label">Received Qty:</span> {selectedBatchDetails.receivedqty}</div>

				<div class="detail-item"><span class="detail-label">Current Stock (Inventory):</span> {selectedBatchDetails.current_stock_in_inventory === null || selectedBatchDetails.current_stock_in_inventory === undefined ? 'N/A' : selectedBatchDetails.current_stock_in_inventory}</div>
				<div class="detail-item"><span class="detail-label">Total Sold from Batch:</span> {selectedBatchDetails.total_sold_from_batch || 0}</div>
				
				{#if selectedBatchDetails.itemused || selectedBatchDetails.itemdesc1 || selectedBatchDetails.itemdesc2 || selectedBatchDetails.itemdesc3}
					<h4 class="sub-header">Inventory Descriptions</h4>
					{#if selectedBatchDetails.itemused}
						<div class="detail-item full-width"><span class="detail-label">Item Used For:</span> {selectedBatchDetails.itemused}</div>
					{/if}
					{#if selectedBatchDetails.itemdesc1}
						<div class="detail-item full-width"><span class="detail-label">Description 1:</span> {selectedBatchDetails.itemdesc1}</div>
					{/if}
					{#if selectedBatchDetails.itemdesc2}
						<div class="detail-item full-width"><span class="detail-label">Description 2:</span> {selectedBatchDetails.itemdesc2}</div>
					{/if}
					{#if selectedBatchDetails.itemdesc3}
						<div class="detail-item full-width"><span class="detail-label">Description 3:</span> {selectedBatchDetails.itemdesc3}</div>
					{/if}
				{/if}
			</div>
		{/if}
	</div>
</div>
{/if}

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
		position: relative; 
	}

	.header {
		text-align: left;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #e0e0e0;
	}

	.title-text {
		font-size: 1.6rem;
		font-weight: 600;
        margin: 0;
		color: #333;
	}

	.batch-list-container {
		overflow-x: auto;
        flex-grow: 1;
	}

	.batch-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.batch-table th, .batch-table td {
		border: 1px solid #ddd;
		padding: 8px 12px;
		text-align: left;
	}

	.batch-table th {
		background-color: #f2f2f2;
		font-weight: 600;
		position: sticky;
		top: 0;
		z-index: 1;
	}
	.batch-table tr.batch-row {
        cursor: pointer;
    }
	.batch-table tr.batch-row:hover,
    .batch-table tr.batch-row:focus {
		background-color: #f9f9f9;
		outline: 2px solid #007bff; 
        outline-offset: -1px;
	}
	.details-button {
		padding: 6px 10px;
		font-size: 0.85rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	.details-button:hover {
		background-color: #0056b3;
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

	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: white;
		padding: 25px 30px;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.3);
		width: 90%;
		max-width: 700px;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
	}

	.modal-close-button {
		position: absolute;
		top: 10px;
		right: 15px;
		background: none;
		border: none;
		font-size: 2rem;
		line-height: 1;
		color: #888;
		cursor: pointer;
	}
	.modal-close-button:hover {
		color: #333;
	}

	.modal-title {
		margin-top: 0;
		margin-bottom: 20px;
		font-size: 1.5rem;
		color: #333;
		border-bottom: 1px solid #eee;
		padding-bottom: 10px;
	}

	.details-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 15px;
	}

	.detail-item {
		background-color: #f9f9f9;
		padding: 10px;
		border-radius: 5px;
		font-size: 0.95rem;
	}
	.detail-item.full-width {
        grid-column: 1 / -1; 
    }

	.detail-label {
		font-weight: 600;
		color: #555;
		margin-right: 8px;
	}
	.sub-header {
		grid-column: 1 / -1; 
		font-size: 1.2rem;
		color: #444;
		margin-top: 20px;
		margin-bottom: 10px;
		border-bottom: 1px solid #eee;
		padding-bottom: 5px;
	}
</style>