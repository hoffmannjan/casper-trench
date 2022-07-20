<script>
	import FacebookGreenLogo from '$lib/icons/FacebookGreenLogo.svelte';

	import GithubGreenLogo from '$lib/icons/GithubGreenLogo.svelte';
	import OpenIcon from '$lib/icons/OpenIcon.svelte';
	import TelegramGreenLogo from '$lib/icons/TelegramGreenLogo.svelte';
	import TwitterGreenLogo from '$lib/icons/TwitterGreenLogo.svelte';
	import VerifiedIcon from '$lib/icons/VerifiedIcon.svelte';

	import Button from '../Reusables/Button.svelte';

    export let imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Gnomelogo-footprint.svg/1200px-Gnomelogo-footprint.svg.png';
	export let status = 'Active';
	export let website = 'https://everstake.one/';
	export let email = 'inbox@everstake.one';
	export let twitter = '/';
	export let facebook = '/';
	export let telegram = '/';
	export let github = '/';
</script>

<div class="validator-card">
	<div class="logo" class:inactive={status !== 'Active'}>
		<img src={imgSrc} alt="validator-logo" />
		{#if status === 'Active'}
			<div class="online-dot" />
		{/if}
	</div>
	<div class="name-wrapper">
		<div class="name">Everstake</div>
		<div class="verified-icon">
			<VerifiedIcon />
		</div>
	</div>
	<div class="details">
		Reliable and experienced staking service provider from Ukraine. Everstake helps institutional
		investors and regular token holders to profit off their crypto assets. We operate in a wide
		range of Proof of Stake blockchains, providing our customers with numerous options to choose
		from. Visit our website for more details.
	</div>
	<div class="extras">
		<div class="labels-values">
			<div class="label">Website</div>
			<div class="label">Email</div>
			<div class="label">Socials</div>
		</div>
		<div class="validator-values">
			<a class="value" href={website}>
				<div class="text">
					{website}
				</div>
				<div class="icon">
					<OpenIcon />
				</div>
			</a>
			<div class="value">
				<a href="mailto:{email}" class="text">
					{email}
				</a>
			</div>
			<div class="socials">
				{#if twitter.length > 0}
					<a href={twitter} class="social"><TwitterGreenLogo /></a>
				{/if}
				{#if facebook.length > 0}
					<a href={facebook} class="social"><FacebookGreenLogo /></a>
				{/if}
				{#if telegram.length > 0}
					<a href={telegram} class="social"><TelegramGreenLogo /></a>
				{/if}
				{#if github.length > 0}
					<a href={github} class="social"><GithubGreenLogo /></a>
				{/if}
			</div>
		</div>
	</div>
	<div class="buttons">
		<Button gradient>Delegate</Button>
		<Button red>Undelegate</Button>
	</div>
</div>


<style lang='postcss'>
    .validator-card {
		@apply flex flex-col items-center;
		@apply pt-[3.39vw] pb-[3.21vw] px-[2.68vw];
		@apply w-[32.32vw];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply shadow-[0px_0.18vw_1.37vw_0px_rgba(244,246,255,0.5)];
		@apply rounded-[0.89vw];
	}

	.logo {
		@apply w-[9.01vw] h-[9.01vw];
		@apply p-[0.24vw];
		@apply border-color-arcadia-green border-[clamp(1px,0.24vw,0.24vw)];
		@apply rounded-full;
		@apply relative;
		@apply mb-[1.19vw];
	}

	.logo.inactive {
		@apply border-color-arcadia-red;
	}

	img {
		@apply rounded-full;
		@apply w-full h-full;
	}

	.online-dot {
		@apply absolute;
		@apply w-[1.19vw] h-[1.19vw];
		@apply bg-color-arcadia-green;
		@apply rounded-full;
		@apply bottom-0 right-0;
		@apply transform translate-y-[-0.55vw] translate-x-[-0.55vw] z-30;
	}

	.verified-icon {
		@apply w-[1.31vw] h-[1.31vw];
	}

	.name-wrapper {
		@apply flex items-center gap-[0.24vw];
		@apply mb-[1.37vw];
	}

	.name {
		@apply font-medium text-[1.55vw] text-color-table-header;
	}

	.details {
		@apply text-color-table-header text-[0.95vw];
		@apply mb-[1.19vw];
	}

	.labels-values > .label {
		@apply font-bold text-[1.07vw] text-color-grey-footer-label;
	}

	.validator-values > .value {
		@apply text-[1.07vw] text-color-hover-footer-link;
	}

	.extras {
		@apply flex items-center justify-between;
		@apply w-full;
		@apply pr-[3.33vw];
		@apply mb-[2.32vw];
	}

	.extras > div {
		@apply h-full;
		@apply flex flex-col justify-between gap-[1.5vw];
		@apply leading-none;
	}

	.validator-values > .value {
		@apply flex gap-[0.48vw];
	}

	.validator-values > .value > .text {
		@apply cursor-pointer;
	}

	.buttons {
		@apply flex items-center gap-[2.98vw] flex-row;
	}

	.socials {
		@apply flex items-center gap-[1.31vw];
	}

	.social {
		@apply h-[0.83vw];
		@apply cursor-pointer;
	}
</style>