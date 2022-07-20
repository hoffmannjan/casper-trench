<script>
	import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
</script>

<div class="overview">
	<div class="title">STAKE INFO</div>
	<div class="extras">
		<table>
			<tr>
				<td class="label"> Stake Amount </td>
				<td class="value">
					<BalanceTransferrable cspr={156324232.03423} cashValue={921232.02} />
				</td>
			</tr>
			<tr>
				<td class="label"> Unstaking </td>
				<td class="value">
					<BalanceTransferrable cspr={156324232.03423} cashValue={921232.02} />
				</td>
			</tr>
			<tr>
				<td class="label"> Total Reward </td>
				<td class="value">
					<BalanceTransferrable cspr={156324232.03423} cashValue={921232.02} />
				</td>
			</tr>
		</table>
	</div>
</div>

<style lang="postcss">
	.overview {
		@apply pt-[1.73vw] pb-[2.08vw] pl-[1.43vw] pr-[1.90vw];
		@apply w-[44.7vw] h-max;
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply rounded-[0.89vw];
	}

	.label {
		@apply font-bold text-[1.07vw] text-color-grey-footer-label;
		@apply w-full;
	}

	.value {
		@apply text-[1.07vw] text-color-table-header;
		@apply flex items-center gap-[0.24vw];
	}

	td {
		@apply pb-[2.2vw] mr-[18.33vw];
		@apply align-top;
	}

	.extras {
		@apply ml-[0.23vw] mr-[1.25vw];
	}

	.title {
		@apply text-color-table-header text-[clamp(12px,1.19vw,1.19vw)] font-bold;
		@apply pb-[1.19vw] mb-[1.61vw];
		@apply border-b-[clamp(1px,0.09vw,0.09vw)] border-color-tooltip-border;
	}
</style>
