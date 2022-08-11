<script lang="ts">
	import Paginator from '$lib/components/Paginator/index.svelte';
	import Weight from '$components/TableData/Weight.svelte';
	import { parseStringValue } from '$utils/converters';

	export let props: {
		delegators: {
			public_key: string;
			staked_amount: number;
			bonding_purse: string;
			delegatee: string;
		}[];
		totalStake: string;
		validatorPublicKey: string;
	};

	let displayedDelegators: {
		public_key: string;
		staked_amount: number;
		bonding_purse: string;
		delegatee: string;
	}[];
	let delegators = props.delegators;
	let totalDelagators = delegators.length;
</script>

<div class="delegators-tab">
	<div class="total">
		{#if delegators}
			Total {totalDelagators} delegators
		{:else}
			Total 0 delegators{/if}
	</div>
	<table>
		<tr>
			<th class="rank">Rank</th>
			<th>Delegators (Public key)</th>
			<!-- TODO confirm is staked amount -->
			<!-- <th class="to"> To (Account Hash) </th> -->
			<th class="to">Staked Amount</th>
			<th class="weight"> % Weight </th>
		</tr>
		<div class="divider table-header-border" />
		{#if displayedDelegators && displayedDelegators.length > 0}
			{#each displayedDelegators as delegator, i}
				<tr>
					{#if props.validatorPublicKey === delegator.public_key}
						<td>Self Stake</td>
					{:else}
						<td class:rank-val={i === 0}>{i}</td>
					{/if}
					<td class="key">{delegator.public_key}</td>
					<td class="to">
						<div class="value-crypto">
							<div class="crypto">
								{parseStringValue(delegator.staked_amount).toLocaleString('en')}
							</div>
							<div class="cspr">CSPR</div>
						</div>
					</td>
					<td class="weight"
						><Weight value={delegator.staked_amount / parseFloat(props.totalStake)} /></td
					>
				</tr>
			{/each}
		{/if}
	</table>
	<Paginator showTotalRows={false} bind:items={delegators} bind:pagedItems={displayedDelegators} />
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

	.total {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-grey-footer-label;
		@apply mb-[2.38vw];
	}
</style>
