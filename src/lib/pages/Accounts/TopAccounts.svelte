<script lang="ts">
	import { goto } from '$app/navigation';
	import Paginator from '$lib/components/Paginator/index.svelte';
	import PlaceHolderIndicator from '$lib/components/PlaceHolderIndicator.svelte';
	import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
	import Contract from '$lib/components/TableData/Contract.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import PublicKey from '$lib/components/TableData/PublicKey.svelte';
	import Rank from '$lib/components/TableData/Rank.svelte';
	import { isLoading } from '$stores/loading';
	import { getTopAccounts } from '$utils/api';
	import type { TopAccount } from '$utils/types/account';
	import { onMount } from 'svelte';
	let accountsPerPage = 10;
	let startIndex = 0;
	let topAccounts: TopAccount[];

	onMount(async () => {
		await fetchTopAccounts();
	});

	const fetchTopAccounts = async () => {
		$isLoading = true;
		topAccounts = await getTopAccounts(accountsPerPage, startIndex);
		$isLoading = false;
	};
	$: if (accountsPerPage) {
		setTimeout(async () => {
			await fetchTopAccounts();
		}, 1);
	}
</script>

<div class="delegators-tab">
	<div class="title">Rich List</div>
	<table>
		<tr>
			<th class="block">Rank</th>
			<th>Public key</th>
			<th>Account hash</th>
			<th>Balance</th>
			<th>Transferable</th>
			<th class="right flex items-center gap-1">Txn count <PlaceHolderIndicator /></th>
			<th class="right">Staked</th>
		</tr>
		<div class="divider table-header-border" />
		{#if topAccounts && topAccounts.length > 0}
			{#each topAccounts as account, i}
				<tr>
					<td class="block">
						<div class="wrapper">
							<Rank rank={i + 1} />
							<Contract text="" />
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
					<td><Hash hash={account.account_hash} noOfCharacters={10} /></td>
					<td><BalanceTransferrable cspr={parseFloat(account.balance.substring(0, 10))} /></td>
					<td><BalanceTransferrable cspr={parseFloat(account.transferrable.substring(0, 9))} /></td>
					<!-- TODO Remove placeholder -->
					<td class="right">{'4,819,627'}</td>
					<td class="right"
						>{parseFloat(account.staked_amount.substring(0, 9)).toLocaleString('en')}</td
					>
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
</style>
