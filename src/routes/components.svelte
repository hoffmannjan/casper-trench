<script>
	import TableSorter from '$lib/components/Reusables/TableSorter.svelte';

	import Tooltip from '$lib/components/Reusables/Tooltip.svelte';

	import TabMenu from '$lib/components/TabMenu/index.svelte';
	import SampleComponent1 from '$lib/components/TabMenu/SampleComponent1.svelte';
	import SampleComponent2 from '$lib/components/TabMenu/SampleComponent2.svelte';

	let menuOptions = [
		{
			title: 'Table',
			component: SampleComponent1
		},
		{
			title: 'Empty',
			component: SampleComponent2
		}
	];
</script>

<div class="components">
	<div class="flex gap-[1vw]">
		<Tooltip text="Hello World" />
		<TableSorter
			on:sortAscend={() => {
				console.log('Sort Ascending Order');
			}}
			on:sortDescend={() => {
				console.log('Sort Ascending Order');
			}}
		/>
	</div>
	<TabMenu {menuOptions} />
</div>

<style lang="postcss">
	.components {
		@apply p-[clamp(16px,3.57vw,3.57vw)];
		@apply flex flex-col gap-[1vw];
	}
</style>
