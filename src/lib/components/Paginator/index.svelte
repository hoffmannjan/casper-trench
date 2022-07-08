<script>
    import PaginatorChevron from "$lib/icons/PaginatorChevron.svelte";
    import ShowRow from "./ShowRow.svelte";

    let page = 1;
    let totalPages = 86132;
    let showTotalRows = true;
</script>

<div class="paginator">
    {#if showTotalRows}
        <div class="total">
            861,317 total rows
        </div>
    {:else}
        <ShowRow />
    {/if}
    <div class="paginator-buttons">
        {#if showTotalRows}
            <ShowRow />
        {/if}
        <div class="actual-paginator">
            <div class="button">
                First
            </div>
            <div class="button">
                <div class="icon">
                    <PaginatorChevron />
                </div>
            </div>
            <div class="text">
                Page {page} of {totalPages.toLocaleString()}
            </div>
            <div class="button">
                <div class="icon right">
                    <PaginatorChevron />
                </div>
            </div>
            <div class="button">
                Last
            </div>
        </div>
    </div>
</div>

<style lang='postcss'>
    .paginator {
        @apply flex justify-between;
        @apply text-[clamp(8px,0.95vw,0.95vw)] text-color-grey-footer-label;
    }

    .paginator-buttons {
        @apply flex gap-[1.19vw];
    }

    .actual-paginator {
        @apply flex gap-[0.71vw] items-center;
    }

    .text {
        @apply mx-[0.6vw];
    }

    .right {
        @apply transform rotate-180;
    }

    .icon {
        @apply h-[0.95vw];
    }

    .button {
        @apply px-[0.83vw] py-[0.6vw];
        @apply leading-none;
        @apply border-[0.12vw] rounded-[0.3vw] border-color-paginator-border;
        @apply cursor-pointer;
    }
</style>