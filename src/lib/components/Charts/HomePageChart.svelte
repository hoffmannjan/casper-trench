<script>
	import { onMount } from 'svelte';

	export let totalTransactions = 588675;
	export let data = [73625, 41625, 70724, 91525, 125246, 30123];
	export let timestamps = [
		1658918045000, 1658923545000, 1658927645000, 1658929545000, 1658933545000, 1658936545000
	];

	let options = {
		chart: {
			type: 'line',
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		stroke: {
			curve: 'smooth'
		},
		series: [
			{
				name: 'transactions',
				data
			}
		],
		xaxis: {
			categories: timestamps,
			type: 'datetime',
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
			labels: {
				formatter: (value) => {
					const monthNames = [
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December'
					];
					let date = new Date(value);
					return `${monthNames[date.getMonth()]} ${date.getDate()}`;
				},
				style: {
					fontSize: '0.83vw',
					colors: '#CFCFCF'
				},
				offsetX: 8
			},
			tickAmount: 3
		},
		yaxis: {
			labels: {
				formatter: (value) => {
					return `${Math.round(value / 1000)}k`;
				},
				style: {
					fontSize: '0.83vw',
					colors: ['#CFCFCF']
				},
				offsetX: -16
			},
			tickAmount: 2
		},
		colors: ['#099B91'],
		tooltip: {
			enabled: false
		},
		grid: {
			xaxis: {
				lines: {
					show: false
				},
			},
			yaxis: {
				lines: {
					show: false
				},
				min: 0
			}
		}
	};

	let chartElement;

	onMount(() => {
		let chart = new ApexCharts(chartElement, options);
		chart.render();
	});
</script>

<div class="container">
	<div class="title">
		<div class="label">TRANSACTIONS HISTORY in 14 DAYS</div>
		<div class="value">
			{totalTransactions.toLocaleString()}
		</div>
	</div>
	<div class="chart" bind:this={chartElement} />
</div>

<style lang="postcss">
	.container {
		@apply max-w-[25.24vw];
	}

	.title {
		@apply text-[clamp(12px,0.95vw,0.95vw)] text-white;
		@apply flex items-center justify-between;
	}

	.label {
		@apply font-medium;
	}

	.value {
		@apply text-[clamp(10px,0.83vw,0.83vw)];
	}
</style>
