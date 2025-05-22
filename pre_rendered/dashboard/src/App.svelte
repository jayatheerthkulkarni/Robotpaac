<script>
	import Navbar from "./lib/navbar.svelte";
	import Topitems from "./lib/topitems.svelte";
	import Expireditems from "./lib/expireditems.svelte";
	import Totalitembought from "./lib/totalitembought.svelte";
	import Totalitemsold from "./lib/totalitemsold.svelte";
	import Totalbatches from "./lib/totalbatches.svelte";
	import Lowstock from "./lib/lowstock.svelte";
	import Profits from "./lib/profits.svelte";
	import Topcustomers from "./lib/topcustomers.svelte";
	import Topsuppliers from "./lib/topsuppliers.svelte";
	let ViewVar = $state(Topitems);
	let nameChange = (str) => {
		ViewVar = str;
	};
	let onComponent = (str) => {
		if(str == ViewVar) {
			return "yes";
		}
		else {
			return "no";
		}
	};
</script>

<Navbar/> 


<div class="parent">
	<div class="div1">
		<p class="text-internal">Dashboard</p>
	</div>
	<div class="div2">
		<div class="option">
			<p class="text-internal">Select</p>
			<div class="selector">
				<button class={onComponent(Topitems)} onclick={() => nameChange(Topitems)}>
					Top Selling items
				</button>
				<button class={onComponent(Expireditems)} onclick={() => nameChange(Expireditems)}>
					Expired items
				</button>
				<button class={onComponent(Totalitembought)} onclick={() => nameChange(Totalitembought)}>
					Total Items Bought
				</button>
				<button class={onComponent(Totalitemsold)} onclick={() => nameChange(Totalitemsold)}>
					Total Items Sold
				</button>
				<button class={onComponent(Totalbatches)} onclick={() => nameChange(Totalbatches)}>
					Batch Details
				</button>
				<button class={onComponent(Lowstock)} onclick={() => nameChange(Lowstock)}>
					Low Stock Items
				</button>
				<button class={onComponent(Profits)} onclick={() => nameChange(Profits)}>
					Profits
				</button>
				<button class={onComponent(Topcustomers)} onclick={() => nameChange(Topcustomers)}>
					Top Customers
				</button>
				<button class={onComponent(Topsuppliers)} onclick={() => nameChange(Topsuppliers)}>
					Top Suppliers
				</button>
			</div>			
		</div>
	</div>
	<div class="div3">
		<div  class="option">
			
		</div>
	</div>
	<div class="div4">
		<div id="op4" class="option">
			<ViewVar/>
		</div>
	</div>
</div>

<style>
	.parent {
		height: calc(100vh - 60px);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(12, 1fr);
		gap: 0px;
	}
	
	.div1 {
		display: flex;
		grid-column: span 2 / span 2;
		align-items: center;
		font-size: 2rem;
	}

	.div2 {
		display: flex;
		grid-column: span 2 / span 2;
		grid-row: span 11 / span 11;
		grid-column-start: 1;
		grid-row-start: 2;
		justify-content: center;
		align-items: center;
	}

	.div3 {
		display: flex;
		grid-column: span 3 / span 3;
		grid-row: span 3 / span 3;
		grid-column-start: 3;
		grid-row-start: 10;
		justify-content: center;
	}

	.div4 {
		display: flex;
		grid-column: span 3 / span 3;
		grid-row: span 9 / span 9;
		grid-column-start: 3;
		grid-row-start: 1;
		justify-content: center;
	}
		
	.option {
		width: 90%;
		height: 90%;
		background-color: rgb(234, 234, 234);
		border-radius: 10px;
		box-shadow: inset;
		overflow: scroll;
		scroll-behavior: smooth;
	}

	.text-internal {
		margin-left: 2rem;
		font-size: 1.4rem;
	}

	#op4 {
		margin-top: 2rem;
	}

	.selector {
		display: flex;
		flex-direction: column;
		gap: 0.75rem; 
		padding: 1.5rem; 
		border-radius: 12px;
	}

	.selector button {
		display: block;
		width: 100%;
		margin: 0;
		text-align: left;
		font: inherit;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		
		padding: 1rem 1.25rem; 
		background: linear-gradient(135deg, #fcfcfc, #f6f6f6); 
		border: 1px solid #eaeaea; 
		border-radius: 8px; 
		font-size: 1.05rem; 
		color: #333;
		cursor: pointer;
		transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08);
	}

	.selector button:hover {
		background: linear-gradient(135deg, #f8f8f8, #efefef); 
		transform: translateY(-3px); 
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.1); 
	}

	.selector button:active { 
		transform: translateY(-1px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.09);
	}

	.selector button.yes {
		background: linear-gradient(135deg, #2f2f2f, #1e1e1e); 
		color: #f7f7f7; 
		font-weight: bold;
		box-shadow: 0 7px 20px rgba(0, 0, 0, 0.22); 
	}

	.selector button.yes:hover {
		background: linear-gradient(135deg, #3c3c3c, #2b2b2b); 
		transform: translateY(-3px); 
		box-shadow: 0 9px 25px rgba(0, 0, 0, 0.28);
	}

	.selector button:focus-visible {
		outline: 2px solid royalblue; 
		outline-offset: 3px;
	}
</style>