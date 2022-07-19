<script>
	import Paginator from '$lib/components/Paginator/index.svelte';
	import Weight from '../TableData/Weight.svelte';

	let sampleDelegators = [
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
</script>

<div class="delegators-tab">
	<table>
		<tr>
			<th class="rank">Rank</th>
			<th>Delegators (Public key)</th>
			<th class="to"> To (Account Hash) </th>
			<th class="weight"> % Weight </th>
		</tr>
		<div class="divider table-header-border" />
		{#each sampleDelegators as delegator}
			<tr>
				<td class:rank-val={delegator.rank.length === 1}>{delegator.rank}</td>
				<td class="key">{delegator.key}</td>
				<td class="to">
					<div class="value-crypto">
						<div class="crypto">
							{parseFloat(delegator.to.toFixed(5)).toLocaleString()}
						</div>
						<div class="cspr">CSPR</div>
					</div>
				</td>
				<td class="weight"><Weight value={delegator.weight} /></td>
			</tr>
		{/each}
	</table>
	<Paginator />
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

	.value-crypto {
		@apply flex items-center justify-end gap-[clamp(2px,0.24vw,0.24vw)];
		@apply text-right text-[clamp(8px,0.83vw,0.83vw)];
	}

	.crypto {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header;
	}

	.cspr {
		@apply text-color-grey-footer-label;
	}

	.to {
		@apply text-right;
	}

	.weight {
		@apply text-right;
		@apply flex justify-end;
	}

	.key {
		@apply text-color-hover-footer-link;
	}
</style>
