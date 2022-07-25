<script lang="ts">
	import Hash from '../TableData/Hash.svelte';
	import { slide } from 'svelte/transition';

	export let transactions = [];
</script>

<div class="delegators-tab" transition:slide>
	<table>
		<tr>
			<th>Transactions</th>
			<th>From (Account Hash)</th>
			<th>To (Account Hash)</th>
			<th class="right">Value</th>
		</tr>
		<div class="divider table-header-border" />
		{#if transactions && transactions.length > 0}
			{#each transactions as transaction, i}
				<tr>
					<td><Hash hash={transaction.hash} noOfCharacters={10} /></td>
					<td>
						<div class="account">
							<img src={transaction.from.imgUrl} alt="to-account-logo" />
							<Hash hash={transaction.from.hash} noOfCharacters={10} />
						</div>
					</td>
					<td>
						<div class="account">
							<img src={transaction.to.imgUrl} alt="to-account-logo" />
							<Hash hash={transaction.to.hash} noOfCharacters={10} />
						</div>
					</td>
					<td>
						<div class="value-crypto">
							<div class="crypto">
								{transaction.value}
							</div>
							<div class="cspr">CSPR</div>
						</div>
					</td>
				</tr>
			{/each}
		{/if}
	</table>
</div>

<style lang="postcss">
	table {
		@apply table-auto md:w-[58.75vw] relative;
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

	.account {
		@apply flex items-center gap-[clamp(4px,0.36vw,0.36vw)];
	}

	.account > img {
		@apply w-[1.67vh] h-[1.67vh] md:w-[1.67vw] md:h-[1.67vw];
		@apply rounded-full;
	}

	.value-crypto {
		@apply flex items-center gap-[clamp(2px,0.24vw,0.24vw)];
		@apply text-color-arcadia-red;
	}

	.crypto {
		@apply text-[clamp(10px,1.07vw,1.07vw)];
	}

	.cspr {
		@apply text-[clamp(8px,0.83vw,0.83vw)];
	}

	.right {
		@apply text-right;
	}
</style>
