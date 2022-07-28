<script>
	import PriceLegendIcon from '$lib/icons/PriceLegendIcon.svelte';
	import { onMount } from 'svelte';

	export let priceData = [
		[1658918045000, 0.73625],
		[1658923545000, 0.61625],
		[1658927645000, 0.40724],
		[1658929545000, 0.31525],
		[1658933545000, 0.125246],
		[1658936545000, 0.70123]
	];
	export let volumeData = [
		[1658918045000, 73625],
		[1658923545000, 41625],
		[1658927645000, 70724],
		[1658929545000, 91525],
		[1658933545000, 125246],
		[1658936545000, 30123]
	];

	let chartElement;

	let innerWidth;

	onMount(() => {
		let options = {
			chart: {
				type: 'line',
				toolbar: {
					show: true,
					offsetY: -12
				},
				zoom: {
					enabled: true,
					zoomedArea: {
						fill: {
							color: '#099B91',
							opacity: 0.4
						},
						stroke: {
							color: '#099B91',
							opacity: 0.4,
							width: 1
						}
					}
				},
				height: '100%',
				width: `${innerWidth * 0.75}px`
			},
			stroke: {
				curve: 'stepline',
				width: [2, 0]
			},
			series: [
				{
					name: 'Price',
					data: priceData,
					type: 'line'
				},
				{
					name: 'Volume',
					data: volumeData,
					type: 'column'
				}
			],
			xaxis: {
				type: 'datetime',
				axisBorder: {
					show: true
				},
				axisTicks: {
					show: true
				},
				labels: {
					datetimeFormatter: {
						year: 'yyyy',
						month: 'MMM yy',
						day: 'dd MMM',
						hour: 'HH:mm'
					},
					style: {
						fontSize: '0.83vw',
						colors: '#8F9398'
					}
				},
				tickAmount: 3
			},
			yaxis: [
				{
					labels: {
						formatter: (value) => {
							if (value > 1000) {
								return `$${Math.round(value / 1000).toFixed(3)}k`;
							}
							return `$${value.toFixed(3)}`;
						},
						style: {
							fontSize: '0.83vw',
							colors: ['#8F9398']
						}
					},
					tickAmount: 5
				},
				{
					labels: {
						formatter: (value) => {
							if (value > 1000) {
								return `${Math.round(value / 1000)}k`;
							}
						},
						style: {
							fontSize: '0.83vw',
							colors: ['#8F9398']
						}
					},
					tickAmount: 5,
					opposite: true
				}
			],
			legend: {
				show: false
			},
			colors: ['#099B91', '#0021A5'],
			tooltip: {
				enabled: true,
				style: {
					fontSize: '0.83vw'
				},
				x: {
					show: false,
					format: 'dddd, d MMM, HH:mm'
				},
				y: {
					formatter: (value) => {
						return value.toLocaleString();
					}
				},
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
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
					const date = new Date(w.globals.seriesX[seriesIndex][dataPointIndex]);

					return (
						'<div style="padding: clamp(4px, 0.83vw, 0.83vw); font-size: clamp(10px,0.83vw,0.83vw)">' +
						'<div style="font-weight: bold;">' +
						String(date.getDate()).padStart(2, '0') +
						' ' +
						monthNames[date.getMonth()] +
						'</div>' +
						'<div style="display: flex; gap: clamp(8px,0.83vw,0.83vw); justify-content: space-between">' +
						'<span style="display: flex; align-items: center;">' +
						'<div style="border-radius: 100%; height: clamp(8px,0.6vw,0.6vw); width: clamp(8px,0.6vw,0.6vw); margin-right: clamp(4px,0.24vw,0.24vw); background-color:' +
						w.globals.colors[0] +
						';"></div>' +
						w.globals.initialSeries[0].name +
						' : ' +
						'</span>' +
						'<span style="font-weight: bold;"> $' +
						series[0][dataPointIndex].toLocaleString() +
						'</span>' +
						'</div>' +
						'<div style="display: flex; gap: clamp(8px,0.83vw,0.83vw); justify-content: space-between">' +
						'<span style="display: flex; align-items: center;">' +
						'<div style="border-radius: 100%; height: clamp(8px,0.6vw,0.6vw); width: clamp(8px,0.6vw,0.6vw); margin-right: clamp(4px,0.24vw,0.24vw); background-color:' +
						w.globals.colors[1] +
						';"></div>' +
						w.globals.initialSeries[1].name +
						' : ' +
						'</span>' +
						'<span style="font-weight: bold;">' +
						series[1][dataPointIndex].toLocaleString() +
						'</span>' +
						'</div>' +
						'</div>'
					);
				}
			},
			grid: {
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: true
					}
				}
			}
		};
		let chart = new ApexCharts(chartElement, options);
		chart.render();
	});
</script>

<svelte:window bind:innerWidth />

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
	<div class="chart" bind:this={chartElement} />
</div>

<style lang="postcss">
	.title {
		@apply text-[clamp(16px,1.43vw,1.43vw)] font-bold text-color-table-header;
		@apply flex items-center justify-between;
	}

	.container {
		@apply md:h-[32vw] min-w-max;
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
		@apply bg-color-arcadia-blue;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}

	.icon {
		@apply w-[clamp(16px,1.19vw,1.19vw)];
	}
</style>
