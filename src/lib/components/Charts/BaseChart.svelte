<script>
	import { onMount } from 'svelte';

	export let type = 'line';
	export let colors = ['#099B91'];
	export let series = [
		{
			name: 'transactions',
			data: [73256, 41625, 70783, 91885, 125634, 30237]
		}
	];
	export let categories = [1658918045, 1658923545, 1658927645, 1658929545, 1658933545, 1658936545];
	export let xaxis = {
		categories,
		type: 'datetime',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
	};
	export let yaxis = {};
	export let stroke = {
		curve: 'smooth'
	};
	export let toolbar = {
		show: false
	};
	export let zoom = {
		enabled: false
	};
	export let tooltip = {
		enabled: false
	};
	export let grid = {
		xaxis: {
			lines: {
				show: false
			}
		},
		yaxis: {
			lines: {
				show: false
			},
            min: 0,
		}
	};

	let options = {
		chart: {
			type,
			toolbar,
			zoom
		},
		stroke,
		series,
		xaxis,
		yaxis,
		colors,
		tooltip,
		grid
	};

	let chartElement;

	onMount(() => {
		let chart = new ApexCharts(chartElement, options);
		chart.render();
	});
</script>

<div class="chart" bind:this={chartElement} />