<script lang="ts">
	import { slide } from 'svelte/transition';

	import CrossedEyeIcon from '$lib/icons/CrossedEyeIcon.svelte';
	import EyeIcon from '$lib/icons/EyeIcon.svelte';
	import VerifiedIcon from '$lib/icons/VerifiedIcon.svelte';
	import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
	import TransactionDetailsSuccessIcon from '$lib/icons/TransactionDetailsSuccessIcon.svelte';

	import { millisToFormat, timeAgo } from '$utils/converters';
	import BalanceTransferrable from '$lib/components/TableData/BalanceTransferrable.svelte';
	import { sampleJsonData } from '$utils/sampleData';
	import CopyIcon from '$lib/icons/CopyIcon.svelte';
	import TreeToggle from '$lib/components/Reusables/TreeToggle.svelte';

	let transactionStatus = 'success';
	let transactionHash = '01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31';
	let blockHeight = 928323;
	let timestamp = Date.parse('July 22, 2022 14:46');
	let from = {
		imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
		name: 'Ghost Staking',
		hash: '01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31'
	};
	let to = {
		imgUrl: 'https://ghoststaking.com/wp-content/uploads/2021/08/qymt4x.jpg',
		name: 'Ghost Staking',
		hash: '01c60fe433d3a22ec5e30a8341f4bda978fa81c2b94e5a95f745723f9a019a3c31'
	};
	let value = 9231.03423;
	let fee = 9231.03423;
	let gasPrice = 1;
	let ttl = 30;

	let jsonData = sampleJsonData;

	let showRawData = false;
</script>

<div class="transaction-details">
	<div class="top">
		<span class="green">Transaction</span> / Transaction Details
	</div>
	<div class="wrapper">
		<div
			class="download-button"
			on:click={() => {
				//Download Functionality
			}}
		>
			<DownloadIcon />
		</div>

		<div class="status">
			<div class="icon">
				{#if transactionStatus.toLowerCase() === 'success'}
					<TransactionDetailsSuccessIcon />
				{:else}
					<!-- Fail Icon -->
				{/if}
			</div>
			<div class="status-text" class:success={transactionStatus.toLowerCase() === 'success'}>
				{transactionStatus.toLowerCase() === 'success'
					? 'TRANSFER SUCCESS'
					: transactionStatus.toUpperCase()}
			</div>
			<div class="amount">
				<div class="value">
					{value.toLocaleString()}
				</div>
				<div class="cspr">CSPR</div>
			</div>
		</div>

		<div class="details">
			<table class="extras">
				<tr>
					<td class="label">Transactions Hash</td>
					<td class="value">{transactionHash}</td>
				</tr>

				<tr>
					<td class="label">Block Height</td>
					<td class="value green">{blockHeight}</td>
				</tr>

				<tr>
					<td class="label">Timestamp</td>
					<td class="value">
						<div class="time">{new Date(timestamp)}</div>
						<div class="ago">{`${timeAgo(millisToFormat(Date.now() - timestamp))} ago`}</div>
					</td>
				</tr>

				<tr>
					<td class="label">From (Public Key)</td>
					<td class="value">
						<div class="validator">
							<div class="logo">
								<img src={from.imgUrl} alt="validator-icon" />
							</div>
							<div class="dets">
								<div class="name">
									<div class="text">
										{from.name}
									</div>
									<div class="verified-icon">
										<VerifiedIcon />
									</div>
								</div>
								<div class="hash">
									{from.hash}
								</div>
							</div>
						</div>
					</td>
				</tr>

				<tr>
					<td class="label">To (Public Key)</td>
					<td class="value">
						<div class="validator">
							<div class="logo">
								<img src={to.imgUrl} alt="validator-icon" />
							</div>
							<div class="dets">
								<div class="name">
									<div class="text">
										{to.name}
									</div>
									<div class="verified-icon">
										<VerifiedIcon />
									</div>
								</div>
								<div class="hash">
									{to.hash}
								</div>
							</div>
						</div>
					</td>
				</tr>

				<tr>
					<td class="label">Value</td>
					<td class="value"><BalanceTransferrable cspr={value} /></td>
				</tr>

				<tr>
					<td class="label">Transaction Fee</td>
					<td class="value"><BalanceTransferrable cspr={fee} /></td>
				</tr>

				<tr>
					<td class="label">Gas Price</td>
					<td class="value">{gasPrice} motes</td>
				</tr>

				<tr>
					<td class="label">TTL</td>
					<td class="value">{ttl} m</td>
				</tr>

				<tr>
					<td class="label">Raw Data</td>
					<td class="value">
						<div class="raw-buttons">
							<div
								class="proofs-button green"
								on:click={() => {
									showRawData = !showRawData;
								}}
							>
								<div class="text">Show</div>
								<div class="eye-icon">
									{#if !showRawData}
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
							{#if showRawData}
								<div class="copy-button">
									<div class="text">
										Copy
									</div>
									<div class="copy-icon" on:click={() => {
										navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
									}}>
										<CopyIcon />
									</div>
								</div>
							{/if}
						</div>
						{#if showRawData}
							<div class="raw-data" transition:slide>
								<TreeToggle text="" data={jsonData} />
							</div>
						{/if}
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>

<style lang="postcss">
	.transaction-details {
		@apply text-color-table-header text-[clamp(12px,1.07vw,1.07vw)];
	}

	.top {
		@apply mb-[clamp(8px,1.43vw,1.43vw)];
	}

	.green {
		@apply text-color-hover-footer-link;
	}

	.wrapper {
		@apply md:w-[82.2vw];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply px-[clamp(16px,2.38vw,2.38vw)] py-[clamp(16px,2.38vw,2.38vw)] mx-auto;
		@apply relative;
		@apply text-color-table-header;
		@apply rounded-[0.89vh] md:rounded-[0.89vw];
	}

	.download-button {
		@apply absolute top-[clamp(16px,1.79vw,1.79vw)] right-[clamp(16px,2.38vw,2.38vw)];
		@apply w-[clamp(20px,2.86vw,2.86vw)];
		@apply cursor-pointer;
	}

	.green {
		@apply text-color-hover-footer-link;
	}

	.label {
		@apply font-bold text-[clamp(16px,1.07vw,1.07vw)] text-color-grey-footer-label;
		@apply md:min-w-[14.11vw];
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

	.status {
		@apply flex flex-col items-center;
	}

	.icon {
		@apply w-[clamp(24px,7.5vw,7.5vw)] h-[clamp(24px,7.5vw,7.5vw)];
	}

	.status-text {
		@apply text-color-arcadia-red font-bold text-[clamp(16px,1.43vw,1.43vw)];
		@apply mb-[clamp(8px,0.71vw,0.71vw)];
	}

	.success {
		@apply text-color-arcadia-green;
	}

	.amount {
		@apply flex gap-[clamp(4px,0.48vw,0.48vw)] items-center;
		@apply mb-[clamp(16px,3.93vw,3.93vw)];
	}

	.amount > .value {
		@apply text-[clamp(32px,2.86vw,2.86vw)] font-bold;
	}

	.amount > .cspr {
		@apply text-[clamp(24px,1.90vw,1.90vw)] font-bold text-color-grey-footer-label;
	}

	.raw-data {
		@apply rounded-[0.89vh] md:rounded-[0.89vw];
		@apply p-[clamp(16px,1.43vw,1.43vw)];
		@apply md:max-w-[57.86vw];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
	}

	pre {
		@apply overflow-y-auto;
		@apply max-h-[25.76vw];
	}

	pre::-webkit-scrollbar {
		@apply w-[clamp(4px,0.48vw,0.48vw)] h-[clamp(4px,0.48vw,0.48vw)];
	}

	pre::-webkit-scrollbar-track {
		@apply bg-transparent;
	}

	pre::-webkit-scrollbar-thumb {
		@apply bg-color-tooltip-border;
		@apply rounded-[0.77vh] md:rounded-[0.77vw];
		@apply pr-[clamp(4px,0.48vw,0.48vw)];
	}

	.raw-buttons {
		@apply flex items-center gap-[clamp(4px,0.54vw,0.54vw)];
	}

	.copy-button {
		@apply flex items-center;
		@apply py-[clamp(4px,0.48vw,0.48vw)] pl-[clamp(6px,0.71vw,0.71vw)];
		@apply bg-color-copy-btn-bg;
		@apply rounded-[0.3vh] md:rounded-[0.3vw];
		@apply max-w-max;
		@apply cursor-pointer;
	}
</style>
