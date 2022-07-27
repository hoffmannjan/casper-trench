<script lang="ts">
	import { goto } from '$app/navigation';
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
			<div class="image-placeholder">
				<img src="/images/png/validator-placeholder.png" alt="validator-icon" />
			</div>
		{/if}
	</div>
	<div class="details">
		<a href="/validators/{hash}">
			<Hash
				{hash}
				variant="right"
				on:click={() => {
					goto(`/validators/${hash}`);
				}}
			/>
		</a>
		<div class="name">
			{#if name}
				{name}
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.validator {
		@apply flex items-center justify-start gap-[clamp(8px,0.95vw,0.95vw)];
		@apply text-left;
	}

	.icon {
		@apply w-[clamp(16px,2vw,2vw)];
	}

	.details {
		@apply leading-none;
	}
	.image-placeholder {
		@apply bg-gray-100;
		@apply rounded-full;
		@apply flex items-center justify-center;
		@apply w-[clamp(16px,2.8vw,2.8vw)] h-[clamp(16px,2.8vw,2.8vw)];
	}
	.name {
		@apply text-color-grey-footer-label;
		@apply mt-[clamp(2px,0.24vw,0.24vw)];
	}
</style>
