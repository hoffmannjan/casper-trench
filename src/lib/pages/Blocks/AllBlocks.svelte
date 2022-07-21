<script>
	import Paginator from '$lib/components/Paginator/index.svelte';
    import Hash from '$lib/components/TableData/Hash.svelte';
    import Validator from '$lib/components/TableData/Validator.svelte';
    import { millisToFormat, timeAgo } from '$utils/converters';

	let blocks = [
        {
            blockHeight: 861308,
            era: "5268",
            transaction: 1,
            age: Date.parse("July 21, 2022"),
            hash: "a6df6n92478n279v25n75292v5v9v25d1693",
            validator: {
                imgUrl: "https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg",
                name: "Ghost Staking",
                hash: "01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31"
            }
        },
		{
            blockHeight: 861308,
            era: "5268",
            transaction: 1,
            age: Date.parse("July 21, 2022"),
            hash: "a6df6n92478n279v25n75292v5v9v25d1693",
            validator: {
                imgUrl: "https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg",
                name: "Ghost Staking",
                hash: "01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31"
            }
        },
		{
            blockHeight: 861308,
            era: "5268",
            transaction: 1,
            age: Date.parse("July 21, 2022"),
            hash: "a6df6n92478n279v25n75292v5v9v25d1693",
            validator: {
                imgUrl: "https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg",
                name: "Ghost Staking",
                hash: "01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31"
            }
        }
    ];
</script>

<div class="delegators-tab">
	<div class="title">Blocks</div>
	<table>
		<tr>
			<th class="block">Block Height</th>
			<th>Era</th>
			<th class="center">Transaction</th>
			<th class="center">Age</th>
			<th class="center">Block Hash</th>
			<th>Validators</th>
		</tr>
		<div class="divider table-header-border" />
		{#each blocks as block, i}
			<tr>
				<td class="block black">
					{block.blockHeight.toLocaleString()}
                </td>
				<td class="era">
                    {block.era}
                </td>
				<td class="center black">
                    {block.transaction}
                </td>
				<td class="center age">
                    {`${timeAgo(millisToFormat(Date.now() - block.age))} ago`}
                </td>
				<td class="center">
                    <div class="wrapper">
                        <Hash hash={block.hash}/>
                    </div>
                </td>
				<td>
                    <Validator imgUrl={block.validator.imgUrl} name={block.validator.name} hash={block.validator.hash}/>
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
        @apply flex justify-center;
	}

	.center {
		@apply text-center;
	}

	.age {
		@apply text-color-grey-footer-label;
	}

	.wrapper-center {
		@apply flex items-center;
		@apply md:h-[3vw];
	}

	.black {
		@apply text-color-black-text;
	}

	.era {
		@apply text-color-grey-footer-label;
	}
</style>
