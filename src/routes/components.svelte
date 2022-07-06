<script>
	import BottomFooter from '$components/BottomFooter/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import Header from '$components/Header/index.svelte';
</script>

<Header />
<div class="content" />
<Footer />
<BottomFooter />

<style lang="postcss">
	.content {
		@apply h-[80vh];
	}
</style>
