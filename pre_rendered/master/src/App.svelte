<script>
  import { onMount } from 'svelte';
  import { writable, derived } from 'svelte/store';
  import axios from 'axios';
  import Navbar from './lib/navbar.svelte';
  import * as XLSX from 'xlsx';

  const rawInventoryItems = writable([]);
  const isLoading = writable(true);
  const errorMessage = writable('');
  const searchTerm = writable('');
  const sortItemGroupColumn = writable(null);
  const sortItemGroupDirection = writable('asc');
  const expandedItemCodes = writable(new Set());
  const showModal = writable(false);
  const modalContent = writable({ field: '', text: '' });

  const showAddItemForm = writable(false);
  const newItemCode = writable('');
  const newItemName = writable('');
  const newItemMinStock = writable('');
  const newItemUnit = writable('');
  const addItemMessage = writable('');

  const itemGroupColumns = [
    { key: 'itemcode', label: 'Item Code', sortable: true },
    { key: 'itemname', label: 'Item Name', sortable: true },
    {
      key: 'total_stock_for_item',
      label: 'Total Stock',
      sortable: true,
      type: 'float',
    },
    {
      key: 'unit_name',
      label: 'Unit',
      sortable: true,
    },
    {
      key: 'min_stock_level',
      label: 'Min. Item Stock',
      sortable: true,
      type: 'float',
    },
    {
      key: 'average_purchase_price',
      label: 'Avg. Purchase Price',
      sortable: true,
      type: 'currency',
    },
    {
      key: 'average_estimated_profit_percentage',
      label: 'Avg. Est. Profit (%)',
      sortable: true,
      type: 'percentage',
    },
    {
      key: 'average_estimated_selling_price',
      label: 'Avg. Est. Sell Price',
      sortable: true,
      type: 'currency',
    },
  ];

  const batchDetailColumns = [
    { key: 'batchcode', label: 'Batch Code' },
    { key: 'current_stock_in_batch', label: 'Stock in Batch', type: 'float' },
    {
      key: 'purchase_price_per_unit',
      label: 'Purchase Price',
      type: 'currency',
    },
    {
      key: 'estimate_percentage',
      label: 'Est. Profit (%)',
      type: 'percentage',
    },
    {
      key: 'estimated_selling_price_per_unit',
      label: 'Est. Sell Price',
      type: 'currency',
    },
    { key: 'datepurchase', label: 'Purchase Date', type: 'date' },
    { key: 'expiry', label: 'Expiry Date', type: 'date' },
    { key: 'suppname', label: 'Supplier' },
    { key: 'itemused', label: 'Used For' },
    { key: 'itemdesc1', label: 'Desc 1' },
    { key: 'itemdesc2', label: 'Desc 2' },
    { key: 'itemdesc3', label: 'Desc 3' },
  ];

  async function fetchInventory() {
    isLoading.set(true);
    errorMessage.set('');
    try {
      const res = await axios.get(
        'http://localhost:3000/api/master/all-inventory',
      );
      if (res.data && Array.isArray(res.data)) rawInventoryItems.set(res.data);
      else {
        rawInventoryItems.set([]);
        errorMessage.set('Received invalid data format from server.');
      }
    } catch (err) {
      rawInventoryItems.set([]);
      errorMessage.set(
        `Failed to fetch inventory: ${err.message || err.response?.data?.error || 'Unknown error'}`,
      );
    } finally {
      isLoading.set(false);
    }
  }

  function formatDateForDisplay(dateString) {
    if (!dateString) return 'N/A';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  function formatCurrency(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    return Number(value).toLocaleString(undefined, {
      style: 'currency',
      currency: 'INR',
    });
  }

  function formatPercentage(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    return `${Number(value).toFixed(2)}%`;
  }

  function formatFloat(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    // Always display with 3 decimal places as requested, even if it's an integer
    return Number(value).toFixed(3);
  }

  function toggleExpand(code) {
    expandedItemCodes.update((set) => {
      const s = new Set(set);
      s.has(code) ? s.delete(code) : s.add(code);
      return s;
    });
  }

  function handleItemGroupSort(key) {
    sortItemGroupColumn.update((current) => {
      if (current === key) {
        sortItemGroupDirection.update((d) => (d === 'asc' ? 'desc' : 'asc'));
        return current;
      }
      sortItemGroupDirection.set('asc');
      return key;
    });
  }

  const processedInventory = derived(
    [
      rawInventoryItems,
      searchTerm,
      sortItemGroupColumn,
      sortItemGroupDirection,
    ],
    ([$raw, $search, $sortCol, $sortDir]) => {
      let list = [...$raw];
      if ($search.trim()) {
        const term = $search.toLowerCase();
        list = list.filter((item) =>
          Object.values(item).some((v) =>
            String(v).toLowerCase().includes(term),
          ),
        );
      }
      const grouped = list.reduce((acc, b) => {
        if (!b.itemcode) return acc;
        if (!acc[b.itemcode]) {
          acc[b.itemcode] = {
            itemcode: b.itemcode,
            itemname: b.itemname,
            min_stock_level: b.min_stock_level,
            unit_name: b.unit_name,
            total_stock_for_item: 0,
            total_value_of_stock: 0,
            total_weighted_profit_percentage: 0,
            total_weighted_estimated_selling_price: 0,
            batches: [],
          };
        }
        const stock = Number(b.current_stock_in_batch);
        const purchasePrice = Number(b.purchase_price_per_unit);
        const profitPercentage = Number(b.estimate_percentage);

        let estimatedSellingPrice = 0;
        if (!isNaN(purchasePrice) && !isNaN(profitPercentage)) {
          estimatedSellingPrice = purchasePrice * (1 + profitPercentage / 100);
        }
        b.estimated_selling_price_per_unit = estimatedSellingPrice;

        acc[b.itemcode].total_stock_for_item += isNaN(stock) ? 0 : stock;
        if (!isNaN(stock) && !isNaN(purchasePrice)) {
          acc[b.itemcode].total_value_of_stock += stock * purchasePrice;
        }
        if (!isNaN(stock) && stock > 0 && !isNaN(profitPercentage)) {
          acc[b.itemcode].total_weighted_profit_percentage +=
            stock * profitPercentage;
        }
        if (!isNaN(stock) && stock > 0 && !isNaN(estimatedSellingPrice)) {
          acc[b.itemcode].total_weighted_estimated_selling_price +=
            stock * estimatedSellingPrice;
        }

        acc[b.itemcode].batches.push(b);
        return acc;
      }, {});

      Object.values(grouped).forEach((g) => {
        if (g.total_stock_for_item > 0) {
          g.average_purchase_price =
            g.total_value_of_stock / g.total_stock_for_item;
          g.average_estimated_profit_percentage =
            g.total_weighted_profit_percentage / g.total_stock_for_item;
          g.average_estimated_selling_price =
            g.total_weighted_estimated_selling_price / g.total_stock_for_item;
        } else {
          g.average_purchase_price = 0;
          g.average_estimated_profit_percentage = 0;
          g.average_estimated_selling_price = 0;
        }

        g.batches.sort((a, b) => {
          const ta = new Date(a.expiry).getTime();
          const tb = new Date(b.expiry).getTime();
          if (isNaN(ta) && isNaN(tb)) return 0;
          if (isNaN(ta)) return 1;
          if (isNaN(tb)) return -1;
          return ta - tb;
        });
      });

      let arr = Object.values(grouped);
      if ($sortCol) {
        const def = itemGroupColumns.find((c) => c.key === $sortCol);
        if (def) {
          arr.sort((a, b) => {
            let va = a[$sortCol],
              vb = b[$sortCol];

            if (va == null) {
              va =
                $sortDir === 'asc'
                  ? def.type === 'float' ||
                    def.type === 'currency' ||
                    def.type === 'percentage'
                    ? Infinity
                    : ''
                  : def.type === 'float' ||
                      def.type === 'currency' ||
                      def.type === 'percentage'
                    ? -Infinity
                    : 'zzzzzzzzzzzz';
            }
            if (vb == null) {
              vb =
                $sortDir === 'asc'
                  ? def.type === 'float' ||
                    def.type === 'currency' ||
                    def.type === 'percentage'
                    ? Infinity
                    : ''
                  : def.type === 'float' ||
                      def.type === 'currency' ||
                      def.type === 'percentage'
                    ? -Infinity
                    : 'zzzzzzzzzzzz';
            }

            if (
              def.type === 'float' ||
              def.type === 'currency' ||
              def.type === 'percentage'
            ) {
              va = Number(va) || 0;
              vb = Number(vb) || 0;
              return $sortDir === 'asc' ? va - vb : vb - va;
            }
            return $sortDir === 'asc'
              ? String(va).localeCompare(String(vb))
              : String(vb).localeCompare(String(va));
          });
        }
      }
      return arr;
    },
  );

  async function handleAddItem(event) {
    event.preventDefault();
    addItemMessage.set('');

    const itemData = {
      itemcode: $newItemCode,
      itemname: $newItemName,
      // Ensure min_stock_level is sent as a float/number
      min_stock_level: $newItemMinStock ? parseFloat($newItemMinStock) : 0.0,
      unit_name: $newItemUnit,
    };

    if (!itemData.itemcode || !itemData.itemname) {
      addItemMessage.set('Item Code and Item Name are required.');
      return;
    }

    // Min stock level and unit are now required as per the form
    if (isNaN(itemData.min_stock_level)) {
      addItemMessage.set('Min. Stock Level must be a number.');
      return;
    }
    if (!itemData.unit_name) {
      addItemMessage.set('Unit is required.');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/api/master/add-item',
        itemData,
      );
      addItemMessage.set(res.data.message);
      newItemCode.set('');
      newItemName.set('');
      newItemMinStock.set('');
      newItemUnit.set('');
      showAddItemForm.set(false);
      fetchInventory();
    } catch (error) {
      addItemMessage.set(error.response?.data?.error || 'Failed to add item.');
    }
  }

  function openModalWithContent(field, text) {
    modalContent.set({ field, text: text != null ? String(text) : 'N/A' });
    showModal.set(true);
  }

  function downloadAsExcel() {
    let data = [];
    processedInventory.subscribe((list) => {
      list.forEach((g) => {
        g.batches.forEach((b) => {
          data.push({
            'Item Code': g.itemcode,
            'Item Name': g.itemname,
            'Min. Stock Level (Item)': g.min_stock_level,
            Unit: g.unit_name,
            'Total Stock (Item)': g.total_stock_for_item,
            'Avg. Purchase Price (Item)': g.average_purchase_price,
            'Avg. Est. Profit (%) (Item)':
              g.average_estimated_profit_percentage,
            'Avg. Est. Sell Price (Item)': g.average_estimated_selling_price,
            'Batch Code': b.batchcode,
            'Stock in Batch': b.current_stock_in_batch,
            'Purchase Price': b.purchase_price_per_unit,
            'Est. Profit (%) (Batch)': b.estimate_percentage,
            'Est. Sell Price (Batch)': b.estimated_selling_price_per_unit,
            'Purchase Date': formatDateForDisplay(b.datepurchase),
            'Expiry Date': formatDateForDisplay(b.expiry),
            Supplier: b.suppname,
            'Used For': b.itemused,
            'Desc 1': b.itemdesc1,
            'Desc 2': b.itemdesc2,
            'Desc 3': b.itemdesc3,
          });
        });
        if (g.batches.length === 0) {
          data.push({
            'Item Code': g.itemcode,
            'Item Name': g.itemname,
            'Min. Stock Level (Item)': g.min_stock_level,
            Unit: g.unit_name,
            'Total Stock (Item)': g.total_stock_for_item,
            'Avg. Purchase Price (Item)': g.average_purchase_price,
            'Avg. Est. Profit (%) (Item)':
              g.average_estimated_profit_percentage,
            'Avg. Est. Sell Price (Item)': g.average_estimated_selling_price,
            'Batch Code': 'N/A',
            'Stock in Batch': 'N/A',
            'Purchase Price': 'N/A',
            'Est. Profit (%) (Batch)': 'N/A',
            'Est. Sell Price (Batch)': 'N/A',
            'Purchase Date': 'N/A',
            'Expiry Date': 'N/A',
            Supplier: 'N/A',
            'Used For': 'N/A',
            'Desc 1': 'N/A',
            'Desc 2': 'N/A',
            'Desc 3': 'N/A',
          });
        }
      });
    })();
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'InventoryData');
    XLSX.writeFile(wb, 'FullInventoryDetails.xlsx'); // Corrected typo here
  }

  onMount(fetchInventory);
</script>

<Navbar />

<div class="wrapper">
  <div class="card">
    <div class="header">
      <h2>Inventory Master List</h2>
      <div class="controls">
        <input
          bind:value={$searchTerm}
          placeholder="Search all fields..."
          class="search-input"
        />
        <button on:click={downloadAsExcel} class="btn excel-btn"
          >Export Excel</button
        >
        <button
          on:click={() => showAddItemForm.set(true)}
          class="btn add-item-btn">Add New Item</button
        >
      </div>
    </div>

    {#if $showAddItemForm}
      <div class="add-item-form-container">
        <h3>Add New Item</h3>
        <form on:submit={handleAddItem}>
          <div class="form-group">
            <label for="newItemCode">Item Code:</label>
            <input
              id="newItemCode"
              type="text"
              bind:value={$newItemCode}
              required
            />
          </div>
          <div class="form-group">
            <label for="newItemName">Item Name:</label>
            <input
              id="newItemName"
              type="text"
              bind:value={$newItemName}
              required
            />
          </div>
          <div class="form-group">
            <label for="newItemMinStock">Min. Stock Level:</label>
            <input
              id="newItemMinStock"
              type="number"
              step="0.001"
              bind:value={$newItemMinStock}
              required
            />
          </div>
          <div class="form-group">
            <label for="newItemUnit">Unit:</label>
            <input
              id="newItemUnit"
              type="text"
              bind:value={$newItemUnit}
              required
            />
          </div>
          <button type="submit" class="btn submit-btn">Add Item</button>
          <button
            type="button"
            class="btn cancel-btn"
            on:click={() => showAddItemForm.set(false)}>Cancel</button
          >
        </form>
        {#if $addItemMessage}
          <p
            class="status {$addItemMessage.includes('successfully')
              ? 'success'
              : 'error'}"
          >
            {$addItemMessage}
          </p>
        {/if}
      </div>
    {/if}

    {#if $isLoading && $rawInventoryItems.length === 0}
      <p class="status">Loading inventory data...</p>
    {:else if $errorMessage}
      <p class="status error">{$errorMessage}</p>
    {:else if $processedInventory.length === 0}
      <p class="status">No inventory items found matching your criteria.</p>
    {:else}
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              {#each itemGroupColumns as col}
                <th
                  on:click={() => col.sortable && handleItemGroupSort(col.key)}
                >
                  {col.label}
                  {#if col.sortable && $sortItemGroupColumn === col.key}
                    {$sortItemGroupDirection === 'asc' ? '▲' : '▼'}
                  {/if}
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each $processedInventory as g (g.itemcode)}
              <tr>
                <td>
                  <button
                    class="expand-btn"
                    on:click={() => toggleExpand(g.itemcode)}
                  >
                    {$expandedItemCodes.has(g.itemcode) ? '−' : '+'}
                  </button>
                </td>
                {#each itemGroupColumns as col}
                  <td>
                    <span
                      class="cell-content"
                      on:click={() =>
                        openModalWithContent(
                          col.label,
                          col.type === 'currency'
                            ? formatCurrency(g[col.key])
                            : col.type === 'percentage'
                              ? formatPercentage(g[col.key])
                              : col.type === 'float'
                                ? formatFloat(g[col.key])
                                : g[col.key],
                        )}
                    >
                      {col.type === 'float'
                        ? formatFloat(g[col.key])
                        : col.type === 'currency'
                          ? formatCurrency(g[col.key])
                          : col.type === 'percentage'
                            ? formatPercentage(g[col.key])
                            : (g[col.key] ?? 'N/A')}
                    </span>
                  </td>
                {/each}
              </tr>
              {#if $expandedItemCodes.has(g.itemcode)}
                <tr>
                  <td colspan={itemGroupColumns.length + 1}>
                    <div class="inner-scroll">
                      <table class="batch-table">
                        <thead>
                          <tr>
                            {#each batchDetailColumns as b_col}
                              <th>{b_col.label}</th>
                            {/each}
                          </tr>
                        </thead>
                        <tbody>
                          {#each g.batches as b (b.batchcode)}
                            <tr>
                              {#each batchDetailColumns as b_col}
                                <td>
                                  <span
                                    class="cell-content"
                                    on:click={() =>
                                      openModalWithContent(
                                        b_col.label,
                                        b_col.type === 'date'
                                          ? formatDateForDisplay(b[b_col.key])
                                          : b_col.type === 'currency'
                                            ? formatCurrency(b[b_col.key])
                                            : b_col.type === 'percentage'
                                              ? formatPercentage(b[b_col.key])
                                              : b_col.type === 'float'
                                                ? formatFloat(b[b_col.key])
                                                : b[b_col.key],
                                      )}
                                  >
                                    {b_col.type === 'date'
                                      ? formatDateForDisplay(b[b_col.key])
                                      : b_col.type === 'currency'
                                        ? formatCurrency(b[b_col.key])
                                        : b_col.type === 'float'
                                          ? formatFloat(b[b_col.key])
                                          : b_col.type === 'percentage'
                                            ? formatPercentage(b[b_col.key])
                                            : (b[b_col.key] ?? 'N/A')}
                                  </span>
                                </td>
                              {/each}
                            </tr>
                          {/each}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              {/if}
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>

{#if $showModal}
  <div class="modal-backdrop" on:click={() => showModal.set(false)}>
    <div class="modal" on:click|stopPropagation>
      <button class="close-btn" on:click={() => showModal.set(false)}>×</button>
      <h4>{$modalContent.field}</h4>
      <p>{$modalContent.text}</p>
    </div>
  </div>
{/if}

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding: 2rem;
    background: #f0f2f5;
    min-height: 80vh;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 1200px;
    padding: 2rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .controls {
    display: flex;
    gap: 1rem;
  }
  .search-input {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  .btn {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  .excel-btn {
    background: #007bff;
    color: #fff;
  }
  .excel-btn:hover {
    background: #0069d9;
  }
  .add-item-btn {
    background: #28a745;
    color: #fff;
  }
  .add-item-btn:hover {
    background: #218838;
  }
  .table-container {
    max-height: 400px;
    overflow: auto;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead th {
    position: sticky;
    top: 0;
    background: #e9ecef;
    z-index: 2;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #dee2e6;
    text-align: left;
    font-weight: 600;
    cursor: pointer;
  }
  th,
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #dee2e6;
  }
  tbody tr:nth-child(odd) {
    background: #fafbfc;
  }
  .expand-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .cell-content {
    display: block;
    cursor: pointer;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .inner-scroll {
    max-height: 200px;
    overflow: auto;
  }
  .batch-table {
    width: 100%;
    border-collapse: collapse;
  }
  .batch-table th,
  .batch-table td {
    padding: 0.5rem;
    border: 1px solid #dee2e6;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }
  .modal {
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 10001;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .status {
    text-align: center;
    padding: 2rem;
    font-size: 1.1rem;
    color: #555;
  }
  .status.error {
    color: #d9534f;
  }
  .status.success {
    color: #28a745;
  }

  .add-item-form-container {
    background: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  .add-item-form-container h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .form-group input {
    width: calc(100% - 20px);
    padding: 0.5rem 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  .submit-btn {
    background: #007bff;
    color: white;
    margin-right: 0.5rem;
  }
  .cancel-btn {
    background: #6c757d;
    color: white;
  }
  .submit-btn:hover {
    background: #0056b3;
  }
  .cancel-btn:hover {
    background: #5a6268;
  }
</style>
