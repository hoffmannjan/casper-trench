<script lang="ts">
	import AreaChart from '$lib/components/Charts/AreaChart.svelte';
	import ComboChart from '$lib/components/Charts/ComboChart.svelte';
	import PoNegAreaChart from '$lib/components/Charts/PoNegAreaChart.svelte';
	import StackedChart from '$lib/components/Charts/StackedChart.svelte';
	// import { isLoading } from '$stores/loading';
	import SvelteLoader from '$components/SvelteLoader/index.svelte';
	import { getEraData, getLatestBlocks, getMarketPrices } from '$utils/api';
	import type { Block } from '$utils/types/block';
	import type { EraData } from '$utils/types/era';
	import { onMount } from 'svelte';
	import type { MarketPrices } from '$utils/types/price';
	import ValidatorWeightsChart from '$lib/components/Charts/ValidatorWeightsChart.svelte';
	let eraData: EraData[];
	let transfersData = [];
	let transactionsData = [];
	let delegatedData = [];
	let unbondedData = [];
	let validatorWeights: [{ x?: Date; y?: number }] = [{}];
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
				transfersData.push([data.end, data.transfersCount]);
				transactionsData.push([data.end, data.deploysCount]);
				delegatedData.push([data.end, data.stakedThisEra]);
				unbondedData.push([data.end, -data.undelegatedThisEra]);
				validatorWeights.push({ x: new Date(data.end), y: data.validatorsWeights });
			});
		marketPrices &&
			marketPrices.forEach((price) => {
				priceData.push([price.date, price.close]);
				volumeData.push([price.date, price.volumeTo]);
			});
		isLoading = false;
	});
</script>

<div class="charts-page">
	<!-- <div class:loading={isLoading} class="wrapper">
		<StackedChart {transfersData} {transactionsData} bind:isLoading />
	</div>
	<div class:loading={isLoading} class="wrapper">
		<ComboChart {priceData} {volumeData} bind:isLoading />
	</div>
	<div class:loading={isLoading} class="wrapper">
		<PoNegAreaChart {delegatedData} {unbondedData} bind:isLoading />
	</div>
	<div class:loading={isLoading} class="wrapper">
		<AreaChart {validatorWeights} bind:isLoading />
	</div> -->
	<div class:loading={isLoading} class="wrapper">
		<ValidatorWeightsChart {validatorWeights} bind:isLoading />
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
