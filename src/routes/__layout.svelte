<script>
	import BottomFooter from '$components/BottomFooter/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import Header from '$components/Header/index.svelte';

	import '$styles/tailwind.css';
	import '$styles/custom.css';
</script>

<svelte:head>
	<title>Occhio Studios</title>
</svelte:head>

<Header />
<div class="content">
	<slot />
</div>
<Footer />
<BottomFooter />
