<script>
	import Switch from '$lib/components/Reusables/Switch.svelte';
	import CircleProgressBar from '$lib/components/TableData/CircleProgressBar.svelte';
	import Status from '$lib/components/TableData/Status.svelte';
	import Validator from '$lib/components/TableData/Validator.svelte';
	import Paginator from '$lib/components/Paginator/index.svelte';
	import TableSorter from '$lib/components/Reusables/TableSorter.svelte';
	import Tooltip from '$lib/components/Reusables/Tooltip.svelte';

	const pageOptions = [
		{
			name: 'Validators',
			dropdown: ['Current Era', 'Next era'],
            selectedDropdown: ""
		},
		{
			name: 'Validators Auction',
			dropdown: [],
            selectedDropdown: ""
		}
	];

	let currentPage = 0;

	let validators = [
		{
			imgUrl: 'https://foreststaking.com/svg.svg',
			hash: '012bac1d0ff9240ff0b7b06d555815640497861619ca12583ddef434885416e69b',
			name: 'Everstake',
			fee: 0.1,
			delegators: 2982,
			totalStake: 541762712,
			self: 0.0004,
			percOfNetwork: 0.0656,
			performance: 0.96,
			rank: 1,
			status: 'Active'
		},
		{
			imgUrl: 'https://foreststaking.com/svg.svg',
			hash: '012bac1d0ff9240ff0b7b06d555815640497861619ca12583ddef434885416e69b',
			name: 'Everstake',
			fee: 0.1,
			delegators: 2982,
			totalStake: 541762712,
			self: 0.0004,
			percOfNetwork: 0.0656,
			performance: 0.98,
			rank: 2,
			status: 'Active'
		},
		{
			imgUrl: 'https://foreststaking.com/svg.svg',
			hash: '012bac1d0ff9240ff0b7b06d555815640497861619ca12583ddef434885416e69b',
			name: 'Everstake',
			fee: 0.1,
			delegators: 2982,
			totalStake: 541762712,
			self: 0.0004,
			percOfNetwork: 0.0656,
			performance: 1,
			rank: 3,
			status: 'Inactive'
		}
	];
</script>

<div class="content">

	<Switch
		options={pageOptions}
		bind:selected={currentPage}
		outlined
		on:dropdown-option-clicked={(e) => {
			if (e.detail.optionIndex !== 0) {
        //Load Auction Data Here
				return;
			}
			if (e.detail.dropdownIndex === 0) {
				//Load Current Era Data
			} else {
				//Load Next Era Data
			}
		}}
	/>
  
	{#if currentPage === 0}
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
				<tr>
					<td class="rank-val">{validator.rank}</td>
					<td class="validators"
						><Validator imgUrl={validator.imgUrl} hash={validator.hash} name={validator.name} /></td
					>
					<td class="grey">{(validator.fee * 100).toFixed(2)}%</td>
					<td>{validator.delegators.toLocaleString()}</td>
					<td class="stake">{validator.totalStake.toLocaleString()} CSPR</td>
					<td class="grey self">{(validator.self * 100).toFixed(2)}%</td>
					<td class="grey network-perc">{(validator.percOfNetwork * 100).toFixed(2)}%</td>
					<td class="performance"><CircleProgressBar progress={validator.performance} /></td>
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
				<tr>
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
				</tr>
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
