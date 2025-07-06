<script>
  import { onMount } from 'svelte';
  import { writable, derived } from 'svelte/store';
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  import Navbar from './lib/navbar.svelte';
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';

  const rawInwards = writable([]);
  const isLoading = writable(true);
  const errorMessage = writable('');
  const searchTerm = writable('');

  const itemOptions = writable([]);
  const supplierOptions = writable([]);

  const showAddForm = writable(false);

  let addBatchCode = '';
  let addItemCode = '';
  let addSuppCode = '';
  let addRequestedQty = 0.0;
  let addReceivedQty = 0.0;
  let addPurchasePrice = 0.0;
  let addEstimatePercentage = 0.0;
  let addDatePurchase = '';
  let addExpiryDays = 0.0;
  let addItemUsed = '';
  let addDesc1 = '';
  let addDesc2 = '';
  let addDesc3 = '';

  const editingBatchCode = writable(null);
  let editedItemCode = '';
  let editedSuppCode = '';
  let editedRequestedQty = 0.0;
  let editedReceivedQty = 0.0;
  let editedPurchasePrice = 0.0;
  let editedEstimatePercentage = 0.0;
  let editedDatePurchase = '';
  let editedExpiryDays = 0.0;
  let editedItemUsed = '';
  let editedDesc1 = '';
  let editedDesc2 = '';
  let editedDesc3 = '';

  const INWARDS_API_URL = 'http://localhost:3000/api/inwards';

  async function fetchInwards() {
    isLoading.set(true);
    errorMessage.set('');
    try {
      const res = await axios.get(INWARDS_API_URL);
      const dataWithExpiryDays = (Array.isArray(res.data) ? res.data : []).map(
        (record) => ({
          ...record,
          expiryDays: calculateExpiryDays(record.datepurchase, record.expiry),
        }),
      );
      rawInwards.set(dataWithExpiryDays);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to fetch inwards records.';
      errorMessage.set(msg);
      rawInwards.set([]);
    } finally {
      isLoading.set(false);
    }
  }

  async function fetchItemOptions() {
    try {
      const res = await axios.get(`${INWARDS_API_URL}/item-list`);
      itemOptions.set(res.data);
    } catch (err) {
      errorMessage.set('Failed to fetch item list.');
      itemOptions.set([]);
    }
  }

  async function fetchSupplierOptions() {
    try {
      const res = await axios.get(`${INWARDS_API_URL}/supplier-list`);
      supplierOptions.set(res.data);
    } catch (err) {
      errorMessage.set('Failed to fetch supplier list.');
      supplierOptions.set([]);
    }
  }

  onMount(async () => {
    await fetchInwards();
    await fetchItemOptions();
    await fetchSupplierOptions();

    const addFlatpickr = flatpickr('#addDatePurchase', {
      dateFormat: 'd/m/Y',
      altInput: true,
      altFormat: 'd/m/Y',
      onClose: function (selectedDates, dateStr, instance) {
        if (selectedDates.length > 0) {
          const date = selectedDates[0];
          addDatePurchase = date.toISOString().split('T')[0];
        } else {
          addDatePurchase = '';
        }
      },
    });

    let editFlatpickrInstance;
    function initEditFlatpickr(element) {
      if (element && !editFlatpickrInstance) {
        editFlatpickrInstance = flatpickr(element, {
          dateFormat: 'd/m/Y',
          altInput: true,
          altFormat: 'd/m/Y',
          onReady: function (selectedDates, dateStr, instance) {
            if (editedDatePurchase) {
              instance.setDate(editedDatePurchase, true);
            }
          },
          onClose: function (selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
              const date = selectedDates[0];
              editedDatePurchase = date.toISOString().split('T')[0];
            } else {
              editedDatePurchase = '';
            }
          },
        });
      } else if (element && editFlatpickrInstance) {
        editFlatpickrInstance.destroy();
        editFlatpickrInstance = flatpickr(element, {
          dateFormat: 'd/m/Y',
          altInput: true,
          altFormat: 'd/m/Y',
          onReady: function (selectedDates, dateStr, instance) {
            if (editedDatePurchase) {
              instance.setDate(editedDatePurchase, true);
            }
          },
          onClose: function (selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
              const date = selectedDates[0];
              editedDatePurchase = date.toISOString().split('T')[0];
            } else {
              editedDatePurchase = '';
            }
          },
        });
      }
      // Ensure the date is set when the element becomes visible in the DOM during edit mode
      if (editedDatePurchase && editFlatpickrInstance) {
        editFlatpickrInstance.setDate(editedDatePurchase, true);
      }
    }

    editingBatchCode.subscribe((batchCode) => {
      if (batchCode === null && editFlatpickrInstance) {
        editFlatpickrInstance.clear();
      }
    });
  });

  function calculateExpiryDays(purchaseDateStr, expiryDateStr) {
    if (!purchaseDateStr || !expiryDateStr) return null;
    const pDate = new Date(purchaseDateStr);
    const eDate = new Date(expiryDateStr);
    if (isNaN(pDate.getTime()) || isNaN(eDate.getTime())) return null;

    const diffTime = eDate.getTime() - pDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function formatDateForTableDisplay(dateString) {
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

  function formatFloat(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    return Number(value).toFixed(3);
  }

  function formatPercentage(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    return `${Number(value).toFixed(2)}%`;
  }

  const filteredInwards = derived([rawInwards, searchTerm], ([$raw, $term]) => {
    if (!$term.trim()) return $raw;
    const term = $term.toLowerCase();
    return $raw.filter((r) =>
      Object.values(r).some(
        (v) => v != null && String(v).toLowerCase().includes(term),
      ),
    );
  });

  async function addInwards() {
    errorMessage.set('');

    const newRecord = {
      batchcode: addBatchCode.trim(),
      itemcode: addItemCode.trim(),
      suppcode: addSuppCode.trim(),
      requestedqty: Number(addRequestedQty),
      receivedqty: Number(addReceivedQty),
      purchase_price_per_unit: Number(addPurchasePrice),
      estimate_percentage: Number(addEstimatePercentage),
      datepurchase: addDatePurchase.trim(),
      expiryDays: Number(addExpiryDays),
      itemused: addItemUsed.trim() || null,
      itemdesc1: addDesc1.trim() || null,
      itemdesc2: addDesc2.trim() || null,
      itemdesc3: addDesc3.trim() || null,
    };

    if (
      !newRecord.batchcode ||
      !newRecord.itemcode ||
      !newRecord.suppcode ||
      isNaN(newRecord.requestedqty) ||
      newRecord.requestedqty < 0 ||
      isNaN(newRecord.receivedqty) ||
      newRecord.receivedqty < 0 ||
      isNaN(newRecord.purchase_price_per_unit) ||
      newRecord.purchase_price_per_unit < 0 ||
      isNaN(newRecord.estimate_percentage) ||
      newRecord.estimate_percentage < 0 ||
      !newRecord.datepurchase ||
      isNaN(newRecord.expiryDays) ||
      newRecord.expiryDays < 0
    ) {
      errorMessage.set(
        'Please fill all required fields correctly (quantities, expiry days, price, percentage non-negative, and dates valid).',
      );
      return;
    }
    if (newRecord.receivedqty > newRecord.requestedqty) {
      errorMessage.set('Received quantity cannot exceed requested quantity.');
      return;
    }

    try {
      await axios.post(INWARDS_API_URL, newRecord);
      addBatchCode = '';
      addItemCode = '';
      addSuppCode = '';
      addRequestedQty = 0.0;
      addReceivedQty = 0.0;
      addPurchasePrice = 0.0;
      addEstimatePercentage = 0.0;
      addDatePurchase = '';
      addExpiryDays = 0.0;
      addItemUsed = '';
      addDesc1 = '';
      addDesc2 = '';
      addDesc3 = '';
      await fetchInwards();
      showAddForm.set(false);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.statusText ||
        err.message ||
        'Failed to add inwards record.';
      errorMessage.set(`Error adding inwards record: ${msg}`);
    }
  }

  function startEdit(record) {
    errorMessage.set('');
    editingBatchCode.set(record.batchcode);
    editedItemCode = record.itemcode;
    editedSuppCode = record.suppcode;
    editedRequestedQty = record.requestedqty;
    editedReceivedQty = record.receivedqty;
    editedPurchasePrice = record.purchase_price_per_unit;
    editedEstimatePercentage = record.estimate_percentage;
    editedDatePurchase = record.datepurchase;
    editedExpiryDays = record.expiryDays;
    editedItemUsed = record.itemused || '';
    editedDesc1 = record.itemdesc1 || '';
    editedDesc2 = record.itemdesc2 || '';
    editedDesc3 = record.itemdesc3 || '';
  }

  function cancelEdit() {
    errorMessage.set('');
    editingBatchCode.set(null);
    editedItemCode = '';
    editedSuppCode = '';
    editedRequestedQty = 0.0;
    editedReceivedQty = 0.0;
    editedPurchasePrice = 0.0;
    editedEstimatePercentage = 0.0;
    editedDatePurchase = '';
    editedExpiryDays = 0.0;
    editedItemUsed = '';
    editedDesc1 = '';
    editedDesc2 = '';
    editedDesc3 = '';
  }

  async function saveEdit(batchcode) {
    errorMessage.set('');

    const updatedFields = {
      itemcode: editedItemCode.trim(),
      suppcode: editedSuppCode.trim(),
      requestedqty: Number(editedRequestedQty),
      receivedqty: Number(editedReceivedQty),
      purchase_price_per_unit: Number(editedPurchasePrice),
      estimate_percentage: Number(editedEstimatePercentage),
      datepurchase: editedDatePurchase.trim(),
      expiryDays: Number(editedExpiryDays),
      itemused: editedItemUsed.trim() || null,
      itemdesc1: editedDesc1.trim() || null,
      itemdesc2: editedDesc2.trim() || null,
      itemdesc3: editedDesc3.trim() || null,
    };

    if (
      !updatedFields.itemcode ||
      !updatedFields.suppcode ||
      isNaN(updatedFields.requestedqty) ||
      updatedFields.requestedqty < 0 ||
      isNaN(updatedFields.receivedqty) ||
      updatedFields.receivedqty < 0 ||
      isNaN(updatedFields.purchase_price_per_unit) ||
      updatedFields.purchase_price_per_unit < 0 ||
      isNaN(updatedFields.estimate_percentage) ||
      updatedFields.estimate_percentage < 0 ||
      !updatedFields.datepurchase ||
      isNaN(updatedFields.expiryDays) ||
      updatedFields.expiryDays < 0
    ) {
      errorMessage.set(
        'Edited fields must be valid (quantities, expiry days, price, percentage non-negative, and dates valid).',
      );
      return;
    }
    if (updatedFields.receivedqty > updatedFields.requestedqty) {
      errorMessage.set(
        'Edited received quantity cannot exceed requested quantity.',
      );
      return;
    }

    try {
      await axios.put(`${INWARDS_API_URL}/${batchcode}`, updatedFields);
      await fetchInwards();
      cancelEdit();
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to update inwards record.';
      errorMessage.set(`Error updating inwards record: ${msg}`);
    }
  }

  function exportExcel() {
    const recordsToExport = rawInwards;
    if (!recordsToExport || recordsToExport.length === 0) {
      alert('No inwards data to export.');
      return;
    }

    const data = recordsToExport.map((r) => ({
      'Batch Code': r.batchcode,
      'Item Code': r.itemcode,
      'Supplier Code': r.suppcode,
      'Requested Qty': formatFloat(r.requestedqty),
      'Received Qty': formatFloat(r.receivedqty),
      'Purchase Price Per Unit': formatFloat(r.purchase_price_per_unit),
      'Estimated Profit (%)': formatFloat(r.estimate_percentage),
      'Purchase Date': formatDateForTableDisplay(r.datepurchase),
      'Expiry Date': formatDateForTableDisplay(r.expiry),
      'Expiry Days': formatFloat(r.expiryDays),
      'Item Used For': r.itemused,
      'Description 1': r.itemdesc1,
      'Description 2': r.itemdesc2,
      'Description 3': r.itemdesc3,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'InwardsRecords');
    XLSX.writeFile(wb, 'InwardsRecords.xlsx');
  }
</script>

<Navbar />

<div class="wrapper">
  <div class="card">
    <div class="header">
      <h2>Manage Inwards Records</h2>
      <div class="controls">
        <input
          bind:value={$searchTerm}
          placeholder="Search all fields..."
          class="search-input"
        />
        <button on:click={exportExcel} class="btn excel-btn"
          >Export Excel</button
        >
        <button
          on:click={() => showAddForm.update((val) => !val)}
          class="btn add-new-toggle-btn"
        >
          {$showAddForm ? 'Hide Add Form' : 'Add New Record'}
        </button>
      </div>
    </div>

    {#if $showAddForm}
      <div class="add-form">
        <h3>Add New Inwards Record</h3>
        <form on:submit|preventDefault={addInwards}>
          <div class="form-group">
            <label for="addBatchCode">Batch Code:</label>
            <input
              id="addBatchCode"
              bind:value={addBatchCode}
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label for="addItemCode">Item Code:</label>
            <select id="addItemCode" bind:value={addItemCode} required>
              <option value="" disabled>Select an Item</option>
              {#each $itemOptions as item}
                <option value={item.itemcode}
                  >{item.itemname} ({item.itemcode})</option
                >
              {/each}
            </select>
          </div>
          <div class="form-group">
            <label for="addSuppCode">Supplier Code:</label>
            <select id="addSuppCode" bind:value={addSuppCode} required>
              <option value="" disabled>Select a Supplier</option>
              {#each $supplierOptions as supplier}
                <option value={supplier.suppcode}
                  >{supplier.suppname} ({supplier.suppcode})</option
                >
              {/each}
            </select>
          </div>
          <div class="form-group">
            <label for="addRequestedQty">Requested Quantity:</label>
            <input
              id="addRequestedQty"
              type="number"
              bind:value={addRequestedQty}
              min="0"
              step="0.001"
              required
            />
          </div>
          <div class="form-group">
            <label for="addReceivedQty">Received Quantity:</label>
            <input
              id="addReceivedQty"
              type="number"
              bind:value={addReceivedQty}
              min="0"
              step="0.001"
              required
            />
          </div>
          <div class="form-group">
            <label for="addPurchasePrice">Purchase Price/Unit:</label>
            <input
              id="addPurchasePrice"
              type="number"
              bind:value={addPurchasePrice}
              step="0.001"
              min="0"
              required
            />
          </div>
          <div class="form-group">
            <label for="addEstimatePercentage">Estimated Profit (%):</label>
            <input
              id="addEstimatePercentage"
              type="number"
              bind:value={addEstimatePercentage}
              step="0.01"
              min="0"
              required
            />
          </div>
          <div class="form-group">
            <label for="addDatePurchase">Purchase Date (DD/MM/YYYY):</label>
            <input
              id="addDatePurchase"
              type="text"
              bind:value={addDatePurchase}
              required
            />
          </div>
          <div class="form-group">
            <label for="addExpiryDays">Expiry Days (from purchase):</label>
            <input
              id="addExpiryDays"
              type="number"
              bind:value={addExpiryDays}
              min="0"
              step="0.001"
              required
            />
          </div>
          <div class="form-group">
            <label for="addItemUsed">Item Used For:</label>
            <input id="addItemUsed" bind:value={addItemUsed} type="text" />
          </div>
          <div class="form-group">
            <label for="addDesc1">Description 1:</label>
            <input id="addDesc1" bind:value={addDesc1} type="text" />
          </div>
          <div class="form-group">
            <label for="addDesc2">Description 2:</label>
            <input id="addDesc2" bind:value={addDesc2} type="text" />
          </div>
          <div class="form-group">
            <label for="addDesc3">Description 3:</label>
            <input id="addDesc3" bind:value={addDesc3} type="text" />
          </div>
          <div class="form-action">
            <button type="submit" class="btn add-btn">Add Record</button>
          </div>
        </form>
      </div>
    {/if}

    {#if $isLoading && $rawInwards.length === 0}
      <p class="status">Loading inwards records...</p>
    {:else if $errorMessage}
      <p class="status error">{$errorMessage}</p>
    {:else if $rawInwards.length === 0}
      <p class="status">No inwards records found.</p>
    {:else if $filteredInwards.length === 0 && $searchTerm.trim()}
      <p class="status">No records match "{$searchTerm}".</p>
    {:else}
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Batch Code</th>
              <th>Item Code</th>
              <th>Supplier Code</th>
              <th>Req. Qty</th>
              <th>Rec. Qty</th>
              <th>Price/Unit</th>
              <th>Est. Profit (%)</th>
              <th>P. Date</th>
              <th>Exp. Date</th>
              <th>Exp. Days</th>
              <th>Used For</th>
              <th>Desc 1</th>
              <th>Desc 2</th>
              <th>Desc 3</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each $filteredInwards as r (r.batchcode)}
              <tr>
                <td>{r.batchcode ?? 'N/A'}</td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <select bind:value={editedItemCode} required>
                      {#each $itemOptions as item}
                        <option value={item.itemcode}
                          >{item.itemname} ({item.itemcode})</option
                        >
                      {/each}
                    </select>
                  {:else}
                    {r.itemcode ?? 'N/A'}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <select bind:value={editedSuppCode} required>
                      {#each $supplierOptions as supplier}
                        <option value={supplier.suppcode}
                          >{supplier.suppname} ({supplier.suppcode})</option
                        >
                      {/each}
                    </select>
                  {:else}
                    {r.suppcode ?? 'N/A'}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input
                      type="number"
                      bind:value={editedRequestedQty}
                      min="0"
                      step="0.001"
                      required
                    />
                  {:else}
                    {formatFloat(r.requestedqty)}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input
                      type="number"
                      bind:value={editedReceivedQty}
                      min="0"
                      step="0.001"
                      required
                    />
                  {:else}
                    {formatFloat(r.receivedqty)}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input
                      type="number"
                      bind:value={editedPurchasePrice}
                      step="0.001"
                      min="0"
                      required
                    />
                  {:else}
                    {formatCurrency(r.purchase_price_per_unit)}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input
                      type="number"
                      bind:value={editedEstimatePercentage}
                      step="0.01"
                      min="0"
                      required
                    />
                  {:else}
                    {formatPercentage(r.estimate_percentage)}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input
                      id="editedDatePurchase"
                      type="text"
                      bind:value={editedDatePurchase}
                      use:initEditFlatpickr
                      required
                    />
                  {:else}
                    {formatDateForTableDisplay(r.datepurchase)}
                  {/if}
                </td>
                <td>{formatDateForTableDisplay(r.expiry)}</td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input
                      type="number"
                      bind:value={editedExpiryDays}
                      min="0"
                      step="0.001"
                      required
                    />
                  {:else}
                    {formatFloat(r.expiryDays)}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input type="text" bind:value={editedItemUsed} />
                  {:else}
                    {r.itemused ?? 'N/A'}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input type="text" bind:value={editedDesc1} />
                  {:else}
                    {r.itemdesc1 ?? 'N/A'}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input type="text" bind:value={editedDesc2} />
                  {:else}
                    {r.itemdesc2 ?? 'N/A'}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <input type="text" bind:value={editedDesc3} />
                  {:else}
                    {r.itemdesc3 ?? 'N/A'}
                  {/if}
                </td>
                <td>
                  {#if $editingBatchCode === r.batchcode}
                    <button
                      class="btn save-btn"
                      on:click={() => saveEdit(r.batchcode)}
                      title="Save Changes"
                    >
                      Save
                    </button>
                    <button
                      class="btn cancel-btn"
                      on:click={cancelEdit}
                      title="Cancel Edit"
                    >
                      Cancel
                    </button>
                  {:else}
                    <button
                      class="btn edit-btn"
                      on:click={() => startEdit(r)}
                      title="Edit Record"
                    >
                      Edit
                    </button>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding: 2rem;
    background: #f0f2f5;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
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
  .btn:hover {
    filter: brightness(0.95);
  }
  .excel-btn {
    background-color: #28a745;
    color: #fff;
    border-color: #28a745;
  }
  .add-new-toggle-btn {
    background-color: #007bff;
    color: #fff;
  }
  .add-btn {
    background-color: #28a745;
    color: #fff;
    border-color: #28a745;
  }
  .edit-btn {
    background-color: #ffc107;
    color: #212529;
    border-color: #ffc107;
    margin-right: 0.5rem;
  }
  .save-btn {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
    margin-right: 0.5rem;
  }
  .cancel-btn {
    background-color: #6c757d;
    color: white;
    border-color: #6c757d;
  }
  .edit-input {
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    border: 1px solid #007bff;
    font-size: 0.85rem;
    width: 100%;
    box-sizing: border-box;
  }

  .add-form {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease-in-out;
  }
  .add-form h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #343a40;
  }
  .add-form form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-group label {
    font-size: 0.85rem;
    color: #6c757d;
    margin-bottom: 0.25rem;
  }
  .add-form input[type='text'],
  .add-form input[type='number'],
  .add-form input[type='date'],
  .add-form select {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }
  .form-action {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
  .add-form button[type='submit'] {
    width: auto;
  }

  .table-container {
    max-height: 500px;
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
    z-index: 1;
    padding: 0.75rem 0.8rem;
    text-align: left;
    font-size: 0.85rem;
    white-space: nowrap;
  }
  tbody td {
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid #dee2e6;
    vertical-align: middle;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  tbody tr:nth-child(odd) {
    background: #fafbfc;
  }
  td:last-child {
    white-space: nowrap;
    width: 1%;
  }
  .status {
    text-align: center;
    padding: 1.5rem;
    font-size: 1rem;
  }
  .status.error {
    color: #d9534f;
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    padding: 0.75rem;
    border-radius: 4px;
    margin-top: 1rem;
  }
</style>
