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

  const itemGroupColumns = [
    { key: 'itemcode', label: 'Item Code', sortable: true },
    { key: 'itemname', label: 'Item Name', sortable: true },
    {
      key: 'total_stock_for_item',
      label: 'Total Stock',
      sortable: true,
      type: 'number',
    },
    {
      key: 'min_stock_level',
      label: 'Min. Item Stock',
      sortable: true,
      type: 'number',
    },
  ];

  const batchDetailColumns = [
    { key: 'batchcode', label: 'Batch Code' },
    { key: 'current_stock_in_batch', label: 'Stock in Batch', type: 'number' },
    {
      key: 'purchase_price_per_unit',
      label: 'Purchase Price',
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
            total_stock_for_item: 0,
            batches: [],
          };
        }
        const stock = Number(b.current_stock_in_batch);
        acc[b.itemcode].total_stock_for_item += isNaN(stock) ? 0 : stock;
        acc[b.itemcode].batches.push(b);
        return acc;
      }, {});
      Object.values(grouped).forEach((g) => {
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
            if (va == null) va = $sortDir === 'asc' ? Infinity : -Infinity;
            if (vb == null) vb = $sortDir === 'asc' ? Infinity : -Infinity;
            if (def.type === 'number') {
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
            'Total Stock (Item)': g.total_stock_for_item,
            'Batch Code': b.batchcode,
            'Stock in Batch': b.current_stock_in_batch,
            'Purchase Price': formatCurrency(b.purchase_price_per_unit),
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
            'Total Stock (Item)': g.total_stock_for_item,
          });
        }
      });
    })();
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'InventoryData');
    XLSX.writeFile(wb, 'FullInventoryDetails.xlsx');
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
      </div>
    </div>

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
                        openModalWithContent(col.label, g[col.key])}
                    >
                      {col.type === 'number'
                        ? g[col.key]?.toLocaleString()
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
                            {#each batchDetailColumns as b}
                              <th>{b.label}</th>
                            {/each}
                          </tr>
                        </thead>
                        <tbody>
                          {#each g.batches as b (b.batchcode)}
                            <tr>
                              {#each batchDetailColumns as col}
                                <td>
                                  <span
                                    class="cell-content"
                                    on:click={() =>
                                      openModalWithContent(
                                        col.label,
                                        b[col.key],
                                      )}
                                  >
                                    {col.type === 'date'
                                      ? formatDateForDisplay(b[col.key])
                                      : col.type === 'currency'
                                        ? formatCurrency(b[col.key])
                                        : col.type === 'number'
                                          ? b[col.key]?.toLocaleString()
                                          : (b[col.key] ?? 'N/A')}
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
</style>
