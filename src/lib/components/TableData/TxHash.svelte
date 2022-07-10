<script lang="ts">
	import GreenCheckMarkIcon from '$lib/icons/GreenCheckMarkIcon.svelte';
	import YellowWarningIcon from '$lib/icons/YellowWarningIcon.svelte';
	import Hash from './Hash.svelte';

	export let hash = '';
	export let color: 'green' | 'yellow' = 'green';
</script>

<div class="tx-hash">
	<Hash {hash} {color} />
	<div class="icon">
		{#if color === 'green'}
			<GreenCheckMarkIcon />
		{:else}
			<YellowWarningIcon />
		{/if}
	</div>
</div>

<style lang="postcss">
	.tx-hash {
		@apply flex items-center gap-[clamp(8px,1vw,1vw)];
	}

	.icon {
		@apply h-[clamp(8px,0.83vw,0.83vw)] w-[clamp(8px,0.83vw,0.83vw)];
	}
</style>
