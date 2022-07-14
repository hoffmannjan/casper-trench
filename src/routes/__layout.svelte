<script>
	import BottomFooter from '$components/BottomFooter/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import Header from '$components/Header/index.svelte';

	import '$styles/tailwind.css';
	import '$styles/custom.css';
</script>

<svelte:head>
	<title>Casper Trench</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
<BottomFooter />

<style lang="postcss">
	main {
		@apply min-w-full;
		@apply pt-[clamp(30px,3.6vw,3.6vw)] pb-[clamp(40px,4.6vw,4.6vw)] px-[clamp(20px,3.8vw,3.8vw)];
	}
</style>
