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
	import type { EraValidator } from '$utils/types/validator';
	import { getEraValidators } from '$utils/api';
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
	}[] = [];
	let totalEraStake: string;
	let eraValidators: EraValidator;
	onMount(async () => {
		$isLoading = true;
		eraValidators = await getEraValidators();
		// console.log(eraValidators);
		if (eraValidators) {
			// Populate the dropdown with era IDs as the items
			eraValidators.auction_state.era_validators.forEach((eraValidator, i) => {
				const dropdownItem =
					i == 0 ? `Current Era ${eraValidator.era_id}` : `Next Era ${eraValidator.era_id}`;
				pageOptions && pageOptions[0].dropdown.push(dropdownItem);
			});

			setValidatorsByEra(eraValidators.auction_state.era_validators[0].era_id);
		}
		$isLoading = false;
	});

	const calculateNetworkPercentage = (weight: string): string => {
		const networkPercentage = (parseFloat(weight) / parseFloat(totalEraStake)) * 100;
		return networkPercentage.toFixed(2);
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
		// console.log(validators[0][field])
		validators = tableSort(direction, validators, field);
		// console.log("Sorted: ",tableSort(direction, validators, field))
	};
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

	{#if currentPage === 0 && validators && validators.length > 0}
		<table>
			<tr>
				<th class="rank">Rank</th>
				<th class="validators">Validators</th>
				<th class="fee">
					<div class="header-wrapper">
						<div class="text">Fee</div>
						<TableSorter />
					</div>
				</th>
				<th>
					<div class="header-wrapper">
						<div class="text">Delegators</div>
						<TableSorter
							on:sort={(e) => sortValidators(e.detail?.direction, 'delegators')}
						/>
					</div>
				</th>
				<th class="stake">
					<div class="header-wrapper justify-center">
						<div class="text">Total Stake</div>
						<Tooltip text="Total Stake tooltip" />
						<TableSorter
							on:sort={(e) => sortValidators(e.detail?.direction, 'weight')}
						/>
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
			{#each validators as validator, i}
				<tr>
					<td class="rank-val">{i + 1}</td>
					<td class="validators"
						><Validator
							imgUrl={validator.icon}
							hash={validator.public_key}
							name={validator.name}
						/></td
					>
					<td class="grey">{10}%</td>
					<td>{validator.delegators.toLocaleString()}</td>
					<td class="stake"
						>{parseFloat(validator.weight.substring(0, 9)).toLocaleString('en')} CSPR</td
					>
					<td class="grey self">{0.04}%</td>
					<td class="grey network-perc">{calculateNetworkPercentage(validator.weight)}%</td>
					<td class="performance"><CircleProgressBar progress={0.25} /></td>
				</tr>
			{/each}
		</table>
		<Paginator />
	{:else}
		<table>
			<tr>
				<th class="rank">Rank</th>
				<th class="validators">Validators</th>
				<th class="status">Status</th>
				<th class="fee">
					<div class="header-wrapper">
						<div class="text">Fee</div>
						<TableSorter />
					</div>
				</th>
				<th>
					<div class="header-wrapper">
						<div class="text">Delegators</div>
						<TableSorter />
					</div>
				</th>
				<th class="stake">
					<div class="header-wrapper justify-center">
						<div class="text">Total Stake</div>
						<Tooltip text="Total Stake tooltip" />
						<TableSorter />
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
			{#each validators as validator}
				<!-- <tr>
					<td class="rank-val">{validator.rank}</td>
					<td class="validators"
						><Validator imgUrl={validator.imgUrl} hash={validator.hash} name={validator.name} /></td
					>
					<td class="status"><Status status={validator.status} /></td>
					<td class="grey">{(validator.fee * 100).toFixed(2)}%</td>
					<td>{validator.delegators.toLocaleString()}</td>
					<td class="stake">{validator.totalStake.toLocaleString()} CSPR</td>
					<td class="grey self">{(validator.self * 100).toFixed(2)}%</td>
					<td class="grey network-perc">{(validator.percOfNetwork * 100).toFixed(2)}%</td>
					<td class="performance"><CircleProgressBar progress={validator.performance} /></td>
				</tr> -->
			{/each}
		</table>
		<Paginator />
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
