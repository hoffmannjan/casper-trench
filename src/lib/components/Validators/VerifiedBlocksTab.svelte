<script>
	import Paginator from '$lib/components/Paginator/index.svelte';
	import { millisToFormat, timeAgo } from '$utils/converters';

	export let props = {
		blocks: [],
		blocksPerPage: 0
	};

	// You could also just pass the hash and get blocks from the api if thats possible.

	let blocks = props.blocks;
	let blocksPerPage = props.blocksPerPage;
</script>

<div class="delegators-tab">
	<div class="total">
		{blocksPerPage} blocks per page
	</div>
	<table>
		<tr>
			<th class="block">Block</th>
			<th>Era</th>
			<th>Age</th>
			<th>Transactions</th>
			<th>Transfer</th>
			<th class="right">Block Hash</th>
		</tr>
		<div class="divider table-header-border" />
		{#each blocks as block}
			<tr>
				<td class="block">{block.id}</td>
				<td>{block.era}</td>
				<td>{`${timeAgo(millisToFormat(Date.now() - block.age))} ago`}</td>
				<td>{block.transactions}</td>
				<td>{block.transfer}</td>
				<td class="hash right">{block.hash}</td>
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
</style>
