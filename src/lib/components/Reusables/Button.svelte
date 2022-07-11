<script lang='ts'>
    export let gradient = false;
</script>

<div class="button" class:gradient class:button-border-gradient={gradient} on:click>
    <div class="content">
        <slot />
    </div>
</div>

<style lang='postcss'>
    .gradient {
        @apply text-[clamp(10px,1.07vw,1.07vw)] text-color-hover-footer-link font-medium;
        @apply p-[clamp(1px,0.12vw,0.12vw)];
        @apply rounded-[clamp(4px,0.48vw,0.48vw)];
        @apply w-max;
    }

    .gradient > .content {
        @apply py-[clamp(16px,1.12vw,1.12vw)] px-[clamp(20px,1.43vw,1.43vw)];
        @apply bg-white;
        @apply rounded-[clamp(4px,0.48vw,0.48vw)];
    }
</style>