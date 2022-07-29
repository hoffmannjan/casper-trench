<script lang="ts">
	import AreaChart from '$lib/components/Charts/AreaChart.svelte';
	import ComboChart from '$lib/components/Charts/ComboChart.svelte';
	import StackedChart from '$lib/components/Charts/StackedChart.svelte';
	// import { isLoading } from '$stores/loading';
	import SvelteLoader from '$components/SvelteLoader/index.svelte';
	import { getEraData, getLatestBlocks } from '$utils/api';
	import type { Block } from '$utils/types/block';
	import type { EraData } from '$utils/types/era';
	import { onMount } from 'svelte';
	let eraData: EraData[];
	let transfersData = [];
	let transactionsData = [];
	let isLoading = true;
	onMount(async () => {
		isLoading = true;
		const latestBlocks: Block[] = await getLatestBlocks(1);
		eraData = latestBlocks && (await getEraData('id ASC', 0, latestBlocks[0].header.era_id));
		eraData && console.log('Total: ', eraData.length);
		eraData &&
			eraData.forEach((data) => {
				transfersData.push([data.end, data.transfersCount]);
				transactionsData.push([data.end, data.deploysCount]);
			});
		console.log('Total Transfers: ', transfersData.length);
		console.log('Total Transactions: ', transactionsData.length);
		isLoading = false;
	});
</script>

<div class="charts-page">
	<div class:loading={isLoading} class="wrapper">
		<!-- <StackedChart/> -->
		<StackedChart {transfersData} {transactionsData} isLoading />
	</div>
	<div class:loading={isLoading} class="wrapper">
		<ComboChart />
	</div>
	<div class:loading={isLoading} class="wrapper">
		<!-- TODO Add custom bar chart -->
	</div>
	<div class:loading={isLoading} class="wrapper">
		<AreaChart />
	</div>
</div>

<style lang="postcss">
	.wrapper {
		@apply px-[clamp(16px,2.14vw,2.14vw)] py-[clamp(16px,0.95vw,0.95vw)];
		@apply border-color-tooltip-border border-[clamp(1px,0.06vw,0.06vw)];
		@apply rounded-[1.19vh] md:rounded-[1.19vw];
		@apply mb-[clamp(16px,2.38vw,2.38vw)];
	}
	.loading {
		@apply bg-gray-50;
		@apply animate-pulse;
	}
</style>
