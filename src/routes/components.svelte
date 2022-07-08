<script>
import BlockHeight from "$lib/components/TableData/BlockHeight.svelte";
import CircleProgressBar from "$lib/components/TableData/CircleProgressBar.svelte";

import Hash from "$lib/components/TableData/Hash.svelte";
import PublicKey from "$lib/components/TableData/PublicKey.svelte";
import Validator from "$lib/components/TableData/Validator.svelte";

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
			<td class='center'><Hash hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4"/></td>
			<td><CircleProgressBar progress={0.94} /></td>
			<td><BlockHeight blockDate={Date.parse("July 8, 2022, 12:47")} blockHeight="861,306"/></td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
		<tr>
			<td><Validator /></td>
			<td><CircleProgressBar progress={0.96} /></td>
			<td><PublicKey /></td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
		<tr>
			<td><Hash hash='cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4' noOfCharacters={10} variant='right'/></td>
			<td><CircleProgressBar progress={0.98} /></td>
			<td>Header 3</td>
			<td>Header 4</td>
			<td>Header 5</td>
		</tr>
		<tr>
			<td class='center'><Hash hash='cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4' noOfCharacters={10}/></td>
			<td><CircleProgressBar progress={1} /></td>
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
		@apply py-[clamp(8px,0.5vw,0.5vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header text-left;
	}

	td {
		@apply py-[clamp(8px,0.5vw,0.5vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] min-w-max;
	}

	.center {
		@apply flex justify-center;
	}
</style>