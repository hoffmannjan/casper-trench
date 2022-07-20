<script>
	import CopyIcon from '$lib/icons/CopyIcon.svelte';
	import BalanceTransferrable from '../TableData/BalanceTransferrable.svelte';
	import CircleProgressBar from '../TableData/CircleProgressBar.svelte';

	export let publickKey = '01b205c2bd03ce19cd2876ccc21a3566c407b631f3e714532ce0c9956bbac85811';
	export let validatorRewards = {
		cspr: 31821243,
		cashValue: 921232.02
	};
	export let delegatorRewards = {
		cspr: 31821243,
		cashValue: 921232.02
	};
	export let totalStake = {
		cspr: 31821243,
		cashValue: 921232.02
	};
	export let selfStake = {
		cspr: 31821243,
		percentage: 0.0006
	};
	export let commisionRate = 0.05;
	export let performance = 0.94;
</script>

<div class="statistics-card">
	<table class="extras">
		<tr>
			<td class="label">Public Key</td>
			<td class="value"
				><div class="text">
					{publickKey}
				</div>
				<div class="copy-icon">
					<CopyIcon />
				</div></td
			>
		</tr>
		<tr>
			<td class="label">Total Validator Rewards</td>
			<td class="value"
				><BalanceTransferrable
					cspr={validatorRewards.cspr}
					cashValue={validatorRewards.cashValue}
				/></td
			>
		</tr>
		<tr>
			<td class="label">Total Delegator Rewards</td>
			<td class="value"
				><BalanceTransferrable
					cspr={delegatorRewards.cspr}
					cashValue={delegatorRewards.cashValue}
				/></td
			>
		</tr>
		<tr>
			<td class="label">Total Stake</td>
			<td class="value"
				><BalanceTransferrable cspr={totalStake.cspr} cashValue={totalStake.cashValue} /></td
			>
		</tr>
		<tr>
			<td class="label">Self Stake</td>
			<td class="value"
				><BalanceTransferrable
					cspr={selfStake.cspr}
					cashValue={selfStake.percentage}
					percentageFooter
				/></td
			>
		</tr>
		<tr>
			<td class="label">Commission Rate</td>
			<td class="value commission">{(commisionRate * 100).toFixed(2)}%</td>
		</tr>
		<tr>
			<td class="label">Performance</td>
			<td class="value"><CircleProgressBar progress={performance} /></td>
		</tr>
	</table>
</div>

<style lang="postcss">
	.statistics-card {
		@apply flex flex-col items-center;
		@apply pt-[2.5vw] pb-[2.92vw] px-[2.5vw];
		@apply w-[57.38vw];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply rounded-[0.89vw];
	}

	.label {
		@apply font-bold text-[1.07vw] text-color-grey-footer-label;
		@apply w-full;
	}

	.value {
		@apply text-[1.07vw] text-color-hover-footer-link;
		@apply flex items-center gap-[0.24vw];
	}

	td {
		@apply pb-[2.2vw];
		@apply align-top;
	}

	.copy-icon {
		@apply w-[1.96vw] h-[1.96vw];
		@apply cursor-pointer;
	}

	.commission {
		@apply text-color-table-header text-[1.07vw];
	}
</style>
