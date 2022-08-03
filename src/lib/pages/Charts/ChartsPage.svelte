<script lang="ts">
	import ComboChart from '$lib/components/Charts/New/ComboChart.svelte';
	// import StackedChart from '$lib/components/Charts/StackedChart.svelte';
	import StackedChart from '$lib/components/Charts/New/StackedChart.svelte';
	import AreaChart from '$lib/components/Charts/New/AreaChart.svelte';
	import PoNegAreaChart from '$lib/components/Charts/New/PoNegAreaChart.svelte';
	// import { isLoading } from '$stores/loading';
	import { getEraData, getLatestBlocks, getMarketPrices } from '$utils/api';
	import type { Block } from '$utils/types/block';
	import type { EraData } from '$utils/types/era';
	import { onMount } from 'svelte';
	import type { MarketPrices } from '$utils/types/price';

	let eraData: EraData[];
	let transfersData = [];
	let transactionsData = [];
	let delegatedData = [];
	let unbondedData = [];
	let validatorWeights = [];
	let priceData = [];
	let volumeData = [];
	let marketPrices: MarketPrices[];
	let isLoading = true;
	onMount(async () => {
		isLoading = true;
		const latestBlocks: Block[] = await getLatestBlocks(1);
		eraData = latestBlocks && (await getEraData('id ASC', 0, latestBlocks[0].header.era_id));
		marketPrices = await getMarketPrices();
		eraData &&
			eraData.forEach((data) => {
				transfersData.push({x: data.end, y: data.transfersCount});
				transactionsData.push({x: data.end, y: data.deploysCount});
				delegatedData.push({x: data.end, y: data.stakedThisEra});
				unbondedData.push({x: data.end, y: -data.undelegatedThisEra});
				validatorWeights.push({x: data.end, y: data.validatorsWeights});
			});
		marketPrices &&
			marketPrices.forEach((price) => {
				priceData.push({x: price.date, y: price.close});
				volumeData.push({x: price.date, y: price.volumeTo});
			});
		isLoading = false;
	});
</script>

<div class="charts-page">
	{#if !isLoading}
		<div class:loading={isLoading} class="wrapper">
			<StackedChart {transfersData} {transactionsData} />
			<!-- <StackedChart {transfersData} {transactionsData} bind:isLoading /> -->
		</div>
		<div class:loading={isLoading} class="wrapper">
			<!-- <ComboChart {priceData} {volumeData} bind:isLoading /> -->
			<ComboChart {priceData} {volumeData} />
		</div>
		<div class:loading={isLoading} class="wrapper">
			<PoNegAreaChart {delegatedData} {unbondedData} />
			<!-- <PoNegAreaChart {delegatedData} {unbondedData} bind:isLoading /> -->
		</div>
		<div class:loading={isLoading} class="wrapper">
			<AreaChart {validatorWeights} />
			<!-- <AreaChart {validatorWeights} bind:isLoading /> -->
		</div>
	{/if}
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
