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
	import { getValidator } from '$utils/api';
	import { page } from '$app/stores';

	let delegators: {
		public_key: string;
		staked_amount: number;
		bonding_purse: string;
		delegatee: string;
	}[] = [];

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
			props: { delegators }
		},
		{
			title: 'Verified Blocks',
			component: VerifiedBlocksTab,
			props: { blocks, blocksPerPage }
		}
	];

	let validator: ValidatorDetails;
	onMount(async () => {
		$isLoading = true;
		validator = await getValidator($page.params.public_key);
		menuOptions[0].props.delegators = validator && validator.bid.delegators;
		menuOptions[0].props.delegators.unshift({
			public_key: validator.public_key,
			staked_amount: parseFloat(validator.bid.staked_amount),
			bonding_purse: validator.bid.bonding_purse,
			delegatee: ''
		});
		menuOptions[0].props['totalStake'] = validator && validator.bid.total_stake;
		menuOptions[0].props['validatorPublicKey'] = validator && validator.public_key;
		$isLoading = false;
	});
</script>

<div class="main">
	{#if validator}
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
