<script>
	import BlockHeight from '$lib/components/TableData/BlockHeight.svelte';
	import CircleProgressBar from '$lib/components/TableData/CircleProgressBar.svelte';
	import Contract from '$lib/components/TableData/Contract.svelte';
	import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import PublicKey from '$lib/components/TableData/PublicKey.svelte';
	import Rank from '$lib/components/TableData/Rank.svelte';
	import Validator from '$lib/components/TableData/Validator.svelte';
	import TxHash from '$lib/components/TableData/TxHash.svelte';
	import ContractText from '$lib/components/TableData/ContractText.svelte';
	import AmountCost from '$lib/components/TableData/AmountCost.svelte';
	import FromToAccountHash from '$lib/components/TableData/FromToAccountHash.svelte';
	import AmountChange from '$lib/components/TableData/AmountChange.svelte';
	import Status from '$lib/components/TableData/Status.svelte';
	import Weight from '$lib/components/TableData/Weight.svelte';
	import Paginator from '$lib/components/Paginator/index.svelte';
</script>

<div class="components">
	<table>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
			<th>Header 4</th>
			<th>Header 5</th>
			<th>Header 6</th>
		</tr>
		<div class="divider table-header-border" />
		<tr>
			<td class="center"><Hash hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4" /></td>
			<td><CircleProgressBar progress={0.94} /></td>
			<td><BlockHeight blockDate={Date.parse('July 8, 2022, 12:47')} blockHeight="861,306" /></td>
			<td><Contract text="Contracts" /></td>
			<td><AmountChange cspr="16,324,232.03423" isUp /></td>
			<td><FromToAccountHash /></td>
		</tr>
		<tr>
			<td><Validator /></td>
			<td><CircleProgressBar progress={0.96} /></td>
			<td
				><PublicKey
					activeDate={Date.parse('July 8, 2022, 14:47')}
					hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4"
				/></td
			>
			<td><Rank rank={1} /></td>
			<td><AmountChange cspr="16,324,232.03423" /></td>
			<td><Status status="Active" /></td>
		</tr>
		<tr>
			<td
				><Hash
					hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4"
					noOfCharacters={10}
					variant="right"
				/></td
			>
			<td><CircleProgressBar progress={0.98} /></td>
			<td><BalanceTransferrable cspr="31,821,243" cashValue="921,232.02" /></td>
			<td><TxHash hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4" color="green" /></td>
			<td><ContractText type="Delegate" /></td>
			<td><Status status="Inactive" /></td>
		</tr>
		<tr>
			<td class="center"
				><Hash hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4" noOfCharacters={10} /></td
			>
			<td><CircleProgressBar progress={1} /></td>
			<td><AmountCost cspr="31,821,243" cashValue="921,232.02" /></td>
			<td><TxHash hash="cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4" color="yellow" /></td>
			<td><ContractText type="Transfer" /></td>
			<td><Weight /></td>
		</tr>
	</table>
	<Paginator />
</div>

<style lang="postcss">
	.components {
		@apply p-[clamp(16px,3.57vw,3.57vw)];
		@apply flex flex-col gap-[1vw];
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
