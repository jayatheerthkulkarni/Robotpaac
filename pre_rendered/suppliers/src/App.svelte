<script>
  import { onMount } from 'svelte';
  import { writable, derived } from 'svelte/store';
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  import Navbar from './lib/navbar.svelte'; // Assuming this path is correct

  // Svelte Stores for application state
  const rawSuppliers = writable([]);
  const inventoryItems = writable([]); // Needed for delete button logic
  const isLoading = writable(true);
  const errorMessage = writable('');
  const searchTerm = writable('');

  // Variables for adding a new supplier
  let supplierCodeInput = '';
  let supplierNameInput = '';
  let supplierContactInput = '';

  // Variables for editing an existing supplier
  const editingSupplierId = writable(null); // Stores the ID of the supplier being edited
  let editedName = ''; // Holds the name value during edit
  let editedContact = ''; // Holds the contact value during edit

  const SUPPLIERS_API_URL = 'http://localhost:3000/api/suppliers';
  const INVENTORY_API_URL = 'http://localhost:3000/api/master/all-inventory'; // Used for delete constraint

  // --- Data Fetching ---
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

  // --- Derived Store for Filtering ---
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

  // --- Add Supplier Function ---
  async function addSupplier() {
    if (
      !supplierCodeInput.trim() ||
      !supplierNameInput.trim() ||
      !supplierContactInput.trim()
    ) {
      errorMessage.set('Supplier Code, Name, and Contact are required.');
      return;
    }
    errorMessage.set(''); // Clear previous errors
    try {
      await axios.post(SUPPLIERS_API_URL, {
        suppcode: supplierCodeInput.trim(),
        suppname: supplierNameInput.trim(),
        suppcontact: supplierContactInput.trim(),
      });
      // Clear form inputs after successful add
      supplierCodeInput = '';
      supplierNameInput = '';
      supplierContactInput = '';
      await fetchData(); // Refresh the list
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

  // --- Delete Supplier Function ---
  async function deleteSupplier(supplierId) {
    // Prevent deletion if an edit is in progress
    if ($editingSupplierId !== null) {
      errorMessage.set(
        'Please save or cancel the current edit before deleting.',
      );
      return;
    }
    if (!confirm('Are you sure you want to delete this supplier?')) return;
    errorMessage.set(''); // Clear previous errors
    try {
      await axios.delete(`${SUPPLIERS_API_URL}/${supplierId}`);
      await fetchData(); // Refresh the list
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to delete supplier.';
      errorMessage.set(msg);
    }
  }

  // --- Edit Supplier Functions ---
  function startEdit(supplier) {
    errorMessage.set(''); // Clear any previous errors
    editingSupplierId.set(supplier.id); // Set the supplier ID for the row being edited
    editedName = supplier.name; // Populate edit fields with current data
    editedContact = supplier.contact;
  }

  function cancelEdit() {
    errorMessage.set(''); // Clear any previous errors
    editingSupplierId.set(null); // Exit edit mode
    editedName = ''; // Clear edit field values
    editedContact = '';
  }

  async function saveEdit(supplierId) {
    if (!editedName.trim() || !editedContact.trim()) {
      errorMessage.set('Supplier Name and Contact cannot be empty.');
      return;
    }
    errorMessage.set(''); // Clear previous errors
    try {
      await axios.put(`${SUPPLIERS_API_URL}/${supplierId}`, {
        suppname: editedName.trim(),
        suppcontact: editedContact.trim(),
      });
      await fetchData(); // Refresh the list to show updated data
      cancelEdit(); // Exit edit mode
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to update supplier.';
      errorMessage.set(`Error updating supplier: ${msg}`);
    }
  }

  // --- Export to Excel Function ---
  function exportExcel() {
    const suppliersToExport = $rawSuppliers; // Export all raw suppliers, not just filtered ones
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
                <td>
                  {#if $editingSupplierId === s.id}
                    <input
                      type="text"
                      bind:value={editedName}
                      class="edit-input"
                      required
                    />
                  {:else}
                    <span class="cell-content">{s.name ?? 'N/A'}</span>
                  {/if}
                </td>
                <td>
                  {#if $editingSupplierId === s.id}
                    <input
                      type="text"
                      bind:value={editedContact}
                      class="edit-input"
                      required
                    />
                  {:else}
                    <span class="cell-content">{s.contact ?? 'N/A'}</span>
                  {/if}
                </td>
                <td>
                  {#if $editingSupplierId === s.id}
                    <button
                      class="btn save-btn"
                      on:click={() => saveEdit(s.id)}
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
                      on:click={() => startEdit(s)}
                      title="Edit Supplier"
                    >
                      Edit
                    </button>
                    <button
                      class="btn delete-btn"
                      on:click={() => deleteSupplier(s.id)}
                      disabled={$editingSupplierId !== null || // Disable if any row is being edited
                        $inventoryItems.some((item) => item.suppcode === s.id)}
                      title={$editingSupplierId !== null
                        ? 'Please save or cancel the current edit.'
                        : $inventoryItems.some((item) => item.suppcode === s.id)
                          ? 'Cannot delete: Linked to inventory.'
                          : 'Delete Supplier'}
                    >
                      Delete
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
    max-width: 1000px;
    padding: 2rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Align items vertically in header */
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
    min-width: 150px; /* Give search input some width */
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
    transition:
      background-color 0.2s,
      color 0.2s;
    white-space: nowrap; /* Prevent button text from wrapping */
  }
  .btn:hover {
    filter: brightness(0.95);
  }
  .excel-btn {
    background-color: #28a745; /* Success green */
    color: #fff;
    border-color: #28a745;
  }
  .add-btn {
    background-color: #007bff; /* Primary blue */
    color: #fff;
    border-color: #007bff;
  }
  .delete-btn {
    background-color: #dc3545; /* Danger red */
    color: white;
    border-color: #dc3545;
  }
  .delete-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    border-color: #6c757d;
  }

  /* New styles for edit functionality */
  .edit-btn {
    background-color: #ffc107; /* Warning yellow */
    color: #212529; /* Dark text for contrast */
    border-color: #ffc107;
    margin-right: 0.5rem; /* Space between edit and delete */
  }
  .save-btn {
    background-color: #007bff; /* Primary blue */
    color: white;
    border-color: #007bff;
    margin-right: 0.5rem;
  }
  .cancel-btn {
    background-color: #6c757d; /* Secondary gray */
    color: white;
    border-color: #6c757d;
  }
  .edit-input {
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    border: 1px solid #007bff; /* Highlight focus */
    font-size: 0.85rem;
    width: 100%; /* Make input fill cell */
    box-sizing: border-box; /* Include padding/border in width */
  }
  /* End new styles for edit functionality */

  .add-supplier-form {
    margin: 1rem 0;
    display: flex;
    gap: 0.75rem; /* Reduced gap for more compact form */
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
  }
  .add-supplier-form input {
    flex: 1; /* Allow inputs to grow and shrink */
    min-width: 150px; /* Minimum width for inputs before wrapping */
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 0.9rem; /* Slightly larger font */
  }
  .add-supplier-form button.add-btn {
    margin-left: auto; /* Push add button to the right */
  }
  /* Ensure form buttons are styled consistently */
  .add-supplier-form button.btn {
    height: auto; /* Let content define height */
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
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
    font-size: 0.9rem;
  }
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #dee2e6;
    vertical-align: middle; /* Align content vertically in middle */
    font-size: 0.85rem;
  }
  td:last-child {
    white-space: nowrap; /* Prevent action buttons from wrapping */
  }
  .cell-content {
    display: block;
    max-width: 200px; /* Constrain width of content */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
