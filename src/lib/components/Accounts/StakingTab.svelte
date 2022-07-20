<script lang='ts'>
	import Paginator from '$lib/components/Paginator/index.svelte';
import EmptyIcon from '$lib/icons/EmptyIcon.svelte';
	import { millisToFormat, timeAgo } from '$utils/converters';
    import Switch from '../Reusables/Switch.svelte';
    import TransactionStatus from '../TableData/TransactionStatus.svelte';
    import Validator from '../TableData/Validator.svelte';

    //sample data
    const stakingHistory = [
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			validator: {
                hash: "012ba35h3633h3636e69b",
                imgUrl: "https://ledgerleap.com/assets/images/favicon.png",
                name: "Everstake"
            },
			amount: 16324232.03423,
            status: "Success"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			validator: {
                hash: "012ba35h3633h3636e69b",
                imgUrl: "https://ledgerleap.com/assets/images/favicon.png",
                name: "Everstake"
            },
            amount: 16324232.03423,
            status: "Success"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			validator: {
                hash: "012ba35h3633h3636e69b",
                imgUrl: "https://ledgerleap.com/assets/images/favicon.png",
                name: "Everstake"
            },
            amount: 16324232.03423,
            status: "Insufficient funds"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			validator: {
                hash: "012ba35h3633h3636e69b",
                imgUrl: "https://ledgerleap.com/assets/images/favicon.png",
                name: "Everstake"
            },
            amount: 16324232.03423,
            status: "Success"
		},
        {
			id: '9bb2ee365c9b2672f761daac599e84c6d8ab1d25a43fba2d38e508df63ec5c79',
			time: Date.parse('July 20, 2022 14:05'),
			validator: {
                hash: "012ba35h3633h3636e69b",
                imgUrl: "https://ledgerleap.com/assets/images/favicon.png",
                name: "Everstake"
            },
            amount: 16324232.03423,
            status: "Success"
		}
    ];
    const unstakingHistory = [];

	// export let props = {};
	let transactions = [];
	let transactionsPerPage = 10;

    const switchOptions = [
        {
            name: "Staking History",
            dropdown: [],
            selectedDropdown: ""
        },
        {
            name: "Unstaking History",
            dropdown: [],
            selectedDropdown: ""
        },
    ]
    let selected = 0;

    $: if (selected === 0) {
        //Update transactions to be staking history
        transactions = stakingHistory;
    } else {
        //Update transactions to be unstaking history
        transactions = unstakingHistory;
    }
</script>

<div class="switch-container">
    <Switch outlined options={switchOptions} bind:selected/>
</div>
<div class="delegators-tab">
	<div class="total">
		Latest {transactionsPerPage} Transactions
	</div>
	<table>
		<tr>
			<th class="block">Transaction</th>
			<th>Validator</th>
			<th class="right">TX Time</th>
			<th class="right">Amount</th>
			<th class="right">Status</th>
		</tr>
		<div class="divider table-header-border" />
		{#if transactions.length > 0}
            {#each transactions as transaction}
                <tr>
                    <td class="block">{transaction.id}</td>
                    <td><Validator hash={transaction.validator.hash} imgUrl={transaction.validator.imgUrl} name={transaction.validator.name} /></td>
                    <td class="time">{`${timeAgo(millisToFormat(Date.now() - transaction.time))} ago`}</td>
                    <td>
                        <div class="value-crypto">
                            <div class="crypto">
                                {parseFloat(transaction.amount.toFixed(5)).toLocaleString()}
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
        {/if}
	</table>
    {#if transactions.length === 0}
        <div class="empty">
            <div class="content">
                <div class="empty-icon">
                    <EmptyIcon />
                </div>
                <div class="text">
                    Empty
                </div>
            </div>
        </div>
    {:else}
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

	.hash {
		@apply text-color-hover-footer-link;
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

    .switch-container {
        @apply flex justify-center;
        @apply mb-[1.31vw];
    }

    .empty-icon {
        @apply w-[2.08vw] h-[2.08vw];
    }

    .empty {
        @apply h-[23.81vw] w-full;
        @apply flex items-center justify-center;
        @apply text-[clamp(8px,1.07vw,1.07vw)] text-color-grey-footer-label text-opacity-50;
    }

    .empty > div {
        @apply flex flex-col items-center justify-center;
    }
</style>
