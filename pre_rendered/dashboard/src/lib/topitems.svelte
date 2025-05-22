<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';


</script>

<div class="parent">
	<div class="div1">
		<p class="main">Top Items sold</p>
	</div>
	<div class="div2">

	</div>
	<div class="div5">5</div>
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

	/* .div2 canvas {
		width: 100%;
		height: 100%;
	} */

	.div5 {
		grid-row: span 7 / span 7;
		grid-column-start: 5;
		grid-row-start: 1;
	}

	.main {
		margin-left: 1rem;
		font-size: 1.5rem;
	}
</style>
