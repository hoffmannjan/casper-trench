<script>
	// export let props = {};

	let earnings = [
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        },
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        },
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        },
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        },
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        },
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        },
        {
            date: new Date("July 20, 2022"),
            reward: {
                cspr: 31821243,
                cash: 921232.02
            }
        }
    ];
	let earningsPerPage = 10;
</script>

<div class="earnings-tab">
	<div class="total">
		Latest {earningsPerPage} Transactions
	</div>
	<table>
		<tr>
			<th>Date</th>
            <th>Reward</th>
		</tr>
		<div class="divider table-header-border" />
		{#each earnings as earning}
			<tr>
				<td>{earning.date.toLocaleDateString()}</td>
                <td>
                    <div class="value-crypto">
                        <div class="crypto">
                            {parseFloat(earning.reward.cspr.toFixed(5)).toLocaleString()}
                        </div>
                        <div class="cspr">CSPR</div>
                        <div class="cash">
                            ${parseFloat(earning.reward.cash.toFixed(5)).toLocaleString()}
                        </div>
                    </div>
                </td>
			</tr>
		{/each}
	</table>
</div>

<style lang="postcss">
    .earnings-tab {
        @apply w-[44.88vw];
        @apply border-[clamp(1px,0.15vw,0.15vw)] border-color-tooltip-border border-opacity-100;
        @apply rounded-[0.95vw];
        @apply px-[2.02vw] pt-[2.14vw] pb-[2.5vw];
    }

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

	.total {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-grey-footer-label;
		@apply mb-[2.38vw];
	}

    .value-crypto {
		@apply flex items-center gap-[clamp(2px,0.24vw,0.24vw)];
		@apply text-[clamp(8px,0.83vw,0.83vw)];
	}

	.crypto {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header;
	}

	.cspr {
		@apply text-color-grey-footer-label;
        @apply mr-[0.71vw];
	}
</style>
