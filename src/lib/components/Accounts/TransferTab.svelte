<script>
	import Paginator from '$lib/components/Paginator/index.svelte';
	import AmountChange from '$lib/components/TableData/AmountChange.svelte';
	import FromToAccountHash from '$lib/components/TableData/FromToAccountHash.svelte';
	import { millisToFormat, timeAgo } from '$utils/converters';

	// export let props = {};

	let transfers = [
		{
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			to: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			amount: {
				value: 16324232.03423,
				up: true
			}
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			to: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			amount: {
				value: 16324232.03423,
				up: true
			}
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			to: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			amount: {
				value: 16324232.03423,
				up: false
			}
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			to: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			amount: {
				value: 16324232.03423,
				up: false
			}
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			from: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			to: {
				hash: '18afc5g355bn32622h26h2hh6222h26292a5c',
				cspr: 16324232.03423
			},
			amount: {
				value: 16324232.03423,
				up: true
			}
		}
	];
	let transfersPerPage = 10;
</script>

<div class="transfer-tab">
	<div class="total">
		Latest {transfersPerPage} Transactions
	</div>
	<table>
		<tr>
			<th class="block">TX ID</th>
			<th>TX Time</th>
			<th class="right">From (Account Hash)</th>
			<th class="right">To (Account Hash)</th>
			<th class="right">Amount</th>
		</tr>
		<div class="divider table-header-border" />
		{#each transfers as transfer}
			<tr>
				<td class="block">{transfer.id}</td>
				<td class="time">{`${timeAgo(millisToFormat(Date.now() - transfer.time))} ago`}</td>
				<td>
                    <div class="right-flex">
						<FromToAccountHash isFrom cspr={transfer.from.cspr} hash={transfer.from.hash} />
					</div>
                </td>
				<td>
                    <div class="right-flex">
						<FromToAccountHash cspr={transfer.to.cspr} hash={transfer.to.hash} />
					</div>
                </td>
				<td>
					<div class="right-flex">
						<AmountChange isUp={transfer.amount.up} cspr={transfer.amount.value} />
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
		@apply py-[clamp(8px,0.5vw,0.5vw)] md:px-[1vw];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header;
		@apply text-left;
	}

	td {
		@apply py-[clamp(8px,1.19vw,1.19vw)] md:px-[1vw];
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
		@apply mb-[clamp(4px,2.38vw,2.38vw)];
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
</style>
