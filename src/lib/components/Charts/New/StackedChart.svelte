<script lang="ts">
	import ChartToolbar from "./ChartToolbar.svelte";

	let ctx: HTMLCanvasElement;
	let chart;

	export let transfersData: [{ x?: Date; y?: number }];
	export let transactionsData: [{ x?: Date; y?: number }];
	export let isLoading = true;

	$: if (!isLoading) {
		transfersData?.length > 0 &&
			transactionsData?.length > 0 &&
			renderChart(transfersData, transactionsData);
	}

	// const getOrCreateTooltip = (chart) => {
	// 	let tooltipEl = chart.canvas.parentNode.querySelector('div');

	// 	if (!tooltipEl) {
	// 		tooltipEl = document.createElement('div');

	// 		tooltipEl.style.pointerEvents = 'none';
	// 		tooltipEl.style.position = 'absolute';
	// 		tooltipEl.style.transform = 'translate(1%, 40%)';
	// 		tooltipEl.style.transition = 'all .1s ease';
	// 		tooltipEl.style.columnGap = '1vw';
	// 		const labelWrapper = document.createElement('div');
	// 		labelWrapper.style.minWidth = 'max-content';
	// 		labelWrapper.style.display = 'flex';
	// 		labelWrapper.style.alignItems = 'center';
	// 		labelWrapper.style.gap = '1vw';
	// 		labelWrapper.style.borderRadius = '0.27vw';
	// 		labelWrapper.style.paddingTop = '0.5vw';
	// 		labelWrapper.style.paddingRight = '1.2vw';
	// 		labelWrapper.style.paddingBottom = '0.5vw';
	// 		labelWrapper.style.paddingLeft = '1.2vw';
	// 		labelWrapper.style.color = 'black';
	// 		labelWrapper.style.marginLeft = '1.5vw';
	// 		labelWrapper.style.backdropFilter = 'blur(20px)';
	// 		labelWrapper.style.opacity = 1;
	// 		labelWrapper.style.background = 'white';
	// 		labelWrapper.style.borderWidth = '0.2vw';
	// 		labelWrapper.style.borderColor = '#8383830F';

	// 		const bullet = document.createElement('div');
	// 		bullet.style.height = '0.75vw';
	// 		bullet.style.width = '0.75vw';
	// 		bullet.style.backgroundColor = '#1735A3';
	// 		bullet.style.borderRadius = '50%';
	// 		labelWrapper.appendChild(bullet);

	// 		const pointWrapper = document.createElement('div');
	// 		pointWrapper.style.width = '1.5vw';
	// 		pointWrapper.style.height = '1.5vw';
	// 		pointWrapper.style.borderRadius = '50%';
	// 		pointWrapper.style.background = '#8383832F';
	// 		pointWrapper.style.marginBottom = '1vw';
	// 		pointWrapper.style.display = 'flex';
	// 		pointWrapper.style.justifyContent = 'center';
	// 		pointWrapper.style.alignItems = 'center';

	// 		const point = document.createElement('div');
	// 		point.style.width = '1vw';
	// 		point.style.height = '1vw';
	// 		point.style.borderRadius = '50%';
	// 		point.style.background = '#838383';
	// 		point.style.borderWidth = '0.25vw';
	// 		point.style.borderColor = 'white';

	// 		pointWrapper.appendChild(point);
	// 		tooltipEl.appendChild(pointWrapper);
	// 		tooltipEl.appendChild(labelWrapper);

	// 		chart.canvas.parentNode.appendChild(tooltipEl);
	// 	}

	// 	return tooltipEl;
	// };

	// const externalTooltipHandler = (context) => {
	// 	const { chart, tooltip } = context;

	// 	const tooltipEl = getOrCreateTooltip(chart);

	// 	if (tooltip.body) {
	// 		const price = document.createElement('h2');
	// 		price.innerHTML = `${tooltip.body[0].lines}`;
	// 		price.style.marginTop = '0.4vw';
	// 		price.style.fontSize = '0.95vw';
	// 		price.style.lineHeight = '1.7vw';
	// 		price.style.color = '#425466';

	// 		const labelWrapper = tooltipEl.childNodes[1];
	// 		if (labelWrapper.childNodes.length > 1) {
	// 			labelWrapper.replaceChild(price, labelWrapper.childNodes[1]);
	// 		} else {
	// 			labelWrapper.appendChild(price);
	// 		}
	// 	}
	// 	const pointWrapper = tooltipEl.childNodes[1];
	// 	tooltipEl.style.opacity = 1;
	// 	tooltipEl.style.left = `${
	// 		tooltip.caretX - tooltipEl.offsetWidth / 2 + pointWrapper.offsetWidth / 2
	// 	}px`;
	// 	tooltipEl.style.top = `${tooltip.caretY - tooltipEl.offsetHeight / 2}px`;
	// };

	const renderChart = (
		chartData1: [{ x?: Date; y?: number }],
		chartData2: [{ x?: Date; y?: number }]
	) => {
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				datasets: [
					{
						label: 'Transfers',
						data: chartData1,
						backgroundColor: '#0021A5',
						borderColor: '#0021A5',
						borderWidth: 2,
					},
					{
						label: 'Transactions',
						data: chartData2,
						backgroundColor: '#099B91',
						borderColor: '#099B91',
						borderWidth: 2,
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
						stacked: true,
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
						stacked: true
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
	<div class="title">Transactions</div>
	<div class="legend">
		<div class="price">
			<div class="color" />
			<div class="text">Transfers</div>
		</div>
		<div class="volume">
			<div class="color green" />
			<div class="text">Transactions</div>
		</div>
	</div>
	<ChartToolbar {chart}/>
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
		@apply mb-[clamp(24px,1.79vw,1.79vw)];
	}

	.legend > div {
		@apply flex gap-[clamp(4px,0.6vw,0.6vw)] items-center;
	}

	.color {
		@apply bg-color-arcadia-blue;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}

	.green {
		@apply bg-color-hover-footer-link;
	}
</style>
