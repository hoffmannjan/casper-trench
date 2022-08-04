<script lang="ts">
	import { goto } from '$app/navigation';
	import StepProgress from '$lib/components/Other/TransferDetails/StepProgress.svelte';
	import Button from '$lib/components/Reusables/Button.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import YellowWarningIcon from '$lib/icons/YellowWarningIcon.svelte';
	import { account } from '$stores/account';
	import { getStats } from '$utils/api';
	import { getAccountBalance } from '$utils/wallets/balance';
	import { transferCasper } from '$utils/wallets/transfer';
	import { onMount } from 'svelte';

	let recipient = '';
	let amount = '2.5'; // Minimum CSPR transferrable is 2.5
	let txID = 1659607320459;
	let sendMax = false;
	let step: 0 | 1 | 2 | 3 = 0;
	let csprFee = 0.1;
	let balance: string;
	onMount(async () => {
		balance = await getAccountBalance();
	});
	$: amount = sendMax ? (parseFloat(balance) - csprFee).toString() : '2.5';

	const transfer = async () => {
		await transferCasper(recipient, amount, 'casper-test', txID, csprFee.toString());
	};
	// TO 0203b380d730238dcb2240192b46a91df732541874072f5b9901edc56f8be13d30ac
	// FROM 0202912502ddb9773903185afcccee1dc930c7af44b1a5990423910b128fc1718c9d
</script>

<div class="transfer-details">
	<div class="container">
		<StepProgress page="Transfer Details" bind:step />

		<div class="title">Transfer Details</div>
		{#if !$account}
			<div class="sign-in-alert">
				<div class="icon">
					<YellowWarningIcon black />
				</div>
				<div class="text">
					You’re not signed in. <span
						class="green"
						on:click={() => {
							goto('/sign-in');
						}}>Sign in</span
					> with a compatible wallet like Signer or Ledger to continue.
				</div>
			</div>
		{/if}

		<div class="sender">
			<div class="top">
				<div>Sender</div>
				<div>Balance</div>
			</div>
			<div class="value">
				<span
					><Hash start color="black" noOfCharacters={20} hash={$account?.publicKey || ''} /></span
				>
				<span
					>{#await getAccountBalance()}
						Loading ...
					{:then balance}
						{balance} CSPR
					{/await}</span
				>
			</div>
		</div>

		<div class="input-wrapper">
			<div class="top">Recipient</div>
			<div class="input">
				<input type="text" bind:value={recipient} placeholder="Enter address or contract" />
			</div>
		</div>
		<div class="warning">
			<div class="header">
				<div class="icon">
					<YellowWarningIcon />
				</div>
				<div class="text">WARNING!</div>
			</div>
			<div class="info">
				Please double check the accuracy of the recipient public key. Funds sent to an incorrect
				public key cannot be recovered.
			</div>
		</div>

		<div class="input-wrapper">
			<div class="top">Amount</div>
			<div class="input">
				<input type="text" bind:value={amount} placeholder="Enter amount" min="2.5" />
				<div>CSPR</div>
			</div>
			<label>
				<input type="checkbox" bind:checked={sendMax} />
				Send max amount
			</label>
		</div>

		<div class="input-wrapper">
			<div class="top">Transfer ID (Memo)</div>
			<div class="input">
				<input type="number" bind:value={txID} placeholder="1234567890" />
			</div>
		</div>

		<div class="fee">
			<div class="left">Transaction Fee</div>
			<div class="right">
				<div class="cspr">{csprFee.toFixed(4)} CSPR</div>
				{#await getStats()}
					Loading ...
				{:then stats}
					<!-- TODO Get price from CoinGecko -->
					<div class="cash">
						${Math.floor(csprFee * stats.price * 100000000) / 100000000 || '0'}
					</div>
				{/await}
			</div>
		</div>

		<div class="terms">
			By using Casper.info, you acknowledge that you have read, understood and accepted our. <span
				class="green">Terms of Service.</span
			>
		</div>
		<div class="mt-5">
			<Button wide gradient on:click={transfer}>Sign and Transfer</Button>
		</div>
	</div>
</div>

<style lang="postcss">
	.transfer-details {
		@apply text-color-table-header;
	}

	.title {
		@apply text-color-table-header font-bold text-[clamp(20px,1.43vw,1.43vw)];
		@apply mb-[clamp(12px,0.83vw,0.83vw)] mt-[clamp(16px,2.26vw,2.26vw)];
	}

	.container {
		@apply md:max-w-[39.29vw] mx-4 md:mx-auto;
	}

	.sign-in-alert {
		@apply flex items-center gap-[clamp(4px,0.6vw,0.6vw)];
		@apply text-[clamp(10px,0.77vw,0.77vw)] text-color-black-text;
		@apply px-[clamp(16px,1.25vw,1.25vw)] py-[clamp(12px,0.95vw,0.95vw)];
		@apply bg-color-tranfer-det-green;
		@apply rounded-[0.24vh] md:rounded-[0.24vw];
		@apply mb-[clamp(16px,1.43vw,1.43vw)];
	}

	.sign-in-alert > .icon {
		@apply w-[0.95vh] h-[0.95vh] md:w-[0.95vw] md:h-[0.95vw];
	}

	.top {
		@apply flex justify-between items-center;
		@apply mb-[clamp(4px,0.6vw,0.6vw)];
		@apply text-color-black-text text-[clamp(16px,1.07vw,1.07vw)];
	}

	.value {
		@apply bg-color-sender-background;
		@apply px-[clamp(16px,1.25vw,1.25vw)] py-[clamp(12px,0.95vw,0.95vw)];
		@apply text-[clamp(10px,0.77vw,0.77vw)];
		@apply rounded-[0.48vh] md:rounded-[0.48vw];
		@apply mb-[clamp(16px,1.9vw,1.9vw)];
		@apply flex items-center justify-between;
	}

	.input {
		@apply px-[clamp(16px,1.25vw,1.25vw)] py-[clamp(12px,0.95vw,0.95vw)];
		@apply text-[clamp(16px,1.07vw,1.07vw)] text-color-black-text;
		@apply rounded-[0.48vh] md:rounded-[0.48vw];
		@apply flex items-center justify-between;
		@apply mb-[clamp(4px,0.71vw,0.71vw)];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-input-border;
	}

	.input-wrapper {
		@apply mb-[clamp(16px,1.9vw,1.9vw)];
	}

	.input > input {
		@apply outline-none;
		@apply w-[90%];
	}

	label > input {
		@apply cursor-pointer;
	}

	.warning {
		@apply mb-[clamp(16px,1.43vw,1.43vw)];
		@apply text-[clamp(10px,0.77vw,0.77vw)];
	}

	.terms,
	label,
	.warning,
	.left,
	.cspr {
		@apply text-color-grey-footer-label;
	}

	.terms {
		@apply text-[clamp(10px,0.77vw,0.77vw)];
	}

	.header {
		@apply flex items-center gap-[clamp(4px,0.3vw,0.3vw)];
		@apply text-color-arcadia-yellow;
		@apply mb-[clamp(4px,0.48px,0.48px)];
	}

	.header > .icon {
		@apply w-[0.95vh] h-[0.95vh] md:w-[0.95vw] md:h-[0.95vw];
	}

	.green {
		@apply text-color-hover-footer-link;
		@apply cursor-pointer;
	}

	.fee {
		@apply flex justify-between items-center;
		@apply text-[clamp(16px,1.07vw,1.07vw)];
		@apply mb-[clamp(16px,2.55vw,2.55vw)];
	}

	.cash {
		@apply text-color-table-header text-[clamp(28px,1.90vw,1.90vw)] font-bold;
	}

	.right {
		@apply text-right;
	}
</style>
