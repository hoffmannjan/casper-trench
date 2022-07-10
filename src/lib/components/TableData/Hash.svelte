<script lang="ts">
	import { scale } from 'svelte/transition';

	export let hash = '';
	export let variant: 'center' | 'right' = 'center';
	export let color: 'green' | 'yellow' | 'text' = 'text';
	export let noOfCharacters = 5;

	let showHash = false;
</script>

<div
	class="tooltip hash tooltip-icon {color}"
	class:right={variant == 'right'}
	style={`--tooltip: '${hash}'`}
	on:mouseenter={() => (showHash = true)}
	on:mouseleave={() => (showHash = false)}
>
	{#if showHash}
		<div class="pointer" transition:scale />
	{/if}
	{`${hash.substring(0, noOfCharacters)}...${hash.substring(hash.length - noOfCharacters)}`}
</div>

<style lang="postcss">
	.hash {
		@apply text-center text-[clamp(10px,1.07vw,1.07vw)];
		@apply max-w-max;
	}

	.text {
		@apply text-color-hover-footer-link;
	}

	.yellow {
		@apply text-color-arcadia-yellow;
	}

	.green {
		@apply text-color-arcadia-green;
	}

	.tooltip {
		@apply relative flex justify-center;
	}

	.tooltip-icon {
		@apply cursor-pointer;
	}

	.tooltip-icon::before,
	.tooltip-icon::after {
		@apply absolute transform -translate-y-[3.5vw] scale-0;
		@apply transition-transform origin-bottom;
	}

	.tooltip-icon::before {
		@apply w-max;
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-tooltip-border;
		@apply text-[clamp(8px,0.95vw,0.95vw)] text-color-table-header;
		@apply rounded-[0.625vw] bg-white p-[0.71vw] z-10;
		content: var(--tooltip);
	}

	.tooltip-icon:hover::after,
	.tooltip-icon:hover::before {
		@apply scale-100;
	}

	.pointer {
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-solid border-color-tooltip-border;
		@apply h-[1.56vw] w-[1.56vw];
		@apply transform rotate-45;
		@apply bg-white absolute mt-[-1.56vw];
	}

	.right::before {
		@apply translate-x-[5vw];
	}
</style>
