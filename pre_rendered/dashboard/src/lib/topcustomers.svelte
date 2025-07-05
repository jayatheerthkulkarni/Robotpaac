<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Chart from 'chart.js/auto';

  let topCustomers = $state([]);
  let isLoading = $state(true);
  let errorMessage = $state('');
  let chartCanvas;
  let chartInstance = $state(null);
  let displayMetric = $state('total_profit_from_customer');
  let limit = $state(5);
  let selectedYear = $state('all');
  let availableYears = $state([]);

  let allRawCustomerData = $state([]);

  async function fetchData() {
    isLoading = true;
    errorMessage = '';
    try {
      const response = await axios.get(
        `http://localhost:3000/api/data/top/customers`,
      );
      allRawCustomerData = response.data;
      processCustomerData(allRawCustomerData);
    } catch (error) {
      console.error('Error fetching top customers:', error);
      errorMessage = 'Failed to load top customers.';
      topCustomers = [];
      availableYears = [];
      allRawCustomerData = [];
    } finally {
      isLoading = false;
    }
  }

  function processCustomerData(rawData) {
    const yearsSet = new Set();
    const yearlyAggregatedData = {};
    const allYearsAggregatedData = {};

    rawData.forEach((item) => {
      const year = item.sale_year;
      if (year) {
        yearsSet.add(year);
      }

      if (!allYearsAggregatedData[item.custname]) {
        allYearsAggregatedData[item.custname] = {
          custcode: item.custcode,
          custname: item.custname,
          total_orders: 0,
          total_quantity_purchased: 0,
          total_revenue_from_customer: 0,
          total_profit_from_customer: 0,
        };
      }
      allYearsAggregatedData[item.custname].total_orders += item.total_orders;
      allYearsAggregatedData[item.custname].total_quantity_purchased +=
        item.total_quantity_purchased;
      allYearsAggregatedData[item.custname].total_revenue_from_customer +=
        item.total_revenue_from_customer;
      allYearsAggregatedData[item.custname].total_profit_from_customer +=
        item.total_profit_from_customer;

      if (year) {
        if (!yearlyAggregatedData[year]) {
          yearlyAggregatedData[year] = {};
        }
        if (!yearlyAggregatedData[year][item.custname]) {
          yearlyAggregatedData[year][item.custname] = {
            custcode: item.custcode,
            custname: item.custname,
            total_orders: 0,
            total_quantity_purchased: 0,
            total_revenue_from_customer: 0,
            total_profit_from_customer: 0,
          };
        }
        yearlyAggregatedData[year][item.custname].total_orders +=
          item.total_orders;
        yearlyAggregatedData[year][item.custname].total_quantity_purchased +=
          item.total_quantity_purchased;
        yearlyAggregatedData[year][item.custname].total_revenue_from_customer +=
          item.total_revenue_from_customer;
        yearlyAggregatedData[year][item.custname].total_profit_from_customer +=
          item.total_profit_from_customer;
      }
    });

    availableYears = Array.from(yearsSet).sort((a, b) => b - a);

    let currentCustomers = [];
    if (selectedYear === 'all') {
      currentCustomers = Object.values(allYearsAggregatedData);
    } else {
      const yearStr = String(selectedYear);
      if (yearlyAggregatedData[yearStr]) {
        currentCustomers = Object.values(yearlyAggregatedData[yearStr]);
      }
    }

    topCustomers = currentCustomers
      .sort((a, b) => b[displayMetric] - a[displayMetric])
      .slice(0, limit);
  }

  function getMetricLabel() {
    if (displayMetric === 'total_profit_from_customer') return 'Total Profit';
    if (displayMetric === 'total_revenue_from_customer') return 'Total Revenue';
    if (displayMetric === 'total_quantity_purchased')
      return 'Total Quantity Purchased';
    if (displayMetric === 'total_orders') return 'Total Orders';
    return 'Value';
  }

  function createOrUpdateChart() {
    if (chartCanvas && topCustomers.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
      const labels = topCustomers.map((c) => c.custname);
      const data = topCustomers.map((c) => c[displayMetric]);

      chartInstance = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: getMetricLabel(),
              data: data,
              backgroundColor: 'rgba(153, 102, 255, 0.7)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
              title: { display: true, text: getMetricLabel() },
            },
            y: { title: { display: true, text: 'Customer' } },
          },
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: `Top ${limit} Customers by ${getMetricLabel()} (${selectedYear === 'all' ? 'All Years' : selectedYear})`,
            },
          },
        },
      });
    } else if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
  }

  function formatCurrency(value) {
    if (value === null || value === undefined) return 'N/A';
    return value.toLocaleString(undefined, {
      style: 'currency',
      currency: 'INR',
    });
  }

  onMount(() => {
    fetchData();
  });

  $effect(() => {
    if (!isLoading && allRawCustomerData.length > 0) {
      processCustomerData(allRawCustomerData);
      createOrUpdateChart();
    } else if (!isLoading && allRawCustomerData.length === 0) {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    }
  });
</script>

<div class="container">
  <div class="header">
    <p class="title-text">Top Customers</p>
    <div class="controls">
      <label for="customer-metric-select">Display by:</label>
      <select id="customer-metric-select" bind:value={displayMetric}>
        <option value="total_profit_from_customer">Total Profit</option>
        <option value="total_revenue_from_customer">Total Revenue</option>
        <option value="total_quantity_purchased"
          >Total Quantity Purchased</option
        >
        <option value="total_orders">Total Orders</option>
      </select>
      <label for="customer-limit-select">Show Top:</label>
      <select id="customer-limit-select" bind:value={limit}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      <label for="year-select">Year:</label>
      <select id="year-select" bind:value={selectedYear}>
        <option value="all">All Years</option>
        {#each availableYears as year}
          <option value={year}>{year}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if isLoading}
    <div class="loading-state"><p>Loading top customers...</p></div>
  {:else if errorMessage}
    <div class="error-state"><p>{errorMessage}</p></div>
  {:else if topCustomers.length === 0}
    <p class="no-data-message">
      No customer data available for {selectedYear === 'all'
        ? 'all years'
        : selectedYear}.
    </p>
  {:else}
    <div class="chart-container-wrapper">
      <canvas bind:this={chartCanvas}></canvas>
    </div>
    <div class="list-container">
      <table class="items-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Orders</th>
            <th>Total Quantity Purchased</th>
            <th>Total Revenue</th>
            <th>Total Profit</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {#each topCustomers as customer (customer.custcode)}
            <tr>
              <td>{customer.custname}</td>
              <td>{customer.total_orders}</td>
              <td>{customer.total_quantity_purchased.toLocaleString()}</td>
              <td>{formatCurrency(customer.total_revenue_from_customer)}</td>
              <td
                class:profit-value={customer.total_profit_from_customer > 0}
                class:loss-value={customer.total_profit_from_customer < 0}
              >
                {formatCurrency(customer.total_profit_from_customer)}
              </td>
              <td>{selectedYear === 'all' ? 'All' : selectedYear}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    box-sizing: border-box;
    height: 100%;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
      sans-serif;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }
  .title-text {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .controls label {
    font-size: 0.9rem;
    color: #555;
  }
  .controls select {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .chart-container-wrapper {
    height: 300px;
    width: 100%;
    position: relative;
    margin-bottom: 1rem;
  }
  .chart-container-wrapper canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
  .list-container {
    overflow-x: auto;
    flex-grow: 1;
  }
  .items-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }
  .items-table th,
  .items-table td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
  }
  .items-table th {
    background-color: #f2f2f2;
    font-weight: 600;
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
</style>
