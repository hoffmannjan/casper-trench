<script>
	import PriceLegendIcon from '$lib/icons/PriceLegendIcon.svelte';

	import Chart from 'chart.js/auto';

	import { onMount } from 'svelte';

	export let validatorWeights;

	let chartElement;

	onMount(() => {
		if (window) {
			const gradient = chartElement.getContext('2d').createLinearGradient(0, 0, 0, 1000);
			gradient.addColorStop(0, '#099B91');
			gradient.addColorStop(1, '#1737A3');

			const myChart = new Chart(chartElement.getContext('2d'), {
				type: 'line',
				data: {
					datasets: [
						{
							label: 'Staked',
							data: validatorWeights,
							backgroundColor: gradient,
							borderWidth: 0,
							fill: 'start',
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
						}
					},
					plugins: {
						legend: {
							display: false
						},
						filler: {
							propagate: false
						}
					}
				}
			});
		}
	});
</script>

<div class="container">
	<div class="title">Validators Weights</div>
	<div class="legend">
		<div class="color" />
		<div class="text">Total Staked</div>
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
		@apply flex gap-[clamp(4px,0.6vw,0.6vw)] items-center;
		@apply text-[clamp(12px,0.95vw,0.95vw)] text-color-table-header;
	}

	.color {
		@apply bg-gradient-to-b from-color-hover-footer-link to-color-chart-blue bg-opacity-80;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}
</style>
