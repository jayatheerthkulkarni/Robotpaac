<!-- src/lib/profits.svelte -->
<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Chart from 'chart.js/auto';

  let profitTransactions = $state([]);
  let profitByItem = $state([]);
  let grandTotalProfit = $state(0);

  let isLoadingTransactions = $state(true);
  let isLoadingByItem = $state(true);
  let transactionsError = $state('');
  let byItemError = $state('');

  let byItemCanvas;
  let byItemChartInstance = $state(null);

  async function fetchProfitSummary() {
    isLoadingTransactions = true;
    transactionsError = '';
    try {
      const response = await axios.get(
        'http://localhost:3000/api/data/profits/summary',
      );
      profitTransactions = response.data.transactions;
      grandTotalProfit = response.data.grandTotalProfit;
    } catch (error) {
      console.error('Error fetching profit summary:', error);
      transactionsError = 'Failed to load profit transactions.';
      profitTransactions = [];
      grandTotalProfit = 0;
    } finally {
      isLoadingTransactions = false;
    }
  }

  async function fetchProfitByItem() {
    isLoadingByItem = true;
    byItemError = '';
    try {
      const response = await axios.get(
        'http://localhost:3000/api/data/profits/byitem',
      );
      profitByItem = response.data;
    } catch (error) {
      console.error('Error fetching profit by item:', error);
      byItemError = 'Failed to load profit by item.';
      profitByItem = [];
    } finally {
      isLoadingByItem = false;
    }
  }

  function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch (e) {
      return dateString;
    }
  }

  function formatCurrency(value) {
    if (value === null || value === undefined) return 'N/A';
    return value.toLocaleString(undefined, {
      style: 'currency',
      currency: 'INR',
    });
  }

  function createOrUpdateByItemChart() {
    if (byItemCanvas && profitByItem.length > 0) {
      if (byItemChartInstance) {
        byItemChartInstance.destroy();
        byItemChartInstance = null;
      }

      const labels = profitByItem.map((item) => item.itemname);
      const data = profitByItem.map((item) => item.total_profit_for_item);

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Total Profit by Item',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(199, 199, 199, 0.7)',
              'rgba(83, 102, 255, 0.7)',
              'rgba(40, 159, 64, 0.7)',
              'rgba(210, 99, 132, 0.7)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(199, 199, 199, 1)',
              'rgba(83, 102, 255, 1)',
              'rgba(40, 159, 64, 1)',
              'rgba(210, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      byItemChartInstance = new Chart(byItemCanvas, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              title: { display: true, text: 'Total Profit' },
            },
            y: {
              title: { display: true, text: 'Item' },
            },
          },
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Top Profitable Items' },
          },
        },
      });
    } else if (byItemChartInstance) {
      byItemChartInstance.destroy();
      byItemChartInstance = null;
    }
  }

  onMount(() => {
    fetchProfitSummary();
    fetchProfitByItem();
  });

  $effect(() => {
    if (!isLoadingByItem && byItemCanvas) {
      createOrUpdateByItemChart();
    }
  });
</script>

<div class="container">
  <div class="header">
    <p class="title-text">Profit Analysis</p>
  </div>

  <div class="summary-card grand-total-profit-card">
    <h4>Grand Total Profit</h4>
    <p class="total-value">{formatCurrency(grandTotalProfit)}</p>
  </div>

  <div class="section profit-by-item-section">
    <h3 class="section-title">Profit by Item</h3>
    {#if isLoadingByItem}
      <div class="loading-state"><p>Loading profit by item...</p></div>
    {:else if byItemError}
      <div class="error-state"><p>{byItemError}</p></div>
    {:else if profitByItem.length === 0}
      <p class="no-data-message">No profit data by item available.</p>
    {:else}
      <div class="chart-container-wrapper">
        <canvas bind:this={byItemCanvas}></canvas>
      </div>
      <div class="list-container small-table">
        <table class="items-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Total Sold Qty</th>
              <th>Avg. Purchase Price</th>
              <th>Avg. Selling Price</th>
              <th>Total Profit</th>
            </tr>
          </thead>
          <tbody>
            {#each profitByItem as item (item.itemcode)}
              <tr>
                <td>{item.itemname}</td>
                <td>{item.total_quantity_sold}</td>
                <td>{formatCurrency(item.avg_purchase_price)}</td>
                <td>{formatCurrency(item.avg_selling_price)}</td>
                <td class="profit-value"
                  >{formatCurrency(item.total_profit_for_item)}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>

  <div class="section profit-transactions-section">
    <h3 class="section-title">Individual Profit Transactions</h3>
    {#if isLoadingTransactions}
      <div class="loading-state"><p>Loading profit transactions...</p></div>
    {:else if transactionsError}
      <div class="error-state"><p>{transactionsError}</p></div>
    {:else if profitTransactions.length === 0}
      <p class="no-data-message">No profit transaction data available.</p>
    {:else}
      <div class="list-container">
        <table class="items-table">
          <thead>
            <tr>
              <th>Sale ID</th>
              <th>Date</th>
              <th>Item Name</th>
              <th>Customer</th>
              <th>Qty Sold</th>
              <th>Purchase Price/Unit</th>
              <th>Selling Price/Unit</th>
              <th>Profit/Unit</th>
              <th>Total Profit</th>
            </tr>
          </thead>
          <tbody>
            {#each profitTransactions as tx (tx.sale_id)}
              <tr class="item-row">
                <td>{tx.sale_id}</td>
                <td>{formatDate(tx.sale_date)}</td>
                <td>{tx.itemname}</td>
                <td>{tx.custname}</td>
                <td>{tx.quantity_sold}</td>
                <td>{formatCurrency(tx.purchase_price_per_unit)}</td>
                <td>{formatCurrency(tx.selling_price_per_unit)}</td>
                <td>{formatCurrency(tx.profit_per_unit)}</td>
                <td class="profit-value"
                  >{formatCurrency(tx.total_profit_for_transaction)}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    box-sizing: border-box;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
      sans-serif;
  }
  .header {
    text-align: left;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }
  .title-text {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
  .summary-card {
    background-color: #f9f9f9;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e7e7e7;
  }
  .summary-card h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #555;
  }
  .summary-card .total-value {
    font-size: 2.2rem;
    font-weight: 700;
    color: #27ae60;
  }
  .grand-total-profit-card .total-value {
    color: #27ae60; /* Green for profit */
  }
  .section {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  .section-title {
    font-size: 1.4rem;
    color: #333;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  .list-container {
    overflow-x: auto;
    max-height: 400px;
  }
  .list-container.small-table {
    max-height: 300px;
  }
  .items-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
  }
  .items-table th,
  .items-table td {
    border: 1px solid #ddd;
    padding: 8px 10px;
    text-align: left;
    white-space: nowrap;
  }
  .items-table th {
    background-color: #f2f2f2;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .items-table td.profit-value {
    font-weight: bold;
    color: #27ae60;
  }
  .items-table td.loss-value {
    font-weight: bold;
    color: #c0392b;
  }
  .loading-state,
  .error-state {
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
  .chart-container-wrapper {
    height: 350px;
    width: 100%;
    margin-bottom: 1.5rem;
    position: relative;
  }
  .chart-container-wrapper canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
</style>
