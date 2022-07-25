<script>
	import ArcadiaLogo from '$lib/icons/ArcadiaLogo.svelte';
	import CasperTrenchLogo from '$lib/icons/CasperTrenchLogo.svelte';
	import DiscordIcon from '$lib/icons/DiscordIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
</script>

<div class="footer">
	<img src="/images/png/t-footer-bg.png" alt="bg" class="bg" draggable="false" />
	<div class="arcadia-section">
		<div class="logo">
			<ArcadiaLogo />
		</div>
		<div class="link-section">
			<div class="links">
				<div class="title">About Arcadia</div>
				<a href="/" class="link"> About us </a>
				<a href="/" class="link"> Stake with us </a>
				<a href="/" class="link"> Contact us </a>
				<a href="/" class="link"> Terms and Service </a>
				<a href="/" class="link"> Privacy Policy </a>
			</div>
			<div class="links">
				<div class="title">About Caspertrench</div>
				<a href="/" class="link"> Github </a>
				<a href="/" class="link"> License </a>
				<a href="/" class="link"> Changelog </a>
				<a href="/" class="link"> Feature Requests </a>
			</div>
		</div>
	</div>

	<div class="casper-live">
		<div class="logo">
			<CasperTrenchLogo />
		</div>
		<div class="link-section">
			<div class="links">
				<div class="title">About Casper Network</div>
				<a href="/" class="link"> CasperLabs </a>
				<a href="/" class="link"> Casper Association </a>
				<a href="/" class="link"> Highway protocol </a>
				<a href="/" class="link"> Techinical design </a>
			</div>
			<div class="links">
				<div class="title">Developer Resources</div>
				<a href="/" class="link"> Documentation </a>
				<a href="/" class="link"> Github </a>
				<div class="socials">
					<a href="/" class="discord">
						<DiscordIcon />
					</a>
					<a href="/" class="telegram">
						<TelegramIcon />
					</a>
					<a href="/" class="twitter">
						<TwitterIcon />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.bg {
		@apply absolute inset-0 w-full h-full -z-10;
	}

	.footer {
		@apply relative py-[clamp(16px,3.33vw,3.33vw)] flex;
		/* remove */
		@apply h-[clamp(200px,28.27vw,28.27vw)];
	}

	.arcadia-section {
		@apply w-[46%] px-[clamp(16px,3.75vw,3.75vw)];
	}

	.arcadia-section > .logo {
		@apply w-[clamp(50px,8.39vw,8.39vw)] h-[clamp(25px,2.38vw,2.38vw)];
		@apply mb-[clamp(16px,2.26vw,2.26vw)];
	}

	.casper-live > .logo {
		@apply h-[clamp(25px,2.44vw,2.44vw)] w-[clamp(90px,10.42vw,10.42vw)];
		@apply mb-[clamp(16px,2.26vw,2.26vw)];
	}

	.links {
		@apply flex flex-col gap-[clamp(8px,1.19vw,1.19vw)] text-[clamp(8px,1.19vw,1.19vw)] text-color-grey-footer-link;
	}

	.title {
		@apply font-bold text-color-grey-footer-title mb-[clamp(4px,0.36vw,0.36vw)];
	}

	.link {
		@apply cursor-pointer hover:text-color-hover-footer-link w-max;
	}

	.link-section {
		@apply flex gap-[clamp(60px,8.93vw,8.93vw)];
	}

	.socials {
		@apply flex gap-[clamp(8px,1.25vw,1.25vw)];
	}

	.socials > a {
		@apply h-[clamp(8px,1.25vw,1.25vw)] w-[clamp(8px,1.25vw,1.25vw)] cursor-pointer;
	}
</style>
