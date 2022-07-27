<script>
	import { onMount } from 'svelte';

	export let data = [73625, 41625, 70724, 91525, 125246, 30123];
	export let timestamps = [
		1658918045000, 1658923545000, 1658927645000, 1658929545000, 1658933545000, 1658936545000
	];

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
			}
		},
		stroke: {
			curve: 'straight'
		},
		series: [
			{
				name: 'CSPR Received',
				data
			}
		],
		xaxis: {
			categories: timestamps,
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
		yaxis: {
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
			tickAmount: 4,
			opposite: true
		},
		colors: ['#099B91'],
		tooltip: {
			enabled: true,
			style: {
				fontSize: '0.83vw'
			},
			x: {
				show: false,
				format: 'dddd, MMM d, HH:mm'
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
					'<span style="display: flex; align-items: center;">' + '<div style="border-radius: 100%; height: clamp(8px,0.6vw,0.6vw); width: clamp(8px,0.6vw,0.6vw); margin-right: clamp(4px,0.24vw,0.24vw); background-color:' + w.globals.colors[seriesIndex] + ';"></div>' +
					w.globals.initialSeries[seriesIndex].name +
					' : ' +
					'</span>' +
					'<span style="font-weight: bold;">' +
					series[seriesIndex][dataPointIndex].toLocaleString() +
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
		<div class="label">Latest 1000 Era rewards (CSPR)</div>
	</div>
	<div class="chart" bind:this={chartElement} />
</div>

<style lang="postcss">
	.container {
		@apply max-w-[38.1vw];
	}

	.title {
		@apply text-[clamp(12px,0.95vw,0.95vw)] text-color-grey-footer-label;
		@apply flex items-center justify-between;
	}

	.label {
		@apply font-medium;
	}

	.value {
		@apply text-[clamp(10px,0.83vw,0.83vw)];
	}
</style>
