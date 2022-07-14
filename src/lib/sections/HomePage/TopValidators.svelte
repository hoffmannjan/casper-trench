<script>
	import { goto } from '$app/navigation';

	import Button from '$lib/components/Reusables/Button.svelte';
	import CircleProgressBar from '$lib/components/TableData/CircleProgressBar.svelte';
	import ValidatorElement from '$lib/components/TableData/Validator.svelte';
	import { getTopValidators } from '$utils/api';
	import { isLoading } from '$stores/loading';
	import { onMount } from 'svelte';
	let validators;
	onMount(async () => {
		$isLoading = true;
		validators = await getTopValidators();
		$isLoading = false;
	});
</script>

<div class="top-validators">
	<h3>Top</h3>
	<h2>Validators</h2>
	{#if validators && validators.era_validators.validators.length > 0}
		<table>
			<tr>
				<th>Validator</th>
				<!-- TODO confirm if Fees are delegation rates -->
				<th>Fee</th>
				<th>Total Stake</th>
				<th>Performance</th>
			</tr>
			<div class="divider table-header-border" />
			{#each validators.era_validators.validators as validator}
				<tr>
					<td
						><ValidatorElement
							imgUrl={validator.information?.icon}
							name={validator.information?.name}
							hash={validator.public_key}
						/></td
					>
					<td class="text-color-grey-footer-label">{validator.bid?.delegation_rate}%</td>
					<td class="text-color-table-header"
						>{parseFloat(validator.bid?.total_stake.substring(0, 9)).toLocaleString('en')} CSPR</td
					>
					<!-- TODO confirm what perfomance is -->
					<td><CircleProgressBar progress={1} /></td>
				</tr>
			{/each}
		</table>

		<div class="button">
			<Button outline on:click={() => goto(`/validators`)}>View all Validators</Button>
		</div>
	{/if}
</div>

<style lang="postcss">
	.top-validators {
		@apply flex flex-col items-start;
		@apply w-full;
	}
	h3 {
		@apply font-medium text-color-hover-footer-link text-sm md:text-[clamp(12px,1.07vw,1.07vw)] leading-[120%];
	}
	h2 {
		@apply font-bold text-color-table-header text-base md:text-[clamp(14px,1.4vw,1.4vw)] leading-[120%];
		@apply mt-[clamp(5px,0.3vw,0.3vw)] mb-[clamp(14px,1.6vw,1.6vw)];
	}
	table {
		@apply table-auto w-full relative;
	}

	.divider {
		@apply h-[clamp(1px,0.18vw,0.18vw)] w-full;
		@apply absolute;
	}

	th {
		@apply py-[clamp(8px,0.5vw,0.5vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] font-normal text-color-table-header text-left;
	}

	td {
		@apply py-[clamp(8px,0.5vw,0.5vw)];
		@apply text-[clamp(10px,1.07vw,1.07vw)] min-w-max;
	}

	.button {
		@apply w-full;
		@apply flex justify-center;
		@apply mt-[clamp(14px,1.6vw,1.6vw)];
	}
</style>
