<script lang="ts">
	import { goto } from '$app/navigation';

	import Paginator from '$lib/components/Paginator/index.svelte';
	import TableSorter from '$lib/components/Reusables/TableSorter.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import Validator from '$lib/components/TableData/Validator.svelte';
	import { isLoading } from '$stores/loading';
	import { getLatestBlocks, getRangeBlocks, getValidator } from '$utils/api';
	import { getValidatorDetails, millisToFormat, timeAgo } from '$utils/converters';
	import type { Block, RangeBlock } from '$utils/types/block';
	import { onMount } from 'svelte';

	let blocks: Block[];
	let rangeBlock: RangeBlock;
	let latestBlock = 0;
	let blocksPerPage = 10;
	let startIndex = 0;
	onMount(async () => {
		$isLoading = true;
		let latestBlocks: Block[] = await getLatestBlocks(1);
		startIndex = latestBlocks && latestBlocks[0].header.height;
		latestBlock = startIndex;
		await fetchBlocks();
		$isLoading = false;
	});

	const fetchBlocks = async () => {
		$isLoading = true;
		// logic to invert the block heights for start and end query params.
		rangeBlock = await getRangeBlocks(startIndex - blocksPerPage + 1, startIndex);
		blocks = rangeBlock && rangeBlock.result;
		$isLoading = false;
	};
	$: if (blocksPerPage) {
		setTimeout(async () => {
			await fetchBlocks();
		}, 1);
	}
</script>

<div class="delegators-tab">
	<div class="title">Blocks</div>
	<table>
		<tr>
			<th class="block">
				<div class="sorter">
					<div class="text">Block Height</div>
					<TableSorter />
				</div>
			</th>
			<th>
				<div class="sorter">
					<div class="text">Era</div>
					<TableSorter />
				</div>
			</th>
			<th class="center">
				<div class="sorter">
					<div class="text">Transaction</div>
					<TableSorter />
				</div>
			</th>
			<th class="center">
				<div class="sorter">
					<div class="text">Age</div>
					<TableSorter />
				</div>
			</th>
			<th class="center">Block Hash</th>
			<th>Validators</th>
		</tr>
		<div class="divider table-header-border" />
		{#if blocks && blocks.length > 0}
			{#each blocks as block, i}
				<tr>
					<td class="block black">
						{block.header.height.toLocaleString()}
					</td>
					<td class="era">
						{block.header.era_id}
					</td>
					<td class="center black">
						{block.body.deploy_hashes.length || 0}
					</td>
					<td class="center age">
						{`${timeAgo(millisToFormat(Date.now() - Date.parse(block.header.timestamp)))} ago`}
					</td>
					<td class="center">
						<div class="wrapper">
							<a href="/blocks/{block.hash}">
								<Hash hash={block.hash} />
							</a>
						</div>
					</td>
					<td>
						{#await getValidatorDetails(block.body.proposer)}
							<Validator imgUrl={''} name={''} hash={block.body.proposer} />
						{:then validator}
							{#if validator}
								<Validator
									imgUrl={validator.icon}
									name={validator.name}
									hash={block.body.proposer}
								/>
							{:else}
								<Validator imgUrl={''} name={''} hash={block.body.proposer} />
							{/if}
						{/await}
					</td>
				</tr>
			{/each}
		{/if}
	</table>
	<Paginator
		isRangeBlock
		showTotalRows
		bind:itemsPerPage={blocksPerPage}
		apiPaginator
		bind:items={blocks}
		bind:startIndex
		bind:latestBlock
		on:load-page={async () => await fetchBlocks()}
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

	.wrapper {
		@apply flex justify-center;
	}

	.center {
		@apply text-center;
	}

	.age {
		@apply text-color-grey-footer-label;
	}

	.black {
		@apply text-color-black-text;
	}

	.era {
		@apply text-color-grey-footer-label;
	}

	.sorter {
		@apply flex items-center gap-[clamp(4px,0.5vw,0.5vw)];
	}

	.center > .sorter {
		@apply justify-center;
	}
</style>
