<script>
  import { onMount } from 'svelte';
  import { writable, derived, get } from 'svelte/store';
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  import Navbar from './lib/navbar.svelte';
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';

  // --- Main Data Stores ---
  const rawOutwards = writable([]);
  const batches = writable([]);
  const customers = writable([]);
  const isLoading = writable(true);
  const errorMessage = writable('');
  const searchTerm = writable('');
  const showAddForm = writable(false);

  // --- Add Form State ---
  let addOutId = '';
  let addBatchCode = '';
  let addCustCode = '';
  let addQty = 0.0;
  let addSellingPrice = 0.0;
  let addDateOut = '';

  // --- Edit Form State ---
  const editingOutId = writable(null);
  let editedBatchCode = '';
  let editedCustCode = '';
  let editedQty = 0.0;
  let editedSellingPrice = 0.0;
  let editedDateOut = '';

  const OUTWARDS_API_URL = 'http://localhost:3000/api/outwards';

  // --- API Functions ---
  async function fetchOutwards() {
    isLoading.set(true);
    errorMessage.set('');
    try {
      const res = await axios.get(OUTWARDS_API_URL);
      rawOutwards.set(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      const msg = err.response?.data?.error || err.message || 'Failed to fetch outwards records.';
      errorMessage.set(msg);
      rawOutwards.set([]);
    } finally {
      isLoading.set(false);
    }
  }

  async function fetchBatchCustomerLists() {
    try {
      const res = await axios.get(`${OUTWARDS_API_URL}/batch-customer-lists`);
      batches.set(res.data.batches);
      customers.set(res.data.customers);
    } catch (err) {
      errorMessage.set('Failed to fetch batch and customer lists for forms.');
      batches.set([]);
      customers.set([]);
    }
  }

  // --- Lifecycle & Initializers ---
  onMount(async () => {
    await fetchOutwards();
    await fetchBatchCustomerLists();
  });

  // --- Svelte Action for Flatpickr ---
  function flatpickrAction(node, defaultDate) {
    const fp = flatpickr(node, {
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'd/m/Y',
      defaultDate: defaultDate,
      onClose: function (selectedDates) {
        if (selectedDates.length > 0) {
          node.value = selectedDates[0].toISOString().split('T')[0];
          node.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
          node.value = '';
          node.dispatchEvent(new Event('input', { bubbles: true }));
        }
      },
    });

    return {
      update(newDefaultDate) {
        fp.setDate(newDefaultDate, false);
      },
      destroy() {
        fp.destroy();
      },
    };
  }

  // --- Formatting Helpers ---
  function formatDateForDisplay(dateString) {
    if (!dateString) return 'N/A';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString; // Return original if invalid
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatCurrency(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    return Number(value).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
  }

  function formatFloat(value) {
    if (value == null || isNaN(Number(value))) return 'N/A';
    return Number(value).toFixed(3);
  }

  // --- Derived Store for Filtering ---
  const filteredOutwards = derived([rawOutwards, searchTerm], ([$raw, $term]) => {
    if (!$term.trim()) return $raw;
    const term = $term.toLowerCase();
    return $raw.filter((r) =>
      Object.values(r).some((v) => v != null && String(v).toLowerCase().includes(term)),
    );
  });

  // --- CRUD Functions ---
  async function addOutwards() {
    errorMessage.set('');

    const selectedBatch = $batches.find(b => b.batchcode === addBatchCode);
    const availableStock = selectedBatch ? selectedBatch.current_stock : 0;

    const newRecord = {
      outid: addOutId.trim(),
      batchcode: addBatchCode.trim(),
      custcode: addCustCode.trim(),
      qty: Number(addQty),
      selling_price_per_unit: Number(addSellingPrice),
      dateout: addDateOut.trim(),
    };

    if (
      !newRecord.outid ||
      !newRecord.batchcode ||
      !newRecord.custcode ||
      isNaN(newRecord.qty) ||
      newRecord.qty <= 0 ||
      isNaN(newRecord.selling_price_per_unit) ||
      newRecord.selling_price_per_unit < 0 ||
      !newRecord.dateout
    ) {
      errorMessage.set('Please fill all required fields correctly (quantity positive, price non-negative, and date valid).');
      return;
    }

    if (newRecord.qty > availableStock) {
      errorMessage.set(`Not enough stock in batch ${addBatchCode}. Available: ${formatFloat(availableStock)}`);
      return;
    }

    try {
      await axios.post(OUTWARDS_API_URL, newRecord);
      addOutId = '';
      addBatchCode = '';
      addCustCode = '';
      addQty = 0.0;
      addSellingPrice = 0.0;
      addDateOut = '';
      await fetchOutwards();
      await fetchBatchCustomerLists(); // Refresh stock levels
      showAddForm.set(false);
    } catch (err) {
      const msg = err.response?.data?.error || err.response?.statusText || err.message || 'Failed to add outwards record.';
      errorMessage.set(`Error adding outwards record: ${msg}`);
    }
  }

  function startEdit(record) {
    errorMessage.set('');
    editingOutId.set(record.outid);
    editedBatchCode = record.batchcode;
    editedCustCode = record.custcode;
    editedQty = record.qty;
    editedSellingPrice = record.selling_price_per_unit;
    editedDateOut = record.dateout ? new Date(record.dateout).toISOString().split('T')[0] : '';
  }

  function cancelEdit() {
    errorMessage.set('');
    editingOutId.set(null);
  }

  async function saveEdit(outid) {
    errorMessage.set('');

    const originalRecord = get(rawOutwards).find(o => o.outid === outid);
    if (!originalRecord) {
        errorMessage.set("Cannot find original record to save.");
        return;
    }

    const updatedFields = {
      batchcode: editedBatchCode.trim(),
      custcode: editedCustCode.trim(),
      qty: Number(editedQty),
      selling_price_per_unit: Number(editedSellingPrice),
      dateout: editedDateOut.trim(),
    };

    if (
      !updatedFields.batchcode ||
      !updatedFields.custcode ||
      isNaN(updatedFields.qty) ||
      updatedFields.qty <= 0 ||
      isNaN(updatedFields.selling_price_per_unit) ||
      updatedFields.selling_price_per_unit < 0 ||
      !updatedFields.dateout
    ) {
      errorMessage.set('Edited fields must be valid (quantity positive, price non-negative, and date valid).');
      return;
    }

    // Stock validation
    const selectedBatch = $batches.find(b => b.batchcode === updatedFields.batchcode);
    let availableStock = selectedBatch ? selectedBatch.current_stock : 0;
    if (updatedFields.batchcode === originalRecord.batchcode) {
        availableStock += originalRecord.qty; // Temporarily add back original qty for calculation
    }
    
    if (updatedFields.qty > availableStock) {
        errorMessage.set(`Not enough stock in batch ${updatedFields.batchcode}. Available for this transaction: ${formatFloat(availableStock)}`);
        return;
    }

    try {
      await axios.put(`${OUTWARDS_API_URL}/${outid}`, updatedFields);
      await fetchOutwards();
      await fetchBatchCustomerLists(); // Refresh stock levels
      cancelEdit();
    } catch (err) {
      const msg = err.response?.data?.error || err.message || 'Failed to update outwards record.';
      errorMessage.set(`Error updating outwards record: ${msg}`);
    }
  }

  function exportExcel() {
    const recordsToExport = get(filteredOutwards);
    if (!recordsToExport || recordsToExport.length === 0) {
      alert('No outwards data to export.');
      return;
    }

    const data = recordsToExport.map((r) => ({
      'Outward ID': r.outid,
      'Batch Code': r.batchcode,
      'Item Code': r.itemcode,
      'Item Name': r.itemname,
      'Customer Code': r.custcode,
      'Customer Name': r.custname,
      'Quantity': formatFloat(r.qty),
      'Selling Price Per Unit': formatFloat(r.selling_price_per_unit),
      'Date Out': formatDateForDisplay(r.dateout),
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'OutwardsRecords');
    XLSX.writeFile(wb, 'OutwardsRecords.xlsx');
  }
</script>

<Navbar />

<div class="wrapper">
  <div class="card">
    <div class="header">
      <h2>Manage Outwards Records</h2>
      <div class="controls">
        <input
          bind:value={$searchTerm}
          placeholder="Search all fields..."
          class="search-input"
        />
        <button on:click={exportExcel} class="btn excel-btn">Export Excel</button>
        <button on:click={() => showAddForm.update(val => !val)} class="btn add-new-toggle-btn">
          {$showAddForm ? 'Hide Add Form' : 'Add New Record'}
        </button>
      </div>
    </div>

    {#if $showAddForm}
      <div class="add-form">
        <h3>Add New Outwards Record</h3>
        <form on:submit|preventDefault={addOutwards}>
          <div class="form-group">
            <label for="addOutId">Outward ID:</label>
            <input id="addOutId" bind:value={addOutId} type="text" required />
          </div>
          <div class="form-group">
            <label for="addBatchCode">Batch (Item - Stock):</label>
            <select id="addBatchCode" bind:value={addBatchCode} required>
              <option value="" disabled>Select a Batch</option>
              {#each $batches as batch}
                <option value={batch.batchcode}>
                  {batch.itemname} ({batch.batchcode}) - Stock: {formatFloat(batch.current_stock)}
                </option>
              {/each}
            </select>
          </div>
          <div class="form-group">
            <label for="addCustCode">Customer:</label>
            <select id="addCustCode" bind:value={addCustCode} required>
              <option value="" disabled>Select a Customer</option>
              {#each $customers as customer}
                <option value={customer.custcode}>{customer.custname} ({customer.custcode})</option>
              {/each}
            </select>
          </div>
          <div class="form-group">
            <label for="addQty">Quantity:</label>
            <input id="addQty" type="number" bind:value={addQty} min="0.001" step="0.001" required />
          </div>
          <div class="form-group">
            <label for="addSellingPrice">Selling Price/Unit:</label>
            <input id="addSellingPrice" type="number" bind:value={addSellingPrice} min="0" step="0.001" required />
          </div>
          <div class="form-group">
            <label for="addDateOut">Date Out:</label>
            <input id="addDateOut" type="text" bind:value={addDateOut} use:flatpickrAction required />
          </div>
          <div class="form-action">
            <button type="submit" class="btn add-btn">Add Record</button>
          </div>
        </form>
      </div>
    {/if}

    {#if $isLoading && $rawOutwards.length === 0}
      <p class="status">Loading outwards records...</p>
    {:else if $errorMessage}
      <p class="status error">{$errorMessage}</p>
    {:else if $rawOutwards.length === 0}
      <p class="status">No outwards records found.</p>
    {:else if $filteredOutwards.length === 0 && $searchTerm.trim()}
      <p class="status">No records match "{$searchTerm}".</p>
    {:else}
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Outward ID</th>
              <th>Batch Code</th>
              <th>Item Name</th>
              <th>Customer</th>
              <th>Quantity</th>
              <th>Price/Unit</th>
              <th>Date Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each $filteredOutwards as r (r.outid)}
              <tr>
                <td>{r.outid ?? 'N/A'}</td>
                <td>
                  {#if $editingOutId === r.outid}
                     <select class="edit-input" bind:value={editedBatchCode} required>
                        {#each $batches as batch}
                            <option value={batch.batchcode}>
                                {batch.batchcode} ({batch.itemname})
                            </option>
                        {/each}
                     </select>
                  {:else}
                    {r.batchcode ?? 'N/A'}
                  {/if}
                </td>
                <td>{r.itemname ?? 'N/A'}</td>
                <td>
                  {#if $editingOutId === r.outid}
                     <select class="edit-input" bind:value={editedCustCode} required>
                        {#each $customers as customer}
                            <option value={customer.custcode}>{customer.custname} ({customer.custcode})</option>
                        {/each}
                     </select>
                  {:else}
                    {r.custname ?? 'N/A'} ({r.custcode ?? 'N/A'})
                  {/if}
                </td>
                <td>
                  {#if $editingOutId === r.outid}
                    <input class="edit-input" type="number" bind:value={editedQty} min="0.001" step="0.001" required />
                  {:else}
                    {formatFloat(r.qty)}
                  {/if}
                </td>
                <td>
                  {#if $editingOutId === r.outid}
                    <input class="edit-input" type="number" bind:value={editedSellingPrice} min="0" step="0.001" required />
                  {:else}
                    {formatCurrency(r.selling_price_per_unit)}
                  {/if}
                </td>
                <td>
                  {#if $editingOutId === r.outid}
                    <input class="edit-input" type="text" bind:value={editedDateOut} use:flatpickrAction={editedDateOut} required />
                  {:else}
                    {formatDateForDisplay(r.dateout)}
                  {/if}
                </td>
                <td>
                  {#if $editingOutId === r.outid}
                    <button class="btn save-btn" on:click={() => saveEdit(r.outid)} title="Save Changes">Save</button>
                    <button class="btn cancel-btn" on:click={cancelEdit} title="Cancel Edit">Cancel</button>
                  {:else}
                    <button class="btn edit-btn" on:click={() => startEdit(r)} title="Edit Record">Edit</button>
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
  /* --- Consistent Styling (from Inwards Component) --- */
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
    flex-wrap: wrap;
    gap: 1rem;
  }
  .controls {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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
    white-space: nowrap;
  }
  .btn:hover {
    filter: brightness(0.95);
  }
  .excel-btn {
    background-color: #28a745;
    color: #fff;
  }
  .add-new-toggle-btn {
    background-color: #007bff;
    color: #fff;
  }
  .add-btn {
    background-color: #28a745;
    color: #fff;
  }
  .edit-btn {
    background-color: #ffc107;
    color: #212529;
    padding: 0.4rem 0.8rem;
  }
  .save-btn {
    background-color: #007bff;
    color: white;
    padding: 0.4rem 0.8rem;
    margin-right: 0.5rem;
  }
  .cancel-btn {
    background-color: #6c757d;
    color: white;
    padding: 0.4rem 0.8rem;
  }

  /* --- Add Form Styling --- */
  .add-form {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .add-form h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #343a40;
  }
  .add-form form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  .add-form input, .add-form select {
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

  /* --- Table Styling --- */
  .table-container {
    max-height: 60vh;
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
    font-size: 0.9rem;
  }
  tbody tr:nth-child(odd) {
    background: #f8f9fa;
  }
  td:last-child {
    white-space: nowrap;
    width: 1%;
  }
  .edit-input {
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    border: 1px solid #007bff;
    font-size: 0.9rem;
    width: 100%;
    min-width: 120px;
    box-sizing: border-box;
  }
  select.edit-input {
      min-width: 150px;
  }
  
  /* --- Status Messaging --- */
  .status {
    text-align: center;
    padding: 1.5rem;
    font-size: 1.1rem;
    color: #6c757d;
  }
  .status.error {
    color: #d9534f;
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
  }
</style>