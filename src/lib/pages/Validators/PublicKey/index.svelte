<script lang="ts">
	import DelegatorsTab from '$lib/components/Validators/DelegatorsTab.svelte';
	import StatisticsCard from '$lib/components/Validators/StatisticsCard.svelte';
	import ValidatorCard from '$lib/components/Validators/ValidatorCard.svelte';
	import VerifiedBlocksTab from '$lib/components/Validators/VerifiedBlocksTab.svelte';
	import TabMenu from '$lib/components/TabMenu/index.svelte';
	import CopyIcon from '$lib/icons/CopyIcon.svelte';
	import type { ValidatorDetails } from '$utils/types/validator';
	import { isLoading } from '$stores/loading';
	import { onMount } from 'svelte';
	import { getStats, getValidator } from '$utils/api';
	import { page } from '$app/stores';
	import type { Stats } from '$utils/types/stats';

	let validatorRewards = {
		cspr: 31821243,
		cashValue: 921232.02
	};
	let commisionRate = 0.05;
	let performance = 0.94;

	//Sample Data
	let delegators = [
		{
			rank: 'self stake',
			key: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			to: 16324232.03423,
			weight: 0.3245
		},
		{
			rank: '1',
			key: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			to: 16324232.03423,
			weight: 0.3245
		},
		{
			rank: '2',
			key: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			to: 16324232.03423,
			weight: 0.3245
		}
	];
	let totalDelagators = 2342;

	let blocks = [
		{
			id: 916322,
			era: 5519,
			age: 1658226343000,
			transactions: 0,
			transfer: 0,
			hash: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79'
		},
		{
			id: 916322,
			era: 5519,
			age: 1658224906000,
			transactions: 0,
			transfer: 0,
			hash: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79'
		},
		{
			id: 916322,
			era: 5519,
			age: 1628225906000,
			transactions: 0,
			transfer: 0,
			hash: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79'
		}
	];
	let blocksPerPage = 20;

	let menuOptions = [
		{
			title: 'Delegators',
			component: DelegatorsTab,
			props: { delegators, totalDelagators }
		},
		{
			title: 'Verified Blocks',
			component: VerifiedBlocksTab,
			props: { blocks, blocksPerPage }
		}
	];

	let validator: ValidatorDetails;
	let stats: Stats;
	onMount(async () => {
		$isLoading = true;
		validator = await getValidator($page.params.public_key);
		stats = await getStats();
		console.log(validator);
		$isLoading = false;
	});
</script>

<div class="main">
	{#if validator && stats}
		<div class="address">
			<div class="title">Address</div>
			<div class="value">
				<div class="text">
					{validator.public_key}
				</div>
				<div class="copy-icon">
					<CopyIcon />
				</div>
			</div>
		</div>
		<div class="header-content">
			<ValidatorCard inactive={validator.bid.inactive} information={validator.information} />
			<StatisticsCard {validator} />
		</div>

		<TabMenu {menuOptions} />
	{/if}
</div>

<style lang="postcss">
	.address {
		@apply text-color-table-header;
		@apply mb-[1.79vw];
	}
	.address > .value {
		@apply flex items-center gap-[0.24vw];
	}

	.address > .title {
		@apply font-bold text-[1.19vw];
	}

	.address > .value {
		@apply text-[0.95vw];
	}

	.copy-icon {
		@apply w-[1.96vw] h-[1.96vw];
		@apply cursor-pointer;
	}

	.header-content {
		@apply flex flex-col md:flex-row gap-y-[clamp(10px,1vw,1vw)] justify-between;
		@apply mb-[3.51vw];
	}
</style>
