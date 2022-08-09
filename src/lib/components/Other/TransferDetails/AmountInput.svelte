<script>
    export let amount;
    export let limit;
    export let sendMax;
</script>

<div class="input-wrapper">
    <div class="top">
        <div class="label">
            Amount
        </div>
        {#if amount < limit}
            <div class="error">
                Not less than {limit} CSPR
            </div>
        {/if}
    </div>
    <div class="input" class:red={amount < limit}>
        <input type="number" bind:value={amount} placeholder="Enter amount" min="2.5" />
        <div class:cspr-red={amount < limit}>CSPR</div>
    </div>
    <label>
        <input type="checkbox" bind:checked={sendMax} />
        Send max amount
    </label>
</div>

<style lang="postcss">
    label > input {
		@apply cursor-pointer;
	}

    .error {
		@apply text-color-arcadia-red text-[clamp(12px,0.83vw,0.83vw)];
	}

	.red {
		@apply border-color-arcadia-red;
	}

	.cspr-red {
		@apply text-color-arcadia-red;
	}

    label {
        @apply text-color-grey-footer-label;
    }

    .input-wrapper {
		@apply mb-[clamp(16px,1.9vw,1.9vw)];
	}

    .top {
		@apply flex justify-between items-center;
		@apply mb-[clamp(4px,0.6vw,0.6vw)];
		@apply text-color-black-text text-[clamp(16px,1.07vw,1.07vw)];
	}

	.input > input {
		@apply outline-none;
		@apply w-[90%];
	}

    .input {
		@apply px-[clamp(16px,1.25vw,1.25vw)] py-[clamp(12px,0.95vw,0.95vw)];
		@apply text-[clamp(16px,1.07vw,1.07vw)] text-color-black-text;
		@apply rounded-[0.48vh] md:rounded-[0.48vw];
		@apply flex items-center justify-between;
		@apply mb-[clamp(4px,0.71vw,0.71vw)];
		@apply border-[clamp(1px,0.06vw,0.06vw)] border-color-input-border;
	}
</style>