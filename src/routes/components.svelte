<script>
    import Footer from "$components/Footer/index.svelte";
import Header from "$components/Header/index.svelte";
</script>

<Header />
<div class="content"></div>
<Footer />

<style lang='postcss'>
    .content {
        @apply h-[80vh];
    }
</style>


