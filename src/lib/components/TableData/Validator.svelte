<script lang="ts">
	import Hash from './Hash.svelte';

	export let imgUrl: string;
	export let name: string;
	export let hash: string;
</script>

<div class="validator">
	<div class="icon">
		{#if imgUrl}
			<img src={imgUrl} alt="validator-icon" />
		{:else}
			<!-- TODO update as in design -->
			<div
				class="bg-gray-100 rounded-full border border-green-200 w-full h-[clamp(16px,2vw,2vw)]"
			/>
		{/if}
	</div>
	<div class="details">
		<a href="/validators/{hash}">
			<Hash {hash} variant="right" />
		</a>
		<div class="name">
			{#if name}
				{name}
			{:else}
				<!-- TODO update as in design -->
				- - -
			{/if}
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
