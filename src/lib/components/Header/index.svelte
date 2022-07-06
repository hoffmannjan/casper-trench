<script>
    import HomeStatsSection from "./HomeStatsSection.svelte";   
</script>

<div class="header">
    <HomeStatsSection />
</div>

<style lang='postcss'>
    .header {
        @apply h-[50vh] sm:p-4 md:px-[clamp(16px,3.57vw,3.57vw)] md:py-[clamp(16px,0.95vw,0.95vw)];
        background: url("images/png/header-bg.png") no-repeat center center/cover;
    }
</style>