<script>
  import { onMount } from 'svelte';
  import { writable, derived } from 'svelte/store';
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  import Navbar from './lib/navbar.svelte'; // Assuming this path is correct

  // Svelte Stores for application state
  const rawCustomers = writable([]);
  const isLoading = writable(true);
  const errorMessage = writable('');
  const searchTerm = writable('');

  // Variables for adding a new customer
  let customerCodeInput = '';
  let customerNameInput = '';
  let customerContactInput = '';

  // Variables for editing an existing customer
  const editingCustomerCode = writable(null); // Stores the code of the customer being edited
  let editedName = ''; // Holds the name value during edit
  let editedContact = ''; // Holds the contact value during edit

  const CUSTOMERS_API_URL = 'http://localhost:3000/api/customers';

  // --- Data Fetching ---
  async function fetchCustomers() {
    isLoading.set(true);
    errorMessage.set('');
    try {
      const res = await axios.get(CUSTOMERS_API_URL);
      rawCustomers.set(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to fetch customers.';
      errorMessage.set(msg);
      rawCustomers.set([]);
    } finally {
      isLoading.set(false);
    }
  }

  onMount(fetchCustomers);

  // --- Derived Store for Filtering ---
  const filteredCustomers = derived(
    [rawCustomers, searchTerm],
    ([$raw, $term]) => {
      if (!$term.trim()) return $raw;
      const term = $term.toLowerCase();
      return $raw.filter(
        (c) =>
          (c.code && String(c.code).toLowerCase().includes(term)) ||
          (c.name && c.name.toLowerCase().includes(term)) ||
          (c.contact && c.contact.toLowerCase().includes(term)),
      );
    },
  );

  // --- Add Customer Function ---
  async function addCustomer() {
    if (
      !customerCodeInput.trim() ||
      !customerNameInput.trim() ||
      !customerContactInput.trim()
    ) {
      errorMessage.set('Customer Code, Name, and Contact are required.');
      return;
    }
    errorMessage.set(''); // Clear previous errors
    try {
      await axios.post(CUSTOMERS_API_URL, {
        custcode: customerCodeInput.trim(),
        custname: customerNameInput.trim(),
        custcontact: customerContactInput.trim(),
      });
      // Clear form inputs after successful add
      customerCodeInput = '';
      customerNameInput = '';
      customerContactInput = '';
      await fetchCustomers(); // Refresh the list
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.statusText ||
        err.message ||
        'Failed to add customer.';
      errorMessage.set(`Error adding customer: ${msg}`);
    }
  }

  // --- Delete Customer Function ---
  async function deleteCustomer(customerCode) {
    // Prevent deletion if an edit is in progress
    if ($editingCustomerCode !== null) {
      errorMessage.set(
        'Please save or cancel the current edit before deleting.',
      );
      return;
    }
    if (!confirm('Are you sure you want to delete this customer?')) return;
    errorMessage.set(''); // Clear previous errors
    try {
      await axios.delete(`${CUSTOMERS_API_URL}/${customerCode}`);
      await fetchCustomers(); // Refresh the list
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to delete customer.';
      errorMessage.set(msg);
    }
  }

  // --- Edit Customer Functions ---
  function startEdit(customer) {
    errorMessage.set(''); // Clear any previous errors
    editingCustomerCode.set(customer.code); // Set the customer code for the row being edited
    editedName = customer.name; // Populate edit fields with current data
    editedContact = customer.contact;
  }

  function cancelEdit() {
    errorMessage.set(''); // Clear any previous errors
    editingCustomerCode.set(null); // Exit edit mode
    editedName = ''; // Clear edit field values
    editedContact = '';
  }

  async function saveEdit(customerCode) {
    if (!editedName.trim() || !editedContact.trim()) {
      errorMessage.set('Customer Name and Contact cannot be empty.');
      return;
    }
    errorMessage.set(''); // Clear previous errors
    try {
      await axios.put(`${CUSTOMERS_API_URL}/${customerCode}`, {
        custname: editedName.trim(),
        custcontact: editedContact.trim(),
      });
      await fetchCustomers(); // Refresh the list to show updated data
      cancelEdit(); // Exit edit mode
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        'Failed to update customer.';
      errorMessage.set(`Error updating customer: ${msg}`);
    }
  }

  // --- Export to Excel Function ---
  function exportExcel() {
    const customersToExport = $rawCustomers; // Export all raw customers, not just filtered ones
    if (!customersToExport || customersToExport.length === 0) {
      alert('No customer data to export.');
      return;
    }

    const data = customersToExport.map((c) => ({
      'Customer Code': c.code,
      Name: c.name,
      Contact: c.contact,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Customers');
    XLSX.writeFile(wb, 'Customers.xlsx');
  }
</script>

<Navbar />

<div class="wrapper">
  <div class="card">
    <div class="header">
      <h2>Manage Customers</h2>
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
      <form on:submit|preventDefault={addCustomer}>
        <input
          bind:value={customerCodeInput}
          placeholder="Customer Code"
          required
        />
        <input
          bind:value={customerNameInput}
          placeholder="Customer Name"
          required
        />
        <input
          bind:value={customerContactInput}
          placeholder="Contact"
          required
        />
        <button type="submit" class="btn add-btn">Add Customer</button>
      </form>
    </div>

    {#if $isLoading && $rawCustomers.length === 0}
      <p class="status">Loading customers...</p>
    {:else if $errorMessage}
      <p class="status error">{$errorMessage}</p>
    {:else if $rawCustomers.length === 0}
      <p class="status">No customers found.</p>
    {:else if $filteredCustomers.length === 0 && $searchTerm.trim()}
      <p class="status">No customers match "{$searchTerm}".</p>
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
            {#each $filteredCustomers as c (c.code)}
              <tr>
                <td><span class="cell-content">{c.code ?? 'N/A'}</span></td>
                <td>
                  {#if $editingCustomerCode === c.code}
                    <input
                      type="text"
                      bind:value={editedName}
                      class="edit-input"
                      required
                    />
                  {:else}
                    <span class="cell-content">{c.name ?? 'N/A'}</span>
                  {/if}
                </td>
                <td>
                  {#if $editingCustomerCode === c.code}
                    <input
                      type="text"
                      bind:value={editedContact}
                      class="edit-input"
                      required
                    />
                  {:else}
                    <span class="cell-content">{c.contact ?? 'N/A'}</span>
                  {/if}
                </td>
                <td>
                  {#if $editingCustomerCode === c.code}
                    <button
                      class="btn save-btn"
                      on:click={() => saveEdit(c.code)}
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
                      on:click={() => startEdit(c)}
                      title="Edit Customer"
                    >
                      Edit
                    </button>
                    <button
                      class="btn delete-btn"
                      on:click={() => deleteCustomer(c.code)}
                      title="Delete Customer"
                      disabled={$editingCustomerCode !== null}
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
  /* Reuse your existing styles from supplier manager */
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
