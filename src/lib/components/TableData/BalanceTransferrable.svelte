<script>
    export let cspr = "31,821,243";
    export let cashValue = "921,232.02";
</script>

<div class="crypto-cash">
    <div class="value-crypto">
        <div class="crypto">
            {cspr}
        </div>
        <div class="cspr">
            CSPR
        </div>
    </div>
    <div class="value-cash">
        ${cashValue}
    </div>
</div>

<style lang='postcss'>
    .crypto-cash {
        @apply text-right text-[clamp(8px,0.83vw,0.83vw)];
        @apply max-w-max;
    }

    .value-crypto {
        @apply flex items-center gap-[clamp(2px,0.24vw,0.24vw)];
    }

    .crypto {
        @apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header;
    }

    .value-cash {
        @apply text-color-table-header;
    }

    .cspr {
        @apply text-color-grey-footer-label;
    }
</style>