<script>
	import { onMount } from 'svelte';
	let chartElement;
	let innerWidth;
	let chart;
	export let delegatedData = [];
	export let unbondedData = [];
	export let isLoading = true;
	onMount(() => {
		// console.log(`${innerWidth * 0.75}px`)
		let options = {
			chart: {
				type: 'area',
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
			fill: {
				type: 'solid'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'straight',
				width: 0
			},
			legend: {
				show: false
			},
			series: [
				{
					name: 'Delegated',
					data: delegatedData,
					color: '#0021A5'
				},
				{
					name: 'Unbonded',
					data: unbondedData,
					color: '#099B91'
				}
			],
			xaxis: {
				type: 'datetime',
				axisBorder: {
					show: true
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
						return `${date.getDate()} ${monthNames[date.getMonth()]}`;
					},
					style: {
						fontSize: '0.83vw',
						colors: '#CFCFCF'
					},
					offsetX: 8
				}
			},
			yaxis: {
				labels: {
					formatter: (value) => {
						return value.toLocaleString();
					},
					style: {
						fontSize: '0.83vw',
						colors: ['#8F9398']
					},
					offsetX: -16
				},
				tickAmount: 6
			},
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
						'<span style="font-weight: bold;">' +
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
						(series[1][dataPointIndex] === 0 ? 0 : -series[1][dataPointIndex]).toLocaleString() +
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

		// @ts-ignore
		chart = new ApexCharts(chartElement, options);
		chart.render();
	});

	$: if (!isLoading) {
		chart?.updateSeries([
			{
				name: 'Delegated',
				data: delegatedData,
				color: '#0021A5'
			},
			{
				name: 'Unbonded',
				data: unbondedData,
				color: '#099B91'
			}
		]);
	}
</script>

<svelte:window bind:innerWidth />

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
	<div class="chart" bind:this={chartElement} />
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
		@apply bg-color-hover-footer-link;
		@apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
		@apply rounded-full;
	}

	.delegated > .color {
		@apply bg-color-arcadia-blue;
	}
</style>
