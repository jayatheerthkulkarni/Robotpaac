<script>
  import { onMount } from 'svelte';
  import { writable, derived } from 'svelte/store';
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  import Navbar from './lib/navbar.svelte';

  const rawSuppliers = writable([]);
  const inventoryItems = writable([]);
  const isLoading = writable(true);
  const errorMessage = writable('');
  const searchTerm = writable('');

  let supplierCodeInput = '';
  let supplierNameInput = '';
  let supplierContactInput = '';

  const SUPPLIERS_API_URL = 'http://localhost:3000/api/suppliers';
  const INVENTORY_API_URL = 'http://localhost:3000/api/master/all-inventory';

  async function fetchData() {
    isLoading.set(true);
    errorMessage.set('');
    try {
      const [supRes, invRes] = await Promise.all([
        axios.get(SUPPLIERS_API_URL),
        axios.get(INVENTORY_API_URL),
      ]);

      rawSuppliers.set(Array.isArray(supRes.data) ? supRes.data : []);
      inventoryItems.set(Array.isArray(invRes.data) ? invRes.data : []);
    } catch (err) {
      let msg = 'An unknown error occurred while fetching data.';
      if (err.response) {
        msg = `Server error: ${err.response.status} - ${err.response.data?.error || err.message}`;
      } else if (err.request) {
        msg = 'Network error: No response from server. Is the API running?';
      } else {
        msg = `Request setup error: ${err.message}`;
      }
      errorMessage.set(msg);
      rawSuppliers.set([]);
      inventoryItems.set([]);
    } finally {
      isLoading.set(false);
    }
  }

  onMount(fetchData);

  const filteredSuppliers = derived(
    [rawSuppliers, searchTerm],
    ([$raw, $term]) => {
      if (!$term.trim()) return $raw;
      const term = $term.toLowerCase();
      return $raw.filter(
        (s) =>
          (s.id && String(s.id).toLowerCase().includes(term)) ||
          (s.name && s.name.toLowerCase().includes(term)) ||
          (s.contact && s.contact.toLowerCase().includes(term)),
      );
    },
  );

  async function addSupplier() {
    if (
      !supplierCodeInput.trim() ||
      !supplierNameInput.trim() ||
      !supplierContactInput.trim()
    ) {
      errorMessage.set('Supplier Code, Name, and Contact are required.');
      return;
    }
    errorMessage.set('');
    try {
      await axios.post(SUPPLIERS_API_URL, {
        suppcode: supplierCodeInput.trim(),
        suppname: supplierNameInput.trim(),
        suppcontact: supplierContactInput.trim(),
      });
      supplierCodeInput = '';
      supplierNameInput = '';
      supplierContactInput = '';
      await fetchData();
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.statusText ||
        err.message ||
        'Failed to add supplier.';
      errorMessage.set(
        `Error adding supplier: ${msg} (Status: ${err.response?.status || 'N/A'})`,
      );
    }
  }

  async function deleteSupplier(supplierId) {
    if (!confirm('Are you sure you want to delete this supplier?')) return;
    errorMessage.set('');
    try {
      await axios.delete(`${SUPPLIERS_API_URL}/${supplierId}`);
      await fetchData();
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to delete supplier.';
      errorMessage.set(msg);
    }
  }

  function exportExcel() {
    const suppliersToExport = $rawSuppliers;
    if (!suppliersToExport || suppliersToExport.length === 0) {
      alert('No supplier data to export.');
      return;
    }

    const data = suppliersToExport.map((s) => ({
      'Supplier Code': s.id,
      Name: s.name,
      Contact: s.contact,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Suppliers');
    XLSX.writeFile(wb, 'Suppliers.xlsx');
  }
</script>

<Navbar />

<div class="wrapper">
  <div class="card">
    <div class="header">
      <h2>Manage Suppliers</h2>
      <div class="controls">
        <input
          bind:value={$searchTerm}
          placeholder="Search..."
          class="search-input"
        />
        <button on:click={exportExcel} class="btn excel-btn"
          >Export Excel</button
        >
      </div>
    </div>

    <div class="add-supplier-form">
      <form on:submit|preventDefault={addSupplier}>
        <input
          bind:value={supplierCodeInput}
          placeholder="Supplier Code"
          required
        />
        <input
          bind:value={supplierNameInput}
          placeholder="Supplier Name"
          required
        />
        <input
          bind:value={supplierContactInput}
          placeholder="Contact"
          required
        />
        <button type="submit" class="btn add-btn">Add Supplier</button>
      </form>
    </div>

    {#if $isLoading && $rawSuppliers.length === 0}
      <p class="status">Loading suppliers...</p>
    {:else if $errorMessage}
      <p class="status error">{$errorMessage}</p>
    {:else if $rawSuppliers.length === 0}
      <p class="status">No suppliers found.</p>
    {:else if $filteredSuppliers.length === 0 && $searchTerm.trim()}
      <p class="status">No suppliers match "{$searchTerm}".</p>
    {:else}
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each $filteredSuppliers as s (s.id)}
              <tr>
                <td><span class="cell-content">{s.id ?? 'N/A'}</span></td>
                <td><span class="cell-content">{s.name ?? 'N/A'}</span></td>
                <td><span class="cell-content">{s.contact ?? 'N/A'}</span></td>
                <td>
                  <button
                    class="btn delete-btn"
                    on:click={() => deleteSupplier(s.id)}
                    disabled={$inventoryItems.some(
                      (item) => item.suppcode === s.id,
                    )}
                    title={$inventoryItems.some(
                      (item) => item.suppcode === s.id,
                    )
                      ? 'Cannot delete: Linked to inventory.'
                      : 'Delete'}
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
    max-width: 1000px;
    padding: 2rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .controls {
    display: flex;
    gap: 1rem;
  }
  .search-input {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    height: 1.8rem;
    line-height: 1;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .btn {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    height: 1.8rem;
    line-height: 1;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #f8f9fa;
    cursor: pointer;
  }
  .excel-btn {
    background-color: #198754;
    color: #fff;
  }
  .add-btn {
    background-color: #007bff;
    color: #fff;
    margin-left: 1rem;
  }
  .delete-btn {
    background-color: #dc3545;
    color: white;
  }
  .delete-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  .add-supplier-form {
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .add-supplier-form input {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
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
    z-index: 1;
    padding: 0.75rem 1rem;
    text-align: left;
  }
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #dee2e6;
  }
  .cell-content {
    display: block;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status {
    text-align: center;
    padding: 1.5rem;
  }
  .status.error {
    color: #d9534f;
  }
</style>
