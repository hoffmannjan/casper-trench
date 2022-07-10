<script>
	import Hash from './Hash.svelte';

	export let imgUrl = 'https://tienthuattoan.com/asset/logo/logo-256.png';
	export let name = 'Everstake';
	export let hash = 'cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4';
</script>

<div class="validator">
	<div class="icon">
		<img src={imgUrl} alt="validator-icon" />
	</div>
	<div class="details">
		<Hash {hash} variant="right" />
		<div class="name">
			{name}
		</div>
	</div>
</div>

<style lang="postcss">
	.validator {
		@apply flex items-center justify-start gap-[clamp(8px,0.95vw,0.95vw)];
	}

	.icon {
		@apply w-[clamp(16px,2vw,2vw)];
	}

	.details {
		@apply leading-none;
	}

	.name {
		@apply mt-[clamp(2px,0.24vw,0.24vw)];
	}
</style>
