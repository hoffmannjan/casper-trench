<script>
	import PriceLegendIcon from '$lib/icons/PriceLegendIcon.svelte';

	import Chart from 'chart.js/auto';

	import { onMount } from 'svelte';

	export let priceData;
	export let volumeData;

	let chartElement;

	onMount(() => {
		if (window) {
			const myChart = new Chart(chartElement.getContext('2d'), {
				type: 'line',
				data: {
					datasets: [
						{
							label: 'Volume',
							data: volumeData,
							backgroundColor: '#0021A5',
							borderColor: '#0021A5',
							type: 'bar',
							borderWidth: 1,
							order: 1,
							yAxisID: 'y'
						},
						{
							label: 'Prices',
							data: priceData,
							backgroundColor: '#099B91',
							borderColor: '#099B91',
							borderWidth: 1,
							order: 0,
							yAxisID: 'y1',
							stepped: true,
							pointStyle: 'circle',
							pointRadius: 0
						}
					]
				},
				options: {
					responsive: true,
					scales: {
						x: {
							stacked: true,
							grid: {
								display: false
							},
							ticks: {
								callback: function (val, index) {
									const value = typeof val === 'number' ? this.getLabelForValue(val) : 0;
									const date = new Date(value);
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

									return `${date.getDate()} ${monthNames[date.getMonth()]}`;
								},
								autoSkip: true,
								maxTicksLimit: 20,
								maxRotation: 0,
								minRotation: 0
							}
						},
						y: {
							type: 'linear',
							display: true,
							position: 'left',
							beginAtZero: false,
							grid: {
								drawOnChartArea: true
							}
						},
						y1: {
							type: 'linear',
							display: true,
							position: 'right',
							beginAtZero: false,
							grid: {
								drawOnChartArea: true
							}
						}
					},
					plugins: {
						legend: {
							display: false
						}
					}
				}
			});
		}
	});
</script>

<div class="container">
	<div class="title">Market Price (CSPR/USD)</div>
	<div class="legend">
		<div class="price">
			<div class="icon">
				<PriceLegendIcon />
			</div>
			<div class="text">Price</div>
		</div>
		<div class="volume">
			<div class="color" />
			<div class="text">Volume</div>
		</div>
	</div>
	<div class="chart">
		<canvas bind:this={chartElement} />
	</div>
</div>

<style lang="postcss">
	.title {
		@apply text-[clamp(16px,1.43vw,1.43vw)] font-bold text-color-table-header;
		@apply flex items-center justify-between;
	}

	.container {
		@apply min-w-max;
		@apply flex flex-col items-center justify-center;
		@apply my-[clamp(16px,0.95vw,0.95vw)];
	}

	.chart {
		@apply w-full;
	}

	.legend {
		@apply flex gap-[clamp(24px,1.79vw,1.79vw)] items-center;
		@apply text-[clamp(12px,0.95vw,0.95vw)] text-color-table-header;
	}

	.legend > div {
		@apply flex gap-[clamp(4px,0.6vw,0.6vw)] items-center;
	}

	.color {
		@apply bg-color-arcadia-blue;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}

	.icon {
		@apply w-[clamp(16px,1.19vw,1.19vw)];
	}
</style>
