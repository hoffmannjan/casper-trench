<script lang="ts">
	import Paginator from '$lib/components/Paginator/index.svelte';
	import TableSorter from '$lib/components/Reusables/TableSorter.svelte';
	import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
	import Contract from '$lib/components/TableData/Contract.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import PublicKey from '$lib/components/TableData/PublicKey.svelte';
	import Rank from '$lib/components/TableData/Rank.svelte';
	import { isLoading } from '$stores/loading';
	import { getAccountDeploys, getTopAccounts } from '$utils/api';
	import { parseStringValue } from '$utils/converters';
	import { tableSort } from '$utils/sort';
	import type { TopAccount } from '$utils/types/account';
	import type { AccountTransaction } from '$utils/types/transaction';
	let accountsPerPage = 10;
	let startIndex = 0;
	let topAccounts: TopAccount[];

	const fetchTopAccounts = async () => {
		$isLoading = true;
		topAccounts = await getTopAccounts(accountsPerPage, startIndex);
		topAccounts &&
			topAccounts.forEach(async (account) => {
				const accountTransactions: AccountTransaction[] = await getAccountDeploys(
					account.account_hash,
					1000000,
					0
				);
				account.txnCount = accountTransactions?.length || 0;
			});
		$isLoading = false;
	};

	$: if (accountsPerPage) {
		setTimeout(async () => {
			await fetchTopAccounts();
		}, 1);
	}
	const sortTopAccounts = (direction: 'asc' | 'desc', field: string) => {
		topAccounts = tableSort(direction, topAccounts, field);
	};
</script>

<div class="delegators-tab">
	<div class="title">Rich List</div>
	<table>
		<tr>
			<th class="block">Rank</th>
			<th>Public key</th>
			<th>Account hash</th>
			<th>
				<div class="sorter">
					<div>Balance</div>
					<TableSorter on:sort={(e) => sortTopAccounts(e.detail?.direction, 'balance')} />
				</div>
			</th>
			<th>
				<div class="sorter">
					<div>Transferrable</div>
					<TableSorter on:sort={(e) => sortTopAccounts(e.detail?.direction, 'transferrable')} />
				</div>
			</th>
			<th>
				<div class="sorter">
					<div>Txn Count</div>
					<TableSorter on:sort={(e) => sortTopAccounts(e.detail?.direction, 'txnCount')} />
				</div>
			</th>
			<th>
				<div class="sorter">
					<div>Staked</div>
					<TableSorter on:sort={(e) => sortTopAccounts(e.detail?.direction, 'staked_amount')} />
				</div>
			</th>
		</tr>
		<div class="divider table-header-border" />
		{#if !$isLoading && topAccounts && topAccounts.length > 0}
			{#each topAccounts as account, i}
				<tr>
					<td class="block">
						<div class="wrapper">
							<Rank rank={i + 1} />
							<Contract text="CONTRACT" />
						</div>
					</td>
					<td>
						<a href="/accounts/{account.public_key_hex}">
							<PublicKey
								hash={account.public_key_hex}
								activeDate={Date.parse(account.active_date)}
							/>
						</a>
					</td>
					<td>
						<a href="/accounts/{account.account_hash}"
							><Hash hash={account.account_hash} noOfCharacters={10} /></a
						></td
					>
					<td><BalanceTransferrable cspr={parseStringValue(account.balance)} /></td>
					<td><BalanceTransferrable cspr={parseStringValue(account.transferrable)} /></td>
					<td>{account.txnCount?.toLocaleString('en') || 0}</td>
					<td class="right">{parseStringValue(account.staked_amount).toLocaleString('en')}</td>
				</tr>
			{/each}
		{/if}
	</table>
	<Paginator
		showTotalRows={false}
		bind:itemsPerPage={accountsPerPage}
		apiPaginator
		bind:items={topAccounts}
		bind:startIndex
		on:load-page={async () => await fetchTopAccounts()}
	/>
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
		@apply py-[clamp(8px,0.5vw,0.5vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header;
		@apply text-left;
		/* @apply flex flex-row; */
	}

	td {
		@apply py-[clamp(8px,1.19vw,1.19vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header min-w-max;
	}

	.block {
		@apply px-0;
	}

	.right {
		@apply text-right;
	}

	.wrapper {
		@apply flex gap-[2.26vw];
	}
	.sorter {
		@apply flex items-center gap-[clamp(4px,0.5vw,0.5vw)];
	}
</style>
