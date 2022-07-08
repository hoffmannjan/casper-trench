<script>
import Hash from "$lib/components/TableData/Hash.svelte";

</script>
<div class="components">
	<table>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
			<th>Header 4</th>
			<th>Header 5</th>
		</tr>
		<div class="divider table-header-border"/>
		<tr>
			<td><Hash hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4"/></td>
			<td>Header 2</td>
			<td>Header 3</td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
		<tr>
			<td>Header 1</td>
			<td>Header 2</td>
			<td>Header 3</td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
		<tr>
			<td>Header 1</td>
			<td>Header 2</td>
			<td>Header 3</td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
		<tr>
			<td>Header 1</td>
			<td>Header 2</td>
			<td>Header 3</td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
	</table>
</div>

<style lang='postcss'>
	.components {
		@apply p-[clamp(16px,3.57vw,3.57vw)];
	}

	table {
		@apply table-auto w-full relative;
	}

	.divider {
		@apply h-[clamp(1px,0.18vw,0.18vw)] w-full;
		@apply absolute;
	}

	th {
		@apply py-[clamp(8px,1.19vw,1.19vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header text-left;
	}

	td {
		@apply py-[clamp(8px,1.19vw,1.19vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)];
	}
</style>