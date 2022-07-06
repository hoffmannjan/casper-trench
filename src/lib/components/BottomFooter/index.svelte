<div class="bottom-footer">
	<img src="/images/png/b-footer-bg.png" alt="bg" class="bg" draggable="false" />

	<div class="powered-by">
		<div class="label">Powered by</div>
		<div class="value">MAKE Technology LLC</div>
	</div>

	<div class="versions">
		<div>CSPR.live version: 1.10.0 (4287b143)</div>
		<div>Casper Network Node version: 1.4.6 (72b698e89)</div>
		<div>Quote Data provided by CoinGecko API</div>
	</div>
</div>

<style lang="postcss">
	.bottom-footer {
		@apply relative py-[clamp(16px,1.43vw,1.43vw)] px-[clamp(16px,3.75vw,3.75vw)] flex;
		/* remove */
		@apply h-[clamp(50px,5.71vw,5.71vw)];
	}

	.bg {
		@apply absolute inset-0 -z-10 hidden w-full h-full md:block;
	}

	.powered-by {
		@apply text-[clamp(8px,0.77vw,0.77vw)] mr-[clamp(200px,34.17vw,34.17vw)];
	}

	.label {
		@apply text-color-grey-footer-label;
	}

	.value {
		@apply text-white;
	}

	.versions {
		@apply text-white text-[clamp(8px,0.65vw,0.65vw)];
	}
</style>
