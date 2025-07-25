<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Chart from 'chart.js/auto';

  let topSuppliers = $state([]);
  let isLoading = $state(true);
  let errorMessage = $state('');
  let chartCanvas;
  let chartInstance = $state(null);
  let displayMetric = $state('total_purchase_value');
  let limit = $state(5);
  let selectedYear = $state('all');
  let availableYears = $state([]);

  let allRawSupplierData = $state([]);

  async function fetchData() {
    isLoading = true;
    errorMessage = '';
    try {
      const response = await axios.get(
        `http://localhost:3000/api/data/top/suppliers`,
      );
      allRawSupplierData = response.data;
      processSupplierData(allRawSupplierData);
    } catch (error) {
      console.error('Error fetching top suppliers:', error);
      errorMessage = 'Failed to load top suppliers.';
      topSuppliers = [];
      availableYears = [];
      allRawSupplierData = [];
    } finally {
      isLoading = false;
    }
  }

  function processSupplierData(rawData) {
    const yearsSet = new Set();
    const yearlyAggregatedData = {};
    const allYearsAggregatedData = {};

    rawData.forEach((item) => {
      const year = item.purchase_year;
      yearsSet.add(year);

      if (!allYearsAggregatedData[item.suppname]) {
        allYearsAggregatedData[item.suppname] = {
          suppcode: item.suppcode,
          suppname: item.suppname,
          total_purchase_value: 0,
          total_quantity_supplied: 0,
          total_batches_supplied: 0,
        };
      }
      allYearsAggregatedData[item.suppname].total_purchase_value +=
        item.total_purchase_value;
      allYearsAggregatedData[item.suppname].total_quantity_supplied +=
        item.total_quantity_supplied;
      allYearsAggregatedData[item.suppname].total_batches_supplied +=
        item.total_batches_supplied;

      if (!yearlyAggregatedData[year]) {
        yearlyAggregatedData[year] = {};
      }
      if (!yearlyAggregatedData[year][item.suppname]) {
        yearlyAggregatedData[year][item.suppname] = {
          suppcode: item.suppcode,
          suppname: item.suppname,
          total_purchase_value: 0,
          total_quantity_supplied: 0,
          total_batches_supplied: 0,
        };
      }
      yearlyAggregatedData[year][item.suppname].total_purchase_value +=
        item.total_purchase_value;
      yearlyAggregatedData[year][item.suppname].total_quantity_supplied +=
        item.total_quantity_supplied;
      yearlyAggregatedData[year][item.suppname].total_batches_supplied +=
        item.total_batches_supplied;
    });

    availableYears = Array.from(yearsSet).sort((a, b) => b - a);

    let currentSuppliers = [];
    if (selectedYear === 'all') {
      currentSuppliers = Object.values(allYearsAggregatedData);
    } else {
      const yearStr = String(selectedYear);
      if (yearlyAggregatedData[yearStr]) {
        currentSuppliers = Object.values(yearlyAggregatedData[yearStr]);
      }
    }

    topSuppliers = currentSuppliers
      .sort((a, b) => b[displayMetric] - a[displayMetric])
      .slice(0, limit);
  }

  function getMetricLabel() {
    if (displayMetric === 'total_purchase_value') return 'Total Purchase Value';
    if (displayMetric === 'total_quantity_supplied')
      return 'Total Quantity Supplied';
    if (displayMetric === 'total_batches_supplied')
      return 'Total Batches Supplied';
    return 'Value';
  }

  function createOrUpdateChart() {
    if (chartCanvas && topSuppliers.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
      const labels = topSuppliers.map((s) => s.suppname);
      const data = topSuppliers.map((s) => s[displayMetric]);

      chartInstance = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: getMetricLabel(),
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
              borderColor: 'rgba(75, 192, 192, 1)',
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
            y: { title: { display: true, text: 'Supplier' } },
          },
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: `Top ${limit} Suppliers by ${getMetricLabel()} (${selectedYear === 'all' ? 'All Years' : selectedYear})`,
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
    if (!isLoading && allRawSupplierData.length > 0) {
      processSupplierData(allRawSupplierData);
      createOrUpdateChart();
    } else if (!isLoading && allRawSupplierData.length === 0) {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    }
  });
</script>

<div class="container">
  <div class="header">
    <p class="title-text">Top Suppliers</p>
    <div class="controls">
      <label for="supplier-metric-select">Display by:</label>
      <select id="supplier-metric-select" bind:value={displayMetric}>
        <option value="total_purchase_value">Total Purchase Value</option>
        <option value="total_quantity_supplied">Total Quantity Supplied</option>
        <option value="total_batches_supplied">Total Batches Supplied</option>
      </select>
      <label for="supplier-limit-select">Show Top:</label>
      <select id="supplier-limit-select" bind:value={limit}>
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
    <div class="loading-state"><p>Loading top suppliers...</p></div>
  {:else if errorMessage}
    <div class="error-state"><p>{errorMessage}</p></div>
  {:else if topSuppliers.length === 0}
    <p class="no-data-message">
      No supplier data available for {selectedYear === 'all'
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
            <th>Supplier Name</th>
            <th>Total Batches</th>
            <th>Total Quantity Supplied</th>
            <th>Total Purchase Value</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {#each topSuppliers as supplier (supplier.suppcode)}
            <tr>
              <td>{supplier.suppname}</td>
              <td>{supplier.total_batches_supplied}</td>
              <td>{supplier.total_quantity_supplied.toLocaleString()}</td>
              <td>{formatCurrency(supplier.total_purchase_value)}</td>
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
