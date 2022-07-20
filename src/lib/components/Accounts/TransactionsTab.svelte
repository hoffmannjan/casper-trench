<script>
	import Paginator from '$lib/components/Paginator/index.svelte';
	import { millisToFormat, timeAgo } from '$utils/converters';
    import Hash from '../TableData/Hash.svelte';
    import TransactionStatus from '../TableData/TransactionStatus.svelte';

	// export let props = {};

	let transactions = [
		{
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: '18afc5g355bn32622h26h2hh6222h26292a5c',
			fee: 16324232.03423,
            status: "Success"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: '18afc5g355bn32622h26h2hh6222h26292a5c',
            fee: 16324232.03423,
            status: "Success"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: '18afc5g355bn32622h26h2hh6222h26292a5c',
            fee: 16324232.03423,
            status: "Insufficient funds"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: '18afc5g355bn32622h26h2hh6222h26292a5c',
            fee: 16324232.03423,
            status: "Success"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: '18afc5g355bn32622h26h2hh6222h26292a5c',
            fee: 16324232.03423,
            status: "Success"
		}
	];
	let transactionsPerPage = 10;
</script>

<div class="transactions-tab">
	<div class="total">
		Latest {transactionsPerPage} Transactions
	</div>
	<table>
		<tr>
			<th class="block">TX ID</th>
			<th>TX Time</th>
			<th class="right">From (Account Hash)</th>
			<th class="right">TX Fee</th>
			<th class="right">Status</th>
		</tr>
		<div class="divider table-header-border" />
		{#each transactions as transaction}
			<tr>
				<td class="block">{transaction.id}</td>
				<td class="time">{`${timeAgo(millisToFormat(Date.now() - transaction.time))} ago`}</td>
				<td>
                    <div class="right-flex">
						<Hash color='black' hash={transaction.from}/>
					</div>
                </td>
				<td>
                    <div class="value-crypto">
						<div class="crypto">
							{parseFloat(transaction.fee.toFixed(5)).toLocaleString()}
						</div>
						<div class="cspr">CSPR</div>
					</div>
                </td>
				<td>
					<div class="wrapper">
                        <TransactionStatus success={transaction.status.toLowerCase() === "success"}>
                            {transaction.status}
                        </TransactionStatus>
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

	.divider {
		@apply h-[clamp(1px,0.18vw,0.18vw)] w-full;
		@apply absolute;
	}

	th {
		@apply py-[clamp(8px,0.5vw,0.5vw)] px-[2vw];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header;
		@apply text-left;
	}

	td {
		@apply py-[clamp(8px,1.19vw,1.19vw)] px-[2vw];
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header min-w-max;
	}

	td.block {
		@apply text-color-hover-footer-link;
	}

	.block {
		@apply px-0;
	}

	.total {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-grey-footer-label;
		@apply mb-[2.38vw];
	}

	.right {
		@apply text-right;
	}

	.time {
		@apply align-top;
		@apply min-w-max;
	}

	.right-flex {
		@apply flex justify-end;
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

    .wrapper {
        @apply flex justify-end;
    }
</style>
