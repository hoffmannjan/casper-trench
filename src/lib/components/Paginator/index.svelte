<script lang="ts">
	import PaginatorChevron from '$lib/icons/PaginatorChevron.svelte';
	import ShowRow from './ShowRow.svelte';

	let page = 1;
	let itemsPerPage: number;
	let startIndex = 0;
	export let showTotalRows = true;
	export let items: {}[] = [];
	export let pagedItems: {}[] = [];
	const pageItems = () => {
		pagedItems = items.filter((item, index) => {
			if (index >= startIndex && index < startIndex + itemsPerPage) {
				return item;
			}
		});
	};
	$: items && itemsPerPage && pageItems();
	$: totalPages = items && pageItems && Math.ceil(items.length / itemsPerPage);
</script>

<div class="paginator">
	{#if showTotalRows}
		<div class="total">{items && items.length} total rows</div>
	{:else}
		<ShowRow bind:itemsPerPage />
	{/if}
	<div class="paginator-buttons">
		{#if showTotalRows}
			<ShowRow bind:itemsPerPage />
		{/if}
		<div class="actual-paginator">
			<button
				type="button"
				on:click={() => {
					startIndex = 0;
					page = 1;
					pageItems();
				}}
				class="button">First</button
			>
			<button
				type="button"
				on:click={() => {
					if (page > 1) {
						page--;
						startIndex -= itemsPerPage;
						pageItems();
					}
				}}
				class="button"
			>
				<div class="icon">
					<PaginatorChevron />
				</div>
			</button>
			<div class="text">
				Page {page} of {totalPages.toLocaleString()}
			</div>
			<button
				type="button"
				on:click={() => {
					if (page < totalPages) {
						page++;
						startIndex += itemsPerPage;
						pageItems();
					}
				}}
				class="button"
			>
				<div class="icon right">
					<PaginatorChevron />
				</div>
			</button>
			<button
				type="button"
				on:click={() => {
					page = totalPages;
					startIndex = (totalPages - 1) * itemsPerPage;
					pageItems();
				}}
				class="button">Last</button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	.paginator {
		@apply flex justify-between;
		@apply text-[clamp(8px,0.95vw,0.95vw)] text-color-grey-footer-label;
	}

	.paginator-buttons {
		@apply flex gap-[1.19vw];
	}

	.actual-paginator {
		@apply flex gap-[0.71vw] items-center;
	}

	.text {
		@apply mx-[0.6vw];
	}

	.right {
		@apply transform rotate-180;
	}

	.icon {
		@apply h-[0.95vw];
	}

	.button {
		@apply px-[0.83vw] py-[0.6vw];
		@apply leading-none;
		@apply border-[0.12vw] rounded-[0.3vw] border-color-paginator-border;
		@apply cursor-pointer;
	}
</style>
