<script lang="ts">
	import DelegatorsTab from '$lib/components/Validators/DelegatorsTab.svelte';
	import StatisticsCard from '$lib/components/Validators/StatisticsCard.svelte';
	import ValidatorCard from '$lib/components/Validators/ValidatorCard.svelte';
	import VerifiedBlocksTab from '$lib/components/Validators/VerifiedBlocksTab.svelte';
	import TabMenu from '$lib/components/TabMenu/index.svelte';
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

	let menuOptions = [
		{
			title: 'Delegators',
			component: DelegatorsTab,
			props: { delegators }
		},
		{
			title: 'Verified Blocks',
			component: VerifiedBlocksTab,
			props: { validatorPublicKey: $page.params.public_key }
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
		await getRewards();
		$isLoading = false;
	});

	// TODO get delegator and validator rewards
	const getRewards = async (network: 'casper' | 'casper-test' = 'casper-test') => {};
</script>

<div class="main">
	{#if validator}
		<div class="header-content">
			<ValidatorCard inactive={validator.bid.inactive} information={validator.information} />
			<StatisticsCard {validator} />
		</div>
		<TabMenu {menuOptions} />
	{/if}
</div>

<style lang="postcss">
	.header-content {
		@apply flex flex-col md:flex-row gap-y-[clamp(10px,1vw,1vw)] justify-between;
		@apply mb-[3.51vw];
	}
</style>
