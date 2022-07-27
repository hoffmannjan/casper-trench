<script>
	import { onMount } from 'svelte';

	export let type = 'line';
	export let series = [
		{
			name: 'sales',
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
		}
	];
	export let categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];

	let options = {
		chart: {
			type
		},
		series,
		xaxis: {
			categories
		}
	};

	let chartElement;

	onMount(() => {
		let chart = new ApexCharts(chartElement, options);
		chart.render();
	});
</script>

<div class="chart" bind:this={chartElement} />
