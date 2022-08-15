<script>
	import { browser } from '$app/env';
	import Button from '$lib/components/Reusables/Button.svelte';
	import CloudDownloadIcon from '$lib/icons/CloudDownloadIcon.svelte';
	import Smudge from '$lib/icons/Smudge.svelte';
	import { connectCasperSigner } from '$utils/wallets/connection';
	let isCasperSignerAvailable = false;
	const wallets = [
		{
			name: 'Casper Signer',
			info: 'Connect and sign in via Google Chrome extension'
		},
		{
			name: 'Ledger',
			info: 'Connect and sign in with your Ledger wallet'
		},
		{
			name: 'Torus Wallet',
			info: 'Sign in or setup a new account via Torus Wallet (using OAuth with google, facebook, twitch, reddit, discord and more).'
		}
	];
	$: if (browser) {
		isCasperSignerAvailable = window.casperlabsHelper ? true : false;
	}
</script>

<div class="sign-in-page">
	<div class="bg-special">
		<Smudge />
	</div>

	{#each wallets as wallet}
		<div class="container">
			<img
				src="/images/png/{wallet.name.toLowerCase().replace(' ', '-')}.png"
				alt={wallet.name.toLowerCase().replace(' ', '-')}
			/>
			<div class="title">
				{wallet.name}
			</div>
			<div class="info">
				{wallet.info}
			</div>
			<div class="button">
				{#if wallet.name.toLowerCase().includes('casper')}
					<Button
						gradient
						wide
						on:click={async () => {
							if (wallet.name.toLowerCase().includes('casper')) {
								if (browser) {
									if (window.casperlabsHelper) {
										await connectCasperSigner();
									} else {
										console.log('No signer');
									}
								} else {
									console.log('Not browser');
								}
							}
						}}
					>
						{wallet.name.toLowerCase().includes('ledger') ? 'Connect' : 'Sign In'}
					</Button>
				{:else}
					<Button gradient wide>
						{wallet.name.toLowerCase().includes('ledger') ? 'Connect' : 'Sign In'}
					</Button>
				{/if}
				{#if wallet.name.toLowerCase().includes('casper')}
					<a
						href="https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce"
						target="_blank"
						class="download"
					>
						<div class="icon">
							<CloudDownloadIcon />
						</div>
						<div class="text">Download Signer</div>
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.sign-in-page {
		@apply px-4 pt-[clamp(16px,5.95vw,5.95vw)] pb-[clamp(16px,7.74vw,7.74vw)] md:min-h-[30vw];
		@apply flex flex-col md:flex-row justify-center items-center gap-[clamp(16px,4.46vw,4.46vw)];
	}

	.container {
		@apply md:max-w-[21vw] h-full md:min-h-[32vw];
		@apply pt-[clamp(16px,2.32vw,2.32vw)] px-[16px];
		@apply rounded-[1.19vh] md:rounded-[1.19vw];
		@apply shadow-[0px_0px_11px] shadow-color-shadow-black;
		@apply flex flex-col items-center;
		@apply bg-white;
		@apply relative;
	}

	img {
		@apply w-[7.38vh] h-[7.38vh] md:w-[7.38vw] md:h-[7.38vw];
		@apply mb-[clamp(16px,1.19vw,1.19vw)];
	}

	.title {
		@apply text-[clamp(20px,1.43vw,1.43vw)] text-color-table-header font-medium;
	}

	.info {
		@apply text-[clamp(16px,1.07vw,1.07vw)] text-color-grey-footer-label text-center;
		@apply md:max-w-[17vw] md:min-h-[8vw];
	}

	.button {
		@apply flex flex-col items-center;
	}

	.bg-special {
		@apply absolute;
		@apply mx-auto;
		@apply -z-10;
		@apply md:w-[90vw];
	}

	.icon {
		@apply h-[0.95vh] w-[0.95vh] md:h-[0.95vw] md:w-[0.95vw];
	}

	.download {
		@apply flex items-center gap-[clamp(4px,0.48vw,0.48vw)];
		@apply text-[clamp(16px,1.07vw,1.07vw)] text-color-hover-footer-link whitespace-nowrap;
		@apply cursor-pointer;
		@apply mt-[clamp(16px,1.79vw,1.79vw)] mx-auto;
	}
</style>
