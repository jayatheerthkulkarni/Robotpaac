<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import axios from 'axios';

	let canvas;
	let chartInstance;

	let attr1 = [];
	let attr2 = [];

	let chartData = {
		labels: [],
		datasets: [{
			label: 'Items Sold',
			data: [],
			backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe', '#2ecc71']
		}]
	};

	export let type = 'pie';

	async function data_call() {
		try {
			const response = await axios.get('http://localhost:3000/api/data/top/five/batches');
			const data_fetched = response.data;
			attr1 = data_fetched.map(d => d.batchcode);
			attr2 = data_fetched.map(d => d.total_sold);

			chartData.labels = attr1;
			chartData.datasets[0].data = attr2;

			if (chartInstance) {
				chartInstance.destroy();
			}

			chartInstance = new Chart(canvas, {
				type,
				data: chartData,
				options: {
					responsive: true,
					maintainAspectRatio: false
				}
			});
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		data_call();
	});
</script>

<div class="parent">
	<div class="div1">
		<p class="main">Top Batches Sold</p>
	</div>
	<div class="div2">
		<canvas bind:this={canvas} width="400" height="400"></canvas>
	</div>
	<div class="div5">
		<p class="main1">Top Batches Sold: </p>
		{#each attr1 as batch, i}
			<p>{batch}: {attr2[i]}</p>
		{/each}
	</div>
</div>

<style>
	.parent {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(7, 1fr);
		gap: 0px;
	}

	.div1 {
		grid-column: span 4 / span 4;
	}

	.div2 {
		grid-column: span 4 / span 4;
		grid-row: span 6 / span 6;
		grid-column-start: 1;
		grid-row-start: 2;
	}

	.div2 canvas {
		width: 100%;
		height: 100%;
	}

	.div5 {
		padding-left: 0.5rem;
		background-color: rgb(255, 255, 255);
		position: relative;
		grid-row: span 7 / span 7;
		grid-column-start: 5;
		grid-row-start: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}

	.main {
		margin-left: 1rem;
		font-size: 1.5rem;
	}
	.main1 {
		font-size: 1.5rem;
	}
</style>
