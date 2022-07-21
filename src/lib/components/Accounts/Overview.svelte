<script>
	import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
	import CopyIcon from '$lib/icons/CopyIcon.svelte';
</script>

<div class="overview">
	<div class="title">OVERVIEW</div>
	<div class="extras">
		<table>
			<tr>
				<td class="label"> Address type </td>
				<td class="value">
					{'Public Key'}
				</td>
			</tr>
			<tr>
				<td class="label"> Available </td>
				<td class="value">
					<BalanceTransferrable cspr={156324232.03423} cashValue={921232.02} />
				</td>
			</tr>
			<tr>
				<td class="label"> Total Balance </td>
				<td class="value">
					<BalanceTransferrable cspr={156324232.03423} cashValue={921232.02} />
				</td>
			</tr>
			<tr>
				<td class="label"> Public Key </td>
				<td class="value">
					<div class="address-value">
						<div class="text">
							{'012bac1d0ff9240ff0b7b06d555815640497861619ca12583ddef434885416e69b'}
						</div>
						<div class="copy-icon">
							<CopyIcon />
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="label"> Account Hash </td>
				<td class="value">
					<div class="address-value hash">
						<div class="text">
							{'012bac1d0ff9240ff0b7b06d555815640497861619ca12583ddef434885416e69b'}
						</div>
						<div class="copy-icon">
							<CopyIcon />
						</div>
					</div>
				</td>
			</tr>
		</table>
	</div>
</div>

<style lang="postcss">
	.overview {
		@apply pt-[clamp(16px,1.73vw,1.73vw)] pb-[clamp(16px,2.08vw,2.08vw)] pl-[clamp(16px,1.43vw,1.43vw)] pr-[clamp(16px,1.90vw,1.90vw)];
		@apply w-full md:w-[44.7vw];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply rounded-[0.89vh] md:rounded-[0.89vw];
	}

	.label {
		@apply font-bold text-[clamp(12px,1.07vw,1.07vw)] text-color-grey-footer-label;
		@apply w-full;
	}

	.value {
		@apply text-[clamp(12px,1.07vw,1.07vw)] text-color-table-header;
		@apply flex items-center gap-[clamp(4px,0.24vw,0.24vw)];
	}

	td {
		@apply pb-[clamp(4px,2.2vw,2.2vw)];
		@apply align-top;
	}

	.copy-icon {
		@apply w-[clamp(16px,1.96vw,1.96vw)] h-[clamp(16px,1.96vw,1.96vw)];
		@apply cursor-pointer;
	}

	.address-value {
		@apply flex;
	}

	.text {
		@apply break-words;
		@apply max-w-[24vh] md:max-w-[25.65vw];
	}

	.hash {
		@apply text-color-hover-footer-link;
	}

	.extras {
		@apply md:ml-[0.23vw] md:mr-[1.25vw];
	}

	.title {
		@apply text-color-table-header text-[clamp(12px,1.19vw,1.19vw)] font-bold;
		@apply pb-[clamp(4px,1.19vw,1.19vw)] mb-[clamp(4px,1.61vw,1.61vw)];
		@apply border-b-[clamp(1px,0.09vw,0.09vw)] border-color-tooltip-border;
	}
</style>
