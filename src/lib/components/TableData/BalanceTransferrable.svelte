<script lang="ts">
	import { getStats } from '$utils/api';
	import type { Stats } from '$utils/types/stats';
	import { onMount } from 'svelte';

	export let cspr: number;
	let cashValue: number = 0;
	export let selfStakePercentage: number = 0;
	onMount(async () => {
		const stats: Stats = await getStats();
		cashValue = stats && cspr * stats.price;
	});
</script>

<div class="crypto-cash">
	<div class="value-crypto">
		<div class="crypto">
			{parseFloat(cspr.toFixed(5)).toLocaleString('en')}
		</div>
		<div class="cspr">CSPR</div>
	</div>
	{#if selfStakePercentage > 0}
		<div class="value-cash">
			{selfStakePercentage}%
		</div>
	{:else}
		<div class="value-cash">
			${parseFloat(cashValue.toFixed(2)).toLocaleString('en')}
		</div>
	{/if}
</div>

<style lang="postcss">
	.crypto-cash {
		@apply text-right text-[clamp(10px,0.83vw,0.83vw)];
		@apply max-w-max;
	}

	.value-crypto {
		@apply flex items-center gap-[clamp(4px,0.24vw,0.24vw)];
	}

	.crypto {
		@apply text-[clamp(12px,1.07vw,1.07vw)] text-color-table-header;
	}

	.value-cash {
		@apply text-color-table-header;
	}

	.cspr {
		@apply text-color-grey-footer-label;
	}
</style>
