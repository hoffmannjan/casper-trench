<script lang="ts">
	let height = 0;
	let width = 0;
	let chart;
	let gradient: CanvasGradient;
	let ctx: HTMLCanvasElement;

	export let validatorWeights: [{ x?: Date; y?: number }];
	export let isLoading = true;

	$: if (!isLoading) {
		validatorWeights?.length > 0 && renderChart(validatorWeights);
	}

	const chartGradient = (ctx, chartArea) => {
		const chartWidth = chartArea.right - chartArea.left;
		const chartHeight = chartArea.bottom - chartArea.to;
		if (!gradient || width !== chartWidth || height !== chartHeight) {
			width = chartWidth;
			height = chartHeight;
			gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
			gradient.addColorStop(0, '#099B91');
			gradient.addColorStop(1, '#1737A3');
			renderChart;
		}
		return gradient;
	};

	const renderChart = (chartData: [{ x?: Date; y?: number }]) => {
		chart = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						label: 'Staked',
						data: chartData,
						backgroundColor: (context) => {
							const chart = context.chart;
							const { ctx, chartArea } = chart;

							if (!chartArea) {
								return;
							}
							return chartGradient(ctx, chartArea);
						},
						borderColor: 'transparent',
						borderWidth: 2,
						fill: 'start',
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
	<div class="title">Validators Weights</div>
	<div class="legend">
		<div class="color" />
		<div class="text">Total Staked</div>
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
		@apply flex gap-[clamp(4px,0.6vw,0.6vw)] items-center;
		@apply text-[clamp(12px,0.95vw,0.95vw)] text-color-table-header;
	}

	.color {
		@apply bg-gradient-to-b from-color-hover-footer-link to-color-chart-blue bg-opacity-80;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}
</style>
