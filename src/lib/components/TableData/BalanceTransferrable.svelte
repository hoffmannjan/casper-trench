<script>
	export let cspr = 31821243;
	export let cashValue = 921232.02;
	export let percentageFooter = false;
</script>

<div class="crypto-cash">
	<div class="value-crypto">
		<div class="crypto">
			{parseFloat(cspr.toFixed(5)).toLocaleString()}
		</div>
		<div class="cspr">CSPR</div>
	</div>
	{#if percentageFooter}
		<div class="value-cash">
			${cashValue * 100}%
		</div>
	{:else}
		<div class="value-cash">
			${parseFloat(cashValue.toFixed(2)).toLocaleString()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.crypto-cash {
		@apply text-right text-[clamp(8px,0.83vw,0.83vw)];
		@apply max-w-max;
	}

	.value-crypto {
		@apply flex items-center gap-[clamp(2px,0.24vw,0.24vw)];
	}

	.crypto {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header;
	}

	.value-cash {
		@apply text-color-table-header;
	}

	.cspr {
		@apply text-color-grey-footer-label;
	}
</style>
