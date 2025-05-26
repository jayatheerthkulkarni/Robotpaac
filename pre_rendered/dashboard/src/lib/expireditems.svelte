<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  let total = null;
  let expiredItems = [];

  async function get_data() {
    const response = await axios.get(
      'http://localhost:3000/api/data/expired/total',
    );
    total = response.data?.total_expired_qty ?? 0;
  }

  async function get_expired_items() {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/data/expired',
      );

      expiredItems = response.data;
    } catch (error) {
      console.error('Error fetching expired items:', error);
    }
  }

  onMount(() => {
    get_data();
    get_expired_items();
  });

  function getCardClass(daysExpired) {
    if (daysExpired > 90) return 'card red';
    if (daysExpired > 30) return 'card orange';
    return 'card yellow';
  }

  function calculateDays(expiry) {
    const expiryDate = new Date(expiry);
    const now = new Date();
    const diff = Math.floor((now - expiryDate) / (1000 * 60 * 60 * 24));
    return diff;
  }
</script>

<div class="parent">
  <div class="div1">
    <p class="main">Total Expired Items: {total}</p>
  </div>
  <div class="div2">
    {#if expiredItems.length > 0}
      {#each expiredItems as item}
        <div class={getCardClass(calculateDays(item.expiry))}>
          <p><strong>{item.itemname}</strong></p>
          <p>Batch: {item.batchcode}</p>
          <p>Qty: {item.qty}</p>
          <p>Expired: {calculateDays(item.expiry)} days ago</p>
        </div>
      {/each}
    {:else}
      <div class="card green">
        <p><strong>No expired items</strong></p>
        <p>Inventory is healthy</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .parent {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0px;
  }

  .div1 {
    grid-column: span 5 / span 5;
  }

  .div2 {
    grid-column: span 5 / span 5;
    grid-row: span 9 / span 9;
    grid-row-start: 2;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;
  }

  .card {
    width: 220px;
    padding: 1rem;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    font-size: 0.95rem;
  }

  .red {
    color: #b30000;
    border-left: 5px solid #b30000;
  }

  .orange {
    color: #cc7a00;
    border-left: 5px solid #cc7a00;
  }

  .yellow {
    color: #b38f00;
    border-left: 5px solid #b38f00;
  }

  .green {
    color: #267326;
    border-left: 5px solid #267326;
  }

  .main {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
</style>
