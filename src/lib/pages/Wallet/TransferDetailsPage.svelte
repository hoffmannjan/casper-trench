<script lang="ts">
	import StepProgress from '$lib/components/Other/StepProgress.svelte';
	import TransferStepFour from '$lib/components/Other/TransferDetails/TransferStepFour.svelte';
	import TransferStepOne from '$lib/components/Other/TransferDetails/TransferStepOne.svelte';
	import TransferStepThree from '$lib/components/Other/TransferDetails/TransferStepThree.svelte';
	import TransferStepTwo from '$lib/components/Other/TransferDetails/TransferStepTwo.svelte';
	import { account } from '$stores/account';
	import { getAccountBalance } from '$utils/wallets/balance';
	import { getTransferDeploy, transferCasper } from '$utils/wallets/transactions';
import { CLPublicKey } from 'casper-js-sdk';
	import { onMount } from 'svelte';

	let recipient = '';
	// TODO remocve placeholder public key
	let recipientPublicKey = '0203fdbddc1c8e93678f0b19644adbfd2989962a909029bf8172a9ded1ae7d9a4cf3';
	let amount = 2.5; // Minimum CSPR transferrable is 2.5
	let txID = 1659607320459;
	let step: 0 | 1 | 2 | 3 = 0;
	let csprFee = 0.1;
	let balance: string;
	let deployHash = '';
	let recipientAccountHash = '';
	onMount(async () => {
		balance = await getAccountBalance();
	});

	const transfer = async () => {
		await transferCasper(recipientPublicKey, amount, 'casper-test', txID);
	};
	// TO 0203fdbddc1c8e93678f0b19644adbfd2989962a909029bf8172a9ded1ae7d9a4cf3
	// FROM 013e85a9c63da2877b923455e776d0d3ed98030a6a4737f93e19ab0a3a62258ed0
</script>

<div class="transfer-details">
	<div class="container">
		<StepProgress page="Transfer Details" bind:step />

		{#if step === 0}
			<TransferStepOne
				account={$account}
				bind:recipientPublicKey
				bind:amount
				bind:txID
				bind:csprFee
				{balance}
				on:click={() => {
					step = 1;
				}}
			/>
		{:else if step === 1}
			<TransferStepTwo
				{recipientPublicKey}
				{amount}
				{csprFee}
				on:click={() => {
					const { deploy, toAccountHash } = getTransferDeploy(
						recipientPublicKey,
						amount,
						'casper-test',
						txID
					);
					// console.log(deploy, toAccountHash);
					// deploy?.hash;
					// recipientAccountHash = toAccountHash;
					// step = 2;
				}}
			/>
		{:else if step === 2}
			<TransferStepThree
				{recipientPublicKey}
				{recipientAccountHash}
				{deployHash}
				{amount}
				on:click={() => {
					step = 3;
				}}
			/>
		{:else}
			<TransferStepFour
				account={$account}
				{recipient}
				{amount}
				on:click={() => {
					step = 0;
				}}
			/>
		{/if}
	</div>
</div>

<style lang="postcss">
	.transfer-details {
		@apply text-color-table-header;
	}

	.container {
		@apply md:max-w-[39.29vw] mx-4 md:mx-auto;
	}
</style>
