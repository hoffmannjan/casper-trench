<script lang="ts">
	import { goto } from '$app/navigation';
import AmountInput from '$lib/components/Other/TransferDetails/AmountInput.svelte';
	import StepProgress from '$lib/components/Other/TransferDetails/StepProgress.svelte';
	import Button from '$lib/components/Reusables/Button.svelte';
	import Hash from '$lib/components/TableData/Hash.svelte';
	import SearchIcon from '$lib/icons/SearchIcon.svelte';
	import YellowWarningIcon from '$lib/icons/YellowWarningIcon.svelte';
	import { account } from '$stores/account';
	import { getStats } from '$utils/api';
	import { getAccountBalance } from '$utils/wallets/balance';
	import { delegateUndelegateCasper } from '$utils/wallets/transactions';
	import { onMount } from 'svelte';

	let validatorPublicKey: string;
	let amount = 500; // Minimum CSPR delegatable
	let sendMax = false;
	let step: 0 | 1 | 2 | 3 = 0;
	let csprFee = 2.5;
	let balance: string;
	onMount(async () => {
		balance = await getAccountBalance();
	});
	const delegate = async () => {
		await delegateUndelegateCasper(validatorPublicKey, amount, 'delegate');
	};
	$: amount = sendMax ? parseFloat(balance) - csprFee : 500;

	const limit = 500;
</script>

<div class="transfer-details">
	<div class="container">
		<StepProgress page="Delegation details" bind:step />

		<div class="title">Delegation details</div>
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
				<div>Account</div>
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
			<div class="top">Validator</div>
			<div class="input">
				<input
					type="text"
					bind:value={validatorPublicKey}
					placeholder="Enter address or contract"
				/>
			</div>
		</div>
		<div class="search">
			<div class="icon">
				<SearchIcon grey />
			</div>
			<div class="text">Search for a validator by public key</div>
		</div>

		<AmountInput bind:amount {limit} bind:sendMax/>

		<div class="warning">
			<div class="header">
				<div class="icon">
					<YellowWarningIcon />
				</div>
				<div class="text">WARNING!</div>
			</div>
			<div class="info">
				Delegating max will zero your liquid balance. You won’t be able to undergate, because
				undelegation requires 2.5 CSPR minimum liquid balance.
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
		<!-- TODO style as in design -->
		<div class="mt-5">
			<Button wide gradient on:click={delegate}>Sign and Delegate</Button>
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
	.cspr,
	.search {
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

	.input {
		@apply px-[clamp(16px,1.25vw,1.25vw)] py-[clamp(12px,0.95vw,0.95vw)];
		@apply text-[clamp(16px,1.07vw,1.07vw)] text-color-black-text;
		@apply rounded-[0.48vh] md:rounded-[0.48vw];
		@apply flex items-center justify-between;
		@apply mb-[clamp(4px,0.71vw,0.71vw)];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-input-border;
	}

	.search {
		@apply flex items-center gap-[clamp(4px,0.6vw,0.6vw)];
		@apply mb-[clamp(16px,1.43vw,1.43vw)];
	}

	.search > .icon {
		@apply w-[0.95vh] h-[0.95vh] md:w-[0.95vw] md:h-[0.95vw];
	}
</style>
