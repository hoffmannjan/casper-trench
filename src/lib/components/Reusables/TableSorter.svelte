<script>
	import PaginatorChevron from '$lib/icons/PaginatorChevron.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let ascendingSelected = false;
	export let descendingSelected = false;

	export let ascendingHandler = () => {
		ascendingSelected = true;
		descendingSelected = false;
		dispatch('sortAscend');
	};

	export let descendingHandler = () => {
		ascendingSelected = false;
		descendingSelected = true;
		dispatch('sortDescend');
	};
</script>

<div class="table-sorter">
	<div class="ascending" on:click={ascendingHandler}>
		<div class="icon">
			<PaginatorChevron color={ascendingSelected ? '#B5B5B5' : '#DCDCDC'} />
		</div>
	</div>
	<div class="descending" on:click={descendingHandler}>
		<div class="icon">
			<PaginatorChevron color={descendingSelected ? '#B5B5B5' : '#DCDCDC'} />
		</div>
	</div>
</div>

<style lang="postcss">
	.table-sorter {
		@apply flex flex-col gap-[0.42vw];
	}

	.ascending > .icon {
		@apply transform rotate-90;
	}

	.descending > .icon {
		@apply transform -rotate-90;
	}

	.ascending,
	.descending {
		@apply cursor-pointer;
	}
</style>
