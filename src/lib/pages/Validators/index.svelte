<script lang="ts">
	import Switch from '$lib/components/Reusables/Switch.svelte';
	import CircleProgressBar from '$lib/components/TableData/CircleProgressBar.svelte';
	import Status from '$lib/components/TableData/Status.svelte';
	import Validator from '$lib/components/TableData/Validator.svelte';
	import Paginator from '$lib/components/Paginator/index.svelte';
	import TableSorter from '$lib/components/Reusables/TableSorter.svelte';
	import Tooltip from '$lib/components/Reusables/Tooltip.svelte';
	import { isLoading } from '$stores/loading';
	import { onMount } from 'svelte';
	import type { EraValidator, ValidatorAuction } from '$utils/types/validator';
	import { getAuctionBids, getEraValidators } from '$utils/api';
	import { tableSort } from '$utils/sort';

	let pageOptions: { name: string; dropdown?: string[]; selectedDropdown?: string }[] = [
		{
			name: 'Validators',
			dropdown: [],
			selectedDropdown: ''
		},
		{
			name: 'Validator Auction',
			dropdown: [],
			selectedDropdown: ''
		}
	];

	let currentPage = 0;

	let validators: {
		public_key: string;
		weight: string;
		delegators: number;
		name: string;
		icon: string;
		delegation_rate?: number;
		selfStake?: string;
		networkPercentage?: string;
	}[] = [];

	let displayedValidators: {
		public_key: string;
		weight: string;
		delegators: number;
		name: string;
		icon: string;
		delegation_rate?: number;
		selfStake?: string;
		networkPercentage?: string;
	}[] = [];
	let bids: {
		public_key: string;
		bid: {
			bonding_purse: string;
			staked_amount: string;
			delegation_rate: number;
			inactive: boolean;
			number_of_delegators: number;
		};
		total_bid: string;
		total_delegated: string;
		name: string;
		icon: string;
		selfStake?: string;
		networkPercentage?: string;
	}[] = [];
	let displayedBids: {
		public_key: string;
		bid: {
			bonding_purse: string;
			staked_amount: string;
			delegation_rate: number;
			inactive: boolean;
			number_of_delegators: number;
		};
		total_bid: string;
		total_delegated: string;
		name: string;
		icon: string;
		selfStake?: string;
		networkPercentage?: string;
	}[] = [];
	let sharedDataPoints: {
		public_key: string;
		fee: number;
		selfStake: string;
		networkPercentage?: string;
	}[] = [];
	let totalEraStake: string;
	let eraValidators: EraValidator;
	let validatorAuction: ValidatorAuction;
	onMount(async () => {
		$isLoading = true;
		eraValidators = await getEraValidators();
		if (eraValidators) {
			// Populate the dropdown with era IDs as the items
			eraValidators.auction_state.era_validators.forEach((eraValidator, i) => {
				const dropdownItem =
					i == 0 ? `Current Era ${eraValidator.era_id}` : `Next Era ${eraValidator.era_id}`;
				pageOptions && pageOptions[0].dropdown.push(dropdownItem);
			});

			setValidatorsByEra(eraValidators.auction_state.era_validators[0].era_id);
		}
		validatorAuction = await getAuctionBids();
		bids = validatorAuction && validatorAuction.auction_state.bids;
		setSharedDataPoints();
		bids && validators && mergeValidatorData();
		$isLoading = false;
	});
	const setSharedDataPoints = () => {
		bids &&
			bids.forEach((bid) => {
				sharedDataPoints.push({
					public_key: bid.public_key,
					fee: bid.bid.delegation_rate,
					selfStake: (
						(parseFloat(bid.bid.staked_amount) / parseFloat(bid.total_bid)) *
						100
					).toFixed(2)
				});
			});
		validators &&
			validators.forEach((validator) => {
				sharedDataPoints &&
					sharedDataPoints.forEach((sharedDataPoint) => {
						if (sharedDataPoint.public_key == validator.public_key) {
							sharedDataPoint.networkPercentage = (
								(parseFloat(validator.weight) / parseFloat(totalEraStake)) *
								100
							).toFixed(2);
						}
					});
			});
	};

	const mergeValidatorData = () => {
		bids &&
			bids.forEach((bid) => {
				validators &&
					validators.forEach((validator) => {
						if (validator.public_key === bid.public_key) {
							validator.delegation_rate = bid.bid.delegation_rate;
							validator.selfStake = bid.selfStake = (
								(parseFloat(bid.bid.staked_amount) / parseFloat(bid.total_bid)) *
								100
							).toFixed(2);
							bid.networkPercentage = validator.networkPercentage = (
								(parseFloat(validator.weight) / parseFloat(totalEraStake)) *
								100
							).toFixed(2);
						}
					});
			});
	};

	const getSharedDatapoint = (
		publicKey: string
	): { public_key: string; fee: number; selfStake: string; networkPercentage?: string } => {
		return sharedDataPoints.find((sharedDataPoint) => sharedDataPoint.public_key === publicKey);
	};

	const setValidatorsByEra = (eraId: number) => {
		eraValidators.auction_state.era_validators.forEach((era) => {
			if (era.era_id === eraId) {
				validators = era.validator_weights;
				totalEraStake = era.total_stake;
			}
		});
	};

	const sortValidators = (direction: 'asc' | 'desc', field: string) => {
		validators = tableSort(direction, validators, field);
	};

	const sortBids = (direction: 'asc' | 'desc', field: string) => {
		bids = tableSort(direction, bids, field);
	};
	$: validators && bids && setSharedDataPoints();
	$: validators && bids && mergeValidatorData();
</script>

<div class="content">
	<Switch
		options={pageOptions}
		bind:selected={currentPage}
		outlined
		on:dropdown-option-clicked={(e) => {
			if (e.detail.optionIndex !== 0) {
				return;
			}
			if (e.detail.dropdownIndex === 0) {
				setValidatorsByEra(parseFloat(pageOptions[0].dropdown[0].substring('Current Era '.length)));
			} else {
				setValidatorsByEra(parseFloat(pageOptions[0].dropdown[1].substring('Next Era '.length)));
			}
		}}
	/>

	{#if currentPage === 0}
		{#if displayedValidators && displayedValidators.length > 0 && sharedDataPoints && sharedDataPoints.length > 0}
			<table>
				<tr>
					<th class="rank">Rank</th>
					<th class="validators">Validators</th>
					<th class="fee">
						<div class="header-wrapper">
							<div class="text">Fee</div>
							<TableSorter
								on:sort={(e) => sortValidators(e.detail?.direction, 'delegation_rate')}
							/>
						</div>
					</th>
					<th>
						<div class="header-wrapper">
							<div class="text">Delegators</div>
							<TableSorter on:sort={(e) => sortValidators(e.detail?.direction, 'delegators')} />
						</div>
					</th>
					<th class="stake">
						<div class="header-wrapper justify-center">
							<div class="text">Total Stake</div>
							<Tooltip text="Total Stake tooltip" />
							<TableSorter on:sort={(e) => sortValidators(e.detail?.direction, 'weight')} />
						</div>
					</th>
					<th class="self">Self %</th>
					<th class="network-perc">% Of Network</th>
					<th class="performance">
						<div class="header-wrapper">
							<div class="text">Performance</div>
							<Tooltip text="Performance tooltip" />
						</div>
					</th>
				</tr>
				<div class="divider table-header-border" />
				{#each displayedValidators as validator, i}
					<tr>
						<td class="rank-val">{i + 1}</td>
						<td class="validators"
							><Validator
								imgUrl={validator.icon}
								hash={validator.public_key}
								name={validator.name}
							/></td
						>
						<td class="grey">{validator.delegation_rate}%</td>
						<td>{validator.delegators.toLocaleString()}</td>
						<td class="stake"
							>{parseFloat(validator.weight.substring(0, 9)).toLocaleString('en')} CSPR</td
						>
						<td class="grey self">{validator.selfStake}%</td>
						<td class="grey network-perc">{validator.networkPercentage}%</td>
						<td class="performance"><CircleProgressBar progress={0.25} /></td>
					</tr>
				{/each}
			</table>
		{/if}
		<Paginator bind:items={validators} bind:pagedItems={displayedValidators} />
	{:else}
		{#if displayedBids && displayedBids.length > 0 && sharedDataPoints && sharedDataPoints.length > 0}
			<table>
				<tr>
					<th class="rank">Rank</th>
					<th class="validators">Validators</th>
					<th class="status">Status</th>
					<th class="fee">
						<div class="header-wrapper">
							<div class="text">Fee</div>
							<TableSorter on:sort={(e) => sortBids(e.detail?.direction, 'bid.delegation_rate')} />
						</div>
					</th>
					<th>
						<div class="header-wrapper">
							<div class="text">Delegators</div>
							<TableSorter
								on:sort={(e) => sortBids(e.detail?.direction, 'bid.number_of_delegators')}
							/>
						</div>
					</th>
					<th class="stake">
						<div class="header-wrapper justify-center">
							<div class="text">Total Stake</div>
							<Tooltip text="Total Stake tooltip" />
							<TableSorter on:sort={(e) => sortBids(e.detail?.direction, 'total_bid')} />
						</div>
					</th>
					<th class="self">Self %</th>
					<th class="network-perc">% Of Network</th>
					<th class="performance">
						<div class="header-wrapper">
							<div class="text">Performance</div>
							<Tooltip text="Performance tooltip" />
						</div>
					</th>
				</tr>
				<div class="divider table-header-border" />
				{#each displayedBids as bid, i}
					<tr>
						<td class="rank-val">{i + 1}</td>
						<td class="validators"
							><Validator imgUrl={bid.icon} hash={bid.public_key} name={bid.name} /></td
						>
						<td class="status"><Status inactive={bid.bid.inactive} /></td>
						<td class="grey">{bid.bid.delegation_rate.toFixed(2)}%</td>
						<td>{bid.bid.number_of_delegators.toLocaleString('en')}</td>
						<td class="stake"
							>{parseFloat(bid.total_bid.substring(0, 9)).toLocaleString('en')} CSPR</td
						>
						<td class="grey self">{bid.selfStake}%</td>
						<td class="grey network-perc">{bid.networkPercentage}%</td>
						<td class="performance"><CircleProgressBar progress={0.7} /></td>
					</tr>
				{/each}
			</table>
		{/if}
		<Paginator bind:items={bids} bind:pagedItems={displayedBids} />
	{/if}
</div>

<style lang="postcss">
	table {
		@apply table-auto w-full relative;
	}

	.divider {
		@apply h-[clamp(1px,0.18vw,0.18vw)] w-full;
		@apply absolute;
	}

	th {
		@apply py-[clamp(8px,0.5vw,0.5vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header;
		@apply text-left;
	}

	td {
		@apply py-[clamp(8px,1.19vw,1.19vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header min-w-max;
	}

	.content {
		@apply flex flex-col gap-[3.21vw];
	}

	.grey {
		@apply text-color-grey-footer-label;
	}

	.rank {
		@apply text-left;
		@apply w-[2.5vw];
	}

	.rank-val {
		@apply w-[2.5vw];
		@apply text-center;
	}

	.validators {
		@apply pl-[3.69vw];
		@apply text-left;
	}

	.performance {
		@apply text-center;
		@apply flex justify-center;
	}

	.network-perc {
		@apply text-right;
	}

	.self {
		@apply text-right;
	}

	.stake {
		@apply text-center;
	}

	.header-wrapper {
		@apply flex items-center gap-[0.48vw];
	}

	.status {
		@apply text-center;
		@apply flex justify-center;
	}
</style>
