<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';
  import axios from 'axios';

  let canvasElement = $state(null);
  let chartInstance = $state(null);
  let grandTotalBought = $state(0);
  let isLoading = $state(true);
  let errorMessage = $state('');

  let chartConfig = $state({
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Items Bought Over Time',
          data: [],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            tooltipFormat: 'MMM dd, yyyy',
            displayFormats: {
              day: 'MMM dd',
            },
          },
          title: {
            display: true,
            text: 'Date of Purchase',
          },
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantity Bought',
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.3)',
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y.toLocaleString() + ' items';
              }
              return label;
            },
          },
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
    },
  });

  async function fetchData() {
    isLoading = true;
    errorMessage = '';
    try {
      const response = await axios.get(
        'http://localhost:3000/api/data/total/items/bought',
      );
      const data = response.data;

      grandTotalBought = data.grandTotal || 0;

      const timeSeriesChartData = data.timeSeries.map((d) => ({
        x: new Date(d.datepurchase),
        y: d.total_bought_on_date,
      }));

      chartConfig.data.datasets[0].data = timeSeriesChartData;
    } catch (error) {
      console.error('Error fetching total items bought data:', error);
      errorMessage = 'Failed to load data. Please try again later.';
      grandTotalBought = 0;
      chartConfig.data.datasets[0].data = [];
    } finally {
      isLoading = false;
    }
  }

  function createOrUpdateChart() {
    if (canvasElement) {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }

      if (chartConfig.data.datasets[0].data.length > 0) {
        const configForChartJS = {
          ...chartConfig,
          data: {
            ...chartConfig.data,
            datasets: chartConfig.data.datasets.map((dataset) => ({
              ...dataset,
              data: [...dataset.data],
            })),
          },
        };
        chartInstance = new Chart(canvasElement, configForChartJS);
      }
    }
  }

  onMount(() => {
    fetchData();
  });

  $effect(() => {
    if (!isLoading && canvasElement) {
      createOrUpdateChart();
    }
  });
</script>

<div class="container">
  <div class="header">
    <p class="title-text">Total Items Bought Analysis</p>
  </div>

  {#if isLoading}
    <div class="loading-state">
      <p>Loading data...</p>
    </div>
  {:else if errorMessage}
    <div class="error-state">
      <p>{errorMessage}</p>
    </div>
  {:else}
    <div class="total-summary-card">
      <p class="total-label">Grand Total Items Purchased</p>
      <p class="total-value">{grandTotalBought.toLocaleString()}</p>
    </div>

    <div class="chart-wrapper">
      {#if chartConfig.data.datasets[0].data.length > 0}
        <canvas bind:this={canvasElement}></canvas>
      {:else}
        <p class="no-data-message">
          No purchase data available to display chart.
        </p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0;
    color: #333;
  }

  .total-summary-card {
    background-color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8e8e8;
  }

  .total-label {
    font-size: 0.9rem;
    color: #666;
    margin: 0 0 0.25rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .total-value {
    font-size: 2rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
  }

  .chart-wrapper {
    flex-grow: 1;
    position: relative;
    width: 90%;
    min-height: 300px;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    border: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-state,
  .error-state {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-size: 1.2rem;
    color: #555;
  }
  .error-state p {
    color: #c0392b;
    background-color: #fceded;
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    border: 1px solid #f5c6cb;
  }

  .no-data-message {
    color: #777;
    font-size: 1rem;
  }

  .chart-wrapper canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
</style>
