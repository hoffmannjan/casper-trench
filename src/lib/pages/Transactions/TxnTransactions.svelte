<script>
	import Paginator from '$lib/components/Paginator/index.svelte';
	import TableSorter from '$lib/components/Reusables/TableSorter.svelte';
	import AmountCost from '$lib/components/TableData/AmountCost.svelte';
	import ContractText from '$lib/components/TableData/ContractText.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import TxHash from '$lib/components/TableData/TxHash.svelte';
	import { millisToFormat, timeAgo } from '$utils/converters';

	let transactions = [
		{
			hash: 'a6df6n92478n279v25n75292v5v9v25d1693',
			status: 'success',
			blockHash: 'a6df6n92478n279v25n75292v5v9v25d1693',
			publicKey: 'a6df6n92478n279v25n75292v5v9v25d1693',
			age: Date.parse('July 21, 2022 16:54'),
			contract: '',
			amount: {
				cspr: 934863,
				cash: 24736.64
			},
			cost: {
				cspr: 934863,
				cash: 24736.64
			}
		},
		{
			hash: 'a6df6n92478n279v25n75292v5v9v25d1693',
			status: 'success',
			blockHash: 'a6df6n92478n279v25n75292v5v9v25d1693',
			publicKey: 'a6df6n92478n279v25n75292v5v9v25d1693',
			age: Date.parse('July 21, 2022 16:54'),
			contract: '',
			amount: {
				cspr: 934863,
				cash: 24736.64
			},
			cost: {
				cspr: 934863,
				cash: 24736.64
			}
		},
		{
			hash: 'a6df6n92478n279v25n75292v5v9v25d1693',
			status: 'success',
			blockHash: 'a6df6n92478n279v25n75292v5v9v25d1693',
			publicKey: 'a6df6n92478n279v25n75292v5v9v25d1693',
			age: Date.parse('July 21, 2022 16:54'),
			contract: '',
			amount: {
				cspr: 934863,
				cash: 24736.64
			},
			cost: {
				cspr: 934863,
				cash: 24736.64
			}
		}
	];
</script>

<div class="delegators-tab">
	<div class="title">Transactions</div>
	<table>
		<tr>
			<th class="block">Tx Hash</th>
			<th>Block Hash</th>
			<th>Public Key</th>
			<th class="center sorter">
				<div class="text">Age</div>
				<TableSorter />
			</th>
			<th>Contract</th>
			<th class="right">Amount</th>
			<th class="right"> Cost</th>
		</tr>
		<div class="divider table-header-border" />
		{#each transactions as transaction, i}
			<tr>
				<td class="block">
					<div class="wrapper-center">
						<TxHash
							hash={transaction.hash}
							color={transaction.status.toLowerCase() === 'success' ? 'green' : 'yellow'}
							right
						/>
					</div>
				</td>
				<td>
					<Hash hash={transaction.blockHash} />
				</td>
				<td>
					<Hash hash={transaction.publicKey} />
				</td>
				<td class="center age">
					{`${timeAgo(millisToFormat(Date.now() - transaction.age))} ago`}
				</td>
				<td>
					<ContractText />
				</td>
				<td class="right">
					<div class="wrapper">
						<AmountCost cspr={transaction.amount.cspr} cashValue={transaction.amount.cash} />
					</div>
				</td>
				<td class="right">
					<div class="wrapper">
						<AmountCost cspr={transaction.cost.cspr} cashValue={transaction.cost.cash} />
					</div>
				</td>
			</tr>
		{/each}
	</table>
	<Paginator />
</div>

<style lang="postcss">
	table {
		@apply table-auto w-full relative;
	}

	.title {
		@apply text-[clamp(16px,1.43vw,1.43vw)] font-bold text-color-table-header;
	}

	.divider {
		@apply h-[clamp(1px,0.18vw,0.18vw)] w-full;
		@apply absolute;
	}

	th {
		@apply py-[clamp(8px,0.5vw,0.5vw)] md:px-[1vw];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header;
		@apply text-left;
	}

	td {
		@apply py-[clamp(8px,1.19vw,1.19vw)] md:px-[1vw];
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header min-w-max;
	}

	.block {
		@apply px-0;
	}

	.right {
		@apply text-right;
	}

	.wrapper {
		@apply flex justify-end;
	}

	.center {
		@apply text-center;
	}

	.age {
		@apply text-color-grey-footer-label;
	}

	.sorter {
		@apply flex items-center gap-[clamp(4px,0.5vw,0.5vw)] justify-center;
	}

	.wrapper-center {
		@apply flex items-center;
		@apply md:h-[3vw];
	}
</style>
