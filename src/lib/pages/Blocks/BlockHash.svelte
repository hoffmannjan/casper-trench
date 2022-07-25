<script lang="ts">
	import BlockProofs from '$lib/components/Blocks/BlockProofs.svelte';

	import TransactionsTable from '$lib/components/Blocks/TransactionsTable.svelte';

	import Button from '$lib/components/Reusables/Button.svelte';
	import CrossedEyeIcon from '$lib/icons/CrossedEyeIcon.svelte';
	import EyeIcon from '$lib/icons/EyeIcon.svelte';
	import SwitchChevron from '$lib/icons/SwitchChevron.svelte';
	import VerifiedIcon from '$lib/icons/VerifiedIcon.svelte';
	import { millisToFormat, timeAgo } from '$utils/converters';
	import { slide } from 'svelte/transition';

	let blockHeight = 928323;
	let era = '5508';
	let timestamp = Date.parse('July 21, 2022 18:54');
	let validator = {
		imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
		name: 'Ghost Staking',
		hash: '01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31'
	};
	let blockHash = '01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31';
	let stateRoofHash = '01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31';
	let transactions = [
		{
			hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a',
			from: {
				imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
				hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a'
			},
			to: {
				imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
				hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a'
			},
			value: 931
		},
		{
			hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a',
			from: {
				imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
				hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a'
			},
			to: {
				imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
				hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a'
			},
			value: 931
		},
		{
			hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a',
			from: {
				imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
				hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a'
			},
			to: {
				imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
				hash: '805734b4aajibvgisujvb49u925bv29759b25bf3cdf9d1a'
			},
			value: 931
		}
	];

	let proofs = [
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		},
		{
			publicKey: '01000e6fce753895c0d08d5d6af62db4e9b0d070f10e69e2c6badf977b29bbeeee',
			signature:
				'01e4979f2b66f814899a514c2bcd339ba0f1644b2b84643443645d3a5836d550cac0db81c0319e72e04212387327eb7a5b6b7487baa6908dc0c1c125a1a1b6b905'
		}
	];

	let showTransactions = false;
	let showProofs = false;
</script>

<div class="block-hash">
	<div class="wrapper">
		<div class="block-buttons">
			<Button block>Blocks #{blockHeight - 1}</Button>
			<Button block active>Blocks #{blockHeight}</Button>
			<Button block>Blocks #{blockHeight + 1}</Button>
		</div>

		<div class="top">
			<div class="title">
				Blocks {blockHeight}
			</div>
			<div class="sub-title">
				<div class="blocks">
					<span class="green">Blocks</span> / Blocks {blockHeight}
				</div>
			</div>
		</div>

		<div class="details">
			<table class="extras">
				<tr>
					<td class="label">Block Height</td>
					<td class="value">{blockHeight}</td>
				</tr>
				<tr>
					<td class="label">Era ID</td>
					<td class="value">{era}</td>
				</tr>
				<tr>
					<td class="label">Timestamp</td>
					<td class="value">
						<div class="time">{new Date(timestamp)}</div>
						<div class="ago">{`${timeAgo(millisToFormat(Date.now() - timestamp))} ago`}</div>
					</td>
				</tr>
				<tr>
					<td class="label">Validated by</td>
					<td class="value">
						<div class="validator">
							<div class="logo">
								<img src={validator.imgUrl} alt="validator-icon" />
							</div>
							<div class="dets">
								<div class="name">
									<div class="text">
										{validator.name}
									</div>
									<div class="verified-icon">
										<VerifiedIcon />
									</div>
								</div>
								<div class="hash">
									{validator.hash}
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="label">Block Hash</td>
					<td class="value">{blockHash}</td>
				</tr>
				<tr>
					<td class="label">Transaction</td>
					<td class="value">
						<div
							class="transaction-button green"
							on:click={() => {
								showTransactions = transactions && transactions.length > 0 && !showTransactions;
							}}
						>
							<div class="text">
								{transactions.length || 0} Transaction{`${transactions.length === 1 ? '' : 's'}`}
							</div>
							<div class="icon" class:flipped={showTransactions}>
								<SwitchChevron />
							</div>
						</div>
						{#if showTransactions}
							<TransactionsTable {transactions} />
						{/if}
					</td>
				</tr>
				<tr>
					<td class="label">State Roof Hash</td>
					<td class="value">{stateRoofHash}</td>
				</tr>
				<tr>
					<td class="label">Proofs</td>
					<td class="value">
						<div
							class="proofs-button green"
							on:click={() => {
								showProofs = !showProofs;
							}}
						>
							<div class="text">
								{#if !showProofs}
									Show
								{:else}
									Hide
								{/if}
							</div>
							<div class="eye-icon">
								{#if !showProofs}
									<div transition:slide>
										<EyeIcon />
									</div>
								{:else}
									<div transition:slide>
										<CrossedEyeIcon />
									</div>
								{/if}
							</div>
						</div>
						{#if showProofs}
							<BlockProofs {proofs} />
						{/if}
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper {
		@apply md:w-[82.2vw];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply px-[clamp(16px,2.38vw,2.38vw)] py-[clamp(16px,2.38vw,2.38vw)] mx-auto;
		@apply relative;
		@apply text-color-table-header;
		@apply rounded-[0.89vh] md:rounded-[0.89vw];
	}

	.block-buttons {
		@apply flex gap-[clamp(4px,1.79vw,1.79vw)];
		@apply absolute top-[clamp(16px,1.79vw,1.79vw)] right-[clamp(16px,2.38vw,2.38vw)];
	}

	.title {
		@apply text-[clamp(16px,1.43vw,1.43vw)] font-bold;
	}

	.sub-title {
		@apply text-[clamp(12px,1.07vw,1.07vw)];
		@apply mb-[clamp(16px,2.74vw,2.74vw)];
	}

	.green {
		@apply text-color-hover-footer-link;
	}

	.top {
		@apply border-b-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
	}

	.details {
		@apply pt-[clamp(16px,2.14vw,2.14vw)];
	}

	.label {
		@apply font-bold text-[clamp(16px,1.07vw,1.07vw)] text-color-grey-footer-label;
		@apply md:w-[18.45vw];
	}

	.value {
		@apply text-[clamp(16px,1.07vw,1.07vw)];
		@apply flex flex-col gap-[0.24vw];
		@apply w-full;
	}

	td {
		@apply pb-[clamp(16px,2.2vw,2.2vw)];
		@apply align-top;
	}

	.ago {
		@apply text-[clamp(10px,0.95vw,0.95vw)] text-color-grey-footer-label;
		@apply bg-color-ago-background;
		@apply p-[clamp(4px,0.3vw,0.3vw)];
		@apply max-w-max;
	}

	.validator {
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply p-[clamp(16px,1.19vw,1.19vw)];
		@apply rounded-[0.6vh] md:rounded-[0.6vw];
		@apply flex items-center gap-[clamp(8px,0.71vw,0.71vw)];
	}

	.logo {
		@apply w-[2.98vh] h-[2.98vh] md:w-[2.98vw] md:h-[2.98vw];
	}

	.logo > img {
		@apply rounded-full;
	}

	.name {
		@apply flex items-center gap-[clamp(8px,0.5vw,0.5vw)];
	}

	.verified-icon {
		@apply w-[1.31vh] h-[1.31vh] md:w-[1.31vw] md:h-[1.31vw];
	}

	.dets > .hash {
		@apply text-color-hover-footer-link;
	}

	.transaction-button {
		@apply flex items-center gap-[clamp(4px,0.48vw,0.48vw)];
		@apply cursor-pointer;
		@apply max-w-max;
	}

	.icon {
		@apply w-[0.54vw] h-[0.33vw];
		@apply transition-all;
	}

	.flipped {
		@apply transform rotate-180;
	}

	.eye-icon {
		@apply w-[1.19vh] md:w-[1.19vw];
	}

	.proofs-button {
		@apply flex items-center gap-[0.3vw];
		@apply py-[clamp(4px,0.48vw,0.48vw)] px-[clamp(6px,0.71vw,0.71vw)];
		@apply bg-color-translucent-green;
		@apply rounded-[0.3vh] md:rounded-[0.3vw];
		@apply max-w-max;
		@apply cursor-pointer;
	}
</style>
