<div class="home-stats-section header-stats-background">

    <div class="stat-column">
        <div class="title">
            BLOCK HEIGHT
        </div>
        <div class="value">
            {"861,309"}
        </div>
        <div class="detail">
            {"55 sec ago"}
        </div>
    </div>

    <div class="vt"/>

    <div class="stat-column">
        <div class="title">
            APY
        </div>
        <div class="value">
            {"10.60%"}
        </div>
        <div class="detail">
            {"Annual Percentage Yield"}
        </div>
    </div>

    <div class="vt"/>

    <div class="stat-column">
        <div class="title">
            CSPR PRICE
        </div>
        <div class="value">
            {"$0.0264"}
        </div>
        <div class="detail">
            {"$135,498,998 Market Cap"}
        </div>
    </div>

    <div class="vt"/>

    <div class="stat-column">
        <div class="title">
            CIRCULATING SUPPLY
        </div>
        <div class="value">
            {"5,140,696,711"}
        </div>
        <div class="detail">
            {"47.0% of 10,934,884,629"}
        </div>
    </div>

</div>

<style lang='postcss'>
    .home-stats-section {
        @apply h-[clamp(100px,5.5vw,5.5vw)] w-[clamp(500px,46.96vw,46.96vw)];
        @apply py-[clamp(4px,0.48vw,0.48vw)] px-[clamp(20px,1.5vw,1.5vw)] rounded-[clamp(10px,1.19vw,1.19vw)] border-[clamp(1px,0.06vw,0.06vw)] border-color-border-header-stats border-opacity-50;
        @apply flex gap-[clamp(10px,1.43vw,1.43vw)] items-center backdrop-blur;
    }

    .stat-column {
        @apply w-full leading-none;
    }

    .vt {
        @apply h-full border-r border-color-divider-header-stats border-opacity-50;
    }

    .title {
        @apply text-[clamp(8px,0.70vw,0.70vw)] text-color-title-header-stats mb-[clamp(2px,0.3vw,0.3vw)];
    }

    .value {
        @apply text-[clamp(10px,1.43vw,1.43vw)] text-white font-medium mb-[clamp(2px,0.24vw,0.24vw)];
    }

    .detail {
        @apply text-[clamp(8px,0.75vw,0.75vw)] text-white;
    }
</style>