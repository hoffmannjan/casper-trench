<script>
	import { onMount } from 'svelte';

	export let data = [[1658918045000, 73625], [1658923545000, 41625], [1658927645000, 70724], [1658929545000, 91525], [1658933545000, 125246], [1658936545000, 30123]];

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
            height: "100%",
            width: "125%"
		},
		fill: {
			gradient: {
				shade: 'dark',
				type: 'vertical',
				shadeIntensity: 0.5,
				gradientToColors: '#1737A3',
				inverseColors: true,
				opacityFrom: 0.8,
				opacityTo: 0.8,
				stops: [0, 100],
				colorStops: [
					{
						offset: 20,
						color: '#099B91',
						opacity: .80
					},
					{
						offset: 100,
						color: '#1737A3',
						opacity: .80
					}
				]
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight',
			width: 0,
		},
		series: [
			{
				name: 'Validator Weights',
				data
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
					return `${monthNames[date.getMonth()]} ${date.getDate()}`;
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
					return `${Math.round(value / 1000)}k`;
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
					'<div style="border-radius: 100%; height: clamp(8px,0.6vw,0.6vw); width: clamp(8px,0.6vw,0.6vw); margin-right: clamp(4px,0.24vw,0.24vw); background: linear-gradient(180deg, #099B91 0%, #1737A3 100%);"></div>' +
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
				}
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
        Validators Weights
    </div>
    <div class="legend">
        <div class="color">

        </div>
        <div class="text">
            Weight
        </div>
    </div>
	<div class="chart" bind:this={chartElement} />
</div>

<style lang="postcss">
	.title {
		@apply text-[clamp(16px,1.43vw,1.43vw)] font-bold text-color-table-header;
		@apply flex items-center justify-between;
        @apply ml-[40vw];
	}

	.label {
		@apply font-medium;
	}

	.value {
		@apply text-[clamp(10px,0.83vw,0.83vw)];
	}

    .container {
        @apply md:h-[32vw];
    }

    .chart {
        @apply w-full;
    }

    .legend {
        @apply flex gap-[clamp(4px,0.6vw,0.6vw)] items-center;
        @apply ml-[43.5vw];
        @apply text-[clamp(12px,0.95vw,0.95vw)] text-color-table-header;
    }

    .color {
        @apply bg-gradient-to-b from-color-hover-footer-link to-color-chart-blue bg-opacity-80;
        @apply h-[clamp(12px,0.95vw,0.95vw)] w-[clamp(12px,0.95vw,0.95vw)];
        @apply rounded-full;
    }
</style>
