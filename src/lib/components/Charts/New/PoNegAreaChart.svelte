<script>
	import PriceLegendIcon from '$lib/icons/PriceLegendIcon.svelte';

	import Chart from 'chart.js/auto';

	import { onMount } from 'svelte';

	export let delegatedData;
	export let unbondedData;

	let chartElement;

	onMount(() => {
		if (window) {
			const myChart = new Chart(chartElement.getContext('2d'), {
				type: 'line',
				data: {
					datasets: [
						{
							label: 'Delegated',
							data: delegatedData,
							backgroundColor: "#0021A5",
							borderWidth: 0,
							fill: 'origin',
							pointStyle: 'circle',
							pointRadius: 0
						},
                        {
							label: 'Unbonded',
							data: unbondedData,
							backgroundColor: "#099B91",
							borderWidth: 0,
							fill: 'origin',
							pointStyle: 'circle',
							pointRadius: 0
						}
					]
				},
				options: {
					responsive: true,
					scales: {
						x: {
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
	<div class="title">Staked Per Era</div>
	<div class="legend">
		<div class="delegated">
			<div class="color" />
			<div class="text">Delegated</div>
		</div>
		<div class="unbonded">
			<div class="color" />
			<div class="text">Unbonded</div>
		</div>
	</div>
	<div class="chart">
		<canvas bind:this={chartElement} />
	</div>
</div>

<style lang="postcss">
	.chart {
		@apply w-full;
	}

	.title {
		@apply text-[clamp(16px,1.43vw,1.43vw)] font-bold text-color-table-header;
		@apply flex items-center justify-between;
	}

	.container {
		@apply min-w-max;
		@apply flex flex-col items-center justify-center;
		@apply my-[clamp(16px,0.95vw,0.95vw)];
	}

	.legend {
		@apply flex gap-[clamp(24px,1.79vw,1.79vw)] items-center;
		@apply text-[clamp(12px,0.95vw,0.95vw)] text-color-table-header;
	}

	.legend > div {
		@apply flex gap-[clamp(4px,0.6vw,0.6vw)] items-center;
	}

	.color {
		@apply bg-color-hover-footer-link;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}

	.delegated > .color {
		@apply bg-color-arcadia-blue;
	}
</style>