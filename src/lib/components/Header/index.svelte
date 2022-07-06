<script>
	import OtherStatsSection from './OtherStatsSection.svelte';
	import Navbar from './Navbar.svelte';
	import Filter from '$lib/components/Header/Filter.svelte';
	import HomeStatsSection from './HomeStatsSection.svelte';
</script>

<div class="header">
	<Navbar />
	<Filter />
	<HomeStatsSection />
	<OtherStatsSection />
</div>

<style lang="postcss">
	.header {
		@apply flex flex-col gap-y-[3vw];
		@apply sm:p-4 md:px-[clamp(16px,3.57vw,3.57vw)] md:py-[clamp(16px,0.95vw,0.95vw)];
		@apply bg-[url("/images/png/header-bg.png")] bg-no-repeat bg-center bg-auto;
	}
</style>
