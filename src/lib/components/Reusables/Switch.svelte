<script lang='ts'>
    import { createEventDispatcher } from "svelte";

    export let options: string[] = [''];
    export let selected = 0;

    let selectOption = (i: number) => {
        selected = i;
    }
</script>

<div class="switch">
    {#each options as option, i}
        <div class="button" class:selected={selected === i} on:click={() => {
            selectOption(i);
        }}>
            {option}
        </div>
    {/each}
</div>

<style lang='postcss'>
    .switch {
        @apply flex items-center gap-[clamp(10px,1.07vw,1.07vw)];
        @apply w-max h-max;
		@apply text-[clamp(10px,1.07vw,1.07vw)];
		@apply cursor-pointer;
    }

    .button {
		@apply p-[clamp(8px,0.6vw,0.6vw)];
        @apply border-color-progress-bg border-[clamp(1px,0.06vw,0.06vw)];
        @apply text-color-grey-footer-label;
		@apply rounded-[clamp(4px,0.48vw,0.48vw)];
        @apply transition-all duration-300;
    }

    .selected {
		@apply bg-color-hover-footer-link;
		@apply text-white;
        @apply border-color-hover-footer-link border-[clamp(1px,0.06vw,0.06vw)];
	}
</style>