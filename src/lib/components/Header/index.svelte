<script>
    import Navbar from "./Navbar.svelte";
</script>

<div class="header">
    <Navbar />
</div>

<style lang='postcss'>
    .header {
        @apply h-[30vh] sm:p-4 md:px-[clamp(16px,3.57vw,3.57vw)] md:py-[clamp(16px,0.95vw,0.95vw)];
        @apply bg-[url("/images/png/header-bg.png")] bg-no-repeat bg-center bg-auto;
    }
</style>