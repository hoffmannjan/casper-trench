<script>
	import { onMount } from 'svelte';

	export let transfersData = [
		[1658918045000, 736],
		[1658923545000, 616],
		[1658927645000, 407],
		[1658929545000, 315],
		[1658933545000, 125],
		[1658936545000, 701]
	];
	export let transactionsData = [
		[1658918045000, 936],
		[1658923545000, 816],
		[1658927645000, 707],
		[1658929545000, 515],
		[1658933545000, 225],
		[1658936545000, 901]
	];

    let transactionDifferences = [];
    transactionsData.forEach((item, i) => {
        transactionDifferences.push([item[0], (item[1]-transfersData[i][1])]);
    })

	let chartElement;

	let innerWidth;

	onMount(() => {
		let options = {
		chart: {
			type: 'bar',
			stacked: true,
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
        dataLabels: {
            enabled: false
        },
		stroke: {
			width: [0, 0]
		},
		series: [
			{
				name: 'Transfers',
				data: transfersData
			},
			{
				name: 'Transactions',
				data: transactionDifferences
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
		yaxis: {
			labels: {
				style: {
					fontSize: '0.83vw',
					colors: ['#8F9398']
				},
                formatter: (value) => {return value.toLocaleString()},
			},
			tickAmount: 5
		},
		legend: {
			show: false
		},
		colors: ['#0021A5', '#099B91'],
		tooltip: {
			enabled: true,
            followCursor: true,
            intersect: false,
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
                    transactionsData[dataPointIndex][1].toLocaleString() +
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

<svelte:window bind:innerWidth/>

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

    .green {
        @apply bg-color-hover-footer-link;
    }
</style>
