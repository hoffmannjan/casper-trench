<script>
import AreaChart from "$lib/components/Charts/AreaChart.svelte";
import ComboChart from "$lib/components/Charts/ComboChart.svelte";
import StackedChart from "$lib/components/Charts/StackedChart.svelte";

</script>

<div class="charts-page">
    <div class="wrapper">
        <StackedChart />
    </div>
    <div class="wrapper">
        <ComboChart />
    </div>
    <div class="wrapper">
        <!-- TODO Add custom bar chart -->
    </div>
    <div class="wrapper">
        <AreaChart />
    </div>
</div>

<style lang="postcss">
    .wrapper {
        @apply px-[clamp(16px,2.14vw,2.14vw)] py-[clamp(16px,0.95vw,0.95vw)];
        @apply border-color-tooltip-border border-[clamp(1px,0.06vw,0.06vw)];
        @apply rounded-[1.19vh] md:rounded-[1.19vw];
        @apply mb-[clamp(16px,2.38vw,2.38vw)];
    }
</style>