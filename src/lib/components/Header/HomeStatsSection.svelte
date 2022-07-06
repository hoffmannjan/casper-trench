<div class="home-stats-section header-stats-background">

    <div class="stat-column">
        <div class="top">
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
        <div class="bottom">
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
    </div>

    <div class="vt"/>

    <div class="stat-column">
        <div class="top">
            <div class="title">
                ACTIVE VALIDATORS
            </div>
            <div class="value">
                {"100"}
            </div>
            <div class="detail">
                {"out of 119 active bids"}
            </div>
        </div>
        <div class="bottom">
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

    <div class="vt"/>

    <div class="stat-column">
        <div class="top">
            <div class="title">
                TOTAL STAKE BONDED
            </div>
            <div class="value">
                {"8,255,902,991"}
            </div>
            <div class="detail">
                {"75.50% of Total Supply"}
            </div>
        </div>
        <div class="bottom">
            <div class="title">
                TOTAL TRANSFERS
            </div>
            <div class="value">
                {"8,221,2423"}
            </div>
        </div>
    </div>

    <div class="vt"/>

    <div class="graph">
        <!-- Graph goes here -->
    </div>

</div>

<style lang='postcss'>
    .home-stats-section {
        @apply h-[clamp(100px,16.13vw,16.13vw)] w-[clamp(500px,92.44vw,92.44vw)];
        @apply p-[clamp(10px,1.73vw,1.73vw)] rounded-[clamp(10px,1.19vw,1.19vw)] border-[clamp(1px,0.06vw,0.06vw)] border-color-border-header-stats border-opacity-50;
        @apply flex gap-[clamp(10px,1.43vw,1.43vw)] items-center backdrop-blur;
    }

    .stat-column {
        @apply w-[clamp(100px,17.86vw,17.86vw)] h-full leading-none;
    }

    .stat-column > div {
        @apply h-1/2 pl-[clamp(20px,1.5vw,1.5vw)];
    }

    .top {
        @apply border-b border-color-divider-header-stats border-opacity-50;
    }

    .bottom {
        @apply mt-[clamp(8px,0.95vw,0.95vw)];
    }

    .vt {
        @apply h-full border-r border-color-divider-header-stats border-opacity-50;
    }

    .title {
        @apply text-[clamp(8px,0.95vw,0.95vw)] text-color-title-header-stats mb-[clamp(2px,0.5vw,0.5vw)];
    }

    .value {
        @apply text-[clamp(14px,1.67vw,1.67vw)] text-white font-medium mb-[clamp(2px,0.4vw,0.4vw)];
    }

    .detail {
        @apply text-[clamp(10px,1.07vw,1.07vw)] text-white;
    }
</style>