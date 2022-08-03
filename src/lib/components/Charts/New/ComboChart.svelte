<script lang="ts">
	import PriceLegendIcon from '$lib/icons/PriceLegendIcon.svelte';

	let ctx: HTMLCanvasElement;
	let chart;

	export let priceData: [{ x?: Date; y?: number }];
	export let volumeData: [{ x?: Date; y?: number }];
	export let isLoading = true;

	$: if (!isLoading) {
		priceData?.length > 0 && volumeData?.length > 0 && renderChart(volumeData, priceData);
	}

	const renderChart = (
		chartData1: [{ x?: Date; y?: number }],
		chartData2: [{ x?: Date; y?: number }]
	) => {
		chart = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						label: 'Volume',
						data: chartData1,
						backgroundColor: '#0021A5',
						borderColor: '#0021A5',
						type: 'bar',
						borderWidth: 2,
						order: 1,
						yAxisID: 'y'
					},
					{
						label: 'Prices',
						data: chartData2,
						backgroundColor: '#099B91',
						borderColor: '#099B91',
						borderWidth: 2,
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
				interaction: {
					mode: 'index',
					intersect: false
				},
				scales: {
					x: {
						adapters: {
							date: {}
						},
						type: 'time',
						time: {
							unit: 'day'
						},
						grid: {
							display: false
						},
						ticks: {
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
					},
					tooltip: {
						enabled: false,
						position: 'nearest'
						// external: externalTooltipHandler
					},
					zoom: {
						pan: {
							enabled: true,
							mode: 'xy',
							threshold: 5
						},
						zoom: {
							wheel: {
								enabled: true
							},
							drag: {
								enabled: false
							},
							pinch: {
								enabled: true
							},
							mode: 'xy'
						}
					}
				}
			}
		});
	};
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
	<button
		type="button"
		on:click={() => {
			chart && chart.zoom(1.05);
		}}>Zoom+</button
	>
	<button
		type="button"
		on:click={() => {
			chart && chart.zoom(0.95);
		}}>Zoom-</button
	>
	<button
		type="button"
		on:click={() => {
			if (chart) {
				// Disable panning
				chart.options.plugins.zoom.pan.enabled = false;
				// Enable Drag zoom
				chart.options.plugins.zoom.zoom.drag.enabled = true;
				chart.update();
			}
		}}>Drag Zoom</button
	>
	<button
		type="button"
		on:click={() => {
			if (chart) {
				// Disable drag zoom
				chart.options.plugins.zoom.zoom.drag.enabled = false;
				// Enable panning
				chart.options.plugins.zoom.pan.enabled = true;
				chart.update();
			}
		}}>Pan</button
	>

	<button
		type="button"
		on:click={() => {
			chart && chart.resetZoom();
		}}>Reset Zoom</button
	>
	<div class="chart">
		<canvas bind:this={ctx} />
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
