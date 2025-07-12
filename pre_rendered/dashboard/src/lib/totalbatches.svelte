<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  let items = $state([]);
  let isLoadingItems = $state(true);
  let deleteError = $state('');
  let deleteSuccess = $state('');

  async function fetchItemSummary() {
    isLoadingItems = true;
    deleteError = '';
    deleteSuccess = '';
    try {
      const response = await axios.get(
        'http://localhost:3000/api/data/items/summary',
      );
      items = response.data;
    } catch (error) {
      console.error('Error fetching items:', error);
      deleteError = 'Failed to fetch item list.';
      items = [];
    } finally {
      isLoadingItems = false;
    }
  }

  async function deleteItem(itemcode) {
    deleteError = '';
    deleteSuccess = '';
    try {
      await axios.delete(`http://localhost:3000/api/data/item/${itemcode}`);
      deleteSuccess = `Item ${itemcode} deleted.`;
      fetchItemSummary();
    } catch (err) {
      deleteError = `Cannot delete ${itemcode} — item is still in use.`;
    }
  }

  onMount(() => {
    fetchItemSummary();
  });
</script>

<div class="container">
  <div class="header">
    <p class="title-text">Item List</p>
  </div>

  {#if isLoadingItems}
    <div class="loading-state"><p>Loading items...</p></div>
  {:else if deleteError}
    <div class="error-state"><p>{deleteError}</p></div>
  {:else}
    {#if deleteSuccess}
      <div class="success-state"><p>{deleteSuccess}</p></div>
    {/if}
    <div class="item-list-container">
      <table class="item-table">
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Min Stock Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each items as item}
            <tr>
              <td>{item.itemcode}</td>
              <td>{item.itemname}</td>
              <td>{item.min_stock_level}</td>
              <td>
                <button
                  class="delete-button"
                  disabled={item.used_in_inwards ||
                    item.used_in_inventory ||
                    item.used_in_outwards}
                  on:click={() => deleteItem(item.itemcode)}
                >
                  Delete
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<style>
  .container {
    padding: 1.5rem;
    font-family: system-ui, sans-serif;
  }

  .header {
    margin-bottom: 1rem;
  }

  .title-text {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .loading-state,
  .error-state,
  .success-state {
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
  }

  .error-state p {
    color: #a00;
    background-color: #fee;
    padding: 0.75rem;
    border: 1px solid #f88;
    border-radius: 5px;
  }

  .success-state p {
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    padding: 0.75rem;
    border-radius: 5px;
  }

  .item-list-container {
    overflow-x: auto;
  }

  .item-table {
    width: 100%;
    border-collapse: collapse;
  }

  .item-table th,
  .item-table td {
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
  }

  .item-table th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  .delete-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    color: white;
    background-color: #dc3545;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .delete-button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
</style>
