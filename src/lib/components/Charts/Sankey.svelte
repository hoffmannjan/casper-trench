<script lang="ts">
	import ChartsPage from '$lib/pages/Charts/ChartsPage.svelte';

	import { getTransferFlow } from '$utils/api';
	import { externalSankeyTooltipHandler } from '$utils/tooltip';
	import type { TransferFlow } from '$utils/types/transfer';
	import { onMount } from 'svelte';
	import ChartToolbar from './ChartToolbar.svelte';
	import EraSlider from './EraSlider.svelte';

	let ctx: HTMLCanvasElement;
	let chart;
	let pan = true;
	let transferFlow: TransferFlow;
	let data: { from: string; to: string; flow: number }[] = [];

	onMount(async () => {
		// @ts-ignore
		Chart.defaults.font.size = 16;
		transferFlow = await getTransferFlow(5908, 100);
		transferFlow &&
			transferFlow.transfers.forEach((flow) => {
				data.push({
					from: `${flow.from.substring(0, 6)}...${flow.from.substring(flow.from.length - 6)}`,
					to: `${flow.to.substring(0, 6)}...${flow.to.substring(flow.to.length - 6)}`,
					flow: flow.denomAmount
				});
			});
		data.length > 0 && renderChart(data);
	});

	const getColor = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str && str.charCodeAt(i) + ((hash << 5) - hash);
		}
		let color = '#';
		for (let i = 0; i < 3; i++) {
			let value = hash && (hash >> (i * 8)) & 0xff;
			color += value.toString(16).substring(-2);
		}
		for (let i = 1; i <= 7; i++) {
			if (color.charAt(i) == '') {
				color.concat('0');
			}
		}
		if (color.length == 6) {
			color += '0';
		}
		return color.toUpperCase();
	};

	const renderChart = (data: { from: string; to: string; flow: number }[]) => {
		// @ts-ignore
		chart = new Chart(ctx, {
			type: 'sankey',
			data: {
				datasets: [
					{
						data,
						colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
						colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
						colorMode: 'gradient',
						size: 'max'
					}
				]
			},
			options: {
				animation: true,
				responsive: true,
				plugins: {
					tooltip: {
						enabled: false,
						callbacks: {
							label(c) {
								return [c.dataset.data[c.dataIndex].flow.toLocaleString('en') + ' CSPR'];
							}
						},
						position: 'average',
						usePointStyle: false,
						external: externalSankeyTooltipHandler,
						padding: 8
					}
				}
			}
		});
	};

	// TODO Get current Era from API
	const currentEra = 5544;

	let eraValue = currentEra;
	$: if (eraValue > currentEra) {
		eraValue = currentEra;
	}
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/chartjs-chart-sankey@0.9.0"></script>
</svelte:head>

<div class="container">
	<div class="title">Transfer Flow</div>
	<ChartToolbar
		{chart}
		on:update-cursor={() => {
			pan = chart.options.plugins.zoom.pan.enabled;
		}}
	/>
	<div class="chart" class:pan>
		<canvas bind:this={ctx} />
	</div>
	<EraSlider bind:value={eraValue} max={currentEra}/>
	<div class="footer">
		<div class="era">
			<div class="label">Era ID</div>
			<input type="number" max={currentEra} bind:value={eraValue} />
		</div>
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
		@apply cursor-crosshair;
		@apply mb-[clamp(16px,2.08vw,2.08vw)];
	}

	.pan {
		@apply cursor-grab;
	}

	.footer {
		@apply flex items-center justify-between;
		@apply text-[clamp(16px,1.07vw,1.07vw)];
		@apply mt-[clamp(16px,1.07vw,1.07vw)];
	}

	.era {
		@apply flex items-center gap-[clamp(4px,0.48vw,0.48vw)];
	}

	input[type='number'] {
		@apply p-[clamp(8px,0.71vw,0.71vw)];
		@apply border-color-progress-bg border-[clamp(1px,0.06vw,0.06vw)];
		@apply rounded-[clamp(4px,0.3vw,0.3vw)];
		@apply w-[clamp(75px,5.06vw,5.06vw)];
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: textfield;
	}
</style>
