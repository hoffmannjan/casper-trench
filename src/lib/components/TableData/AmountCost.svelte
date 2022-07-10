<script>
	export let cspr = '31,821,243';
	export let cashValue = '921,232.02';
</script>

<div class="crypto-cash">
	<div class="value-crypto">
		{cspr} CSPR
	</div>
	<div class="value-cash">
		${cashValue}
	</div>
</div>

<style lang="postcss">
	.crypto-cash {
		@apply text-right text-[clamp(10px,1.07vw,1.07vw)];
		@apply max-w-max;
	}

	.value-crypto {
		@apply text-color-table-header;
	}

	.value-cash {
		@apply text-color-grey-footer-label;
	}
</style>
