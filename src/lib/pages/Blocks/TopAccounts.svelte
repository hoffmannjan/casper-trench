<script>
import { goto } from '$app/navigation';

	import Paginator from '$lib/components/Paginator/index.svelte';
import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
import Contract from '$lib/components/TableData/Contract.svelte';
import Hash from '$lib/components/TableData/Hash.svelte';
import PublicKey from '$lib/components/TableData/PublicKey.svelte';
import Rank from '$lib/components/TableData/Rank.svelte';

    // You could also just pass the hash and get blocks from the api if thats possible.

	let accounts = [
        {
            contractText: "",
            name: "Everstake",
            lastActive: Date.parse('July 19, 2022, 14:47'),
            balance: {
                cspr: 31821243,
                cash: 921232.02
            },
            transferable: {
                cspr: 31821243,
                cash: 921232.02
            },
            txnCount: 4819627,
            staked: 4819627,
            hash: "020232ee96sdfghasf52g25g25ghsrt254gf7b75e0158"
        },
        {
            contractText: "",
            name: "Everstake",
            lastActive: Date.parse('July 19, 2022, 14:47'),
            balance: {
                cspr: 31821243,
                cash: 921232.02
            },
            transferable: {
                cspr: 31821243,
                cash: 921232.02
            },
            txnCount: 4819627,
            staked: 4819627,
            hash: "020232ee96sdfghasf52g25g25ghsrt254gf7b75e0158"
        },
        {
            contractText: "",
            name: "Everstake",
            lastActive: Date.parse('July 19, 2022, 14:47'),
            balance: {
                cspr: 31821243,
                cash: 921232.02
            },
            transferable: {
                cspr: 31821243,
                cash: 921232.02
            },
            txnCount: 4819627,
            staked: 4819627,
            hash: "020232ee96sdfghasf52g25g25ghsrt254gf7b75e0158"
        }
    ];
</script>

<div class="delegators-tab">
	<table>
		<tr>
			<th class="block">Rank</th>
			<th>Public key</th>
			<th>Account hash</th>
			<th>Balance</th>
			<th>Transferable</th>
			<th class="right">Txn count</th>
			<th class="right">Staked</th>
		</tr>
		<div class="divider table-header-border" />
		{#each accounts as account, i}
			<tr>
				<td class='block'>
                    <div class="wrapper">
                        <Rank rank={i + 1}/>
                        <Contract text={account.contractText}/>
                    </div>
                </td>
                <td>
                    <PublicKey text={account.name} activeDate={account.lastActive}/>
                </td>
                <td><Hash hash={account.hash} noOfCharacters={10} on:click={() => { goto(`/blocks/top-accounts/${account.hash}`) }}/></td>
                <td><BalanceTransferrable cspr={account.balance.cspr} cashValue={account.balance.cash} /></td>
                <td><BalanceTransferrable cspr={account.transferable.cspr} cashValue={account.transferable.cash} /></td>
                <td class="right">{account.txnCount.toLocaleString()}</td>
                <td class="right">{account.staked.toLocaleString()}</td>
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
