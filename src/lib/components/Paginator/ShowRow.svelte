<script>
    import ShowRowChevron from "$lib/icons/ShowRowChevron.svelte";

    export let value = 10;
</script>

<div class="show-row">
    <div class="title">
        Show Row
    </div>
    <div class="dropdown-header">
        <div class="value">
            {value}
        </div>
        <div class="chevron">
            <ShowRowChevron />
        </div>
    </div>
</div>

<style lang='postcss'>
    .show-row {
        @apply flex items-center gap-[2.8vw];
        @apply text-[clamp(8px,0.95vw,0.95vw)] text-color-grey-footer-label;
    }

    .dropdown-header {
        @apply flex items-center gap-[clamp(4px,0.36vw,0.36vw)];
        @apply cursor-pointer;
    }

    .value {
        @apply text-color-black-text;
    }
</style>