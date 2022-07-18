<script lang="ts">
	import SwitchChevron from '$lib/icons/SwitchChevron.svelte';
	import { createEventDispatcher } from 'svelte/internal';
	import { slide } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let options: {
		name: string;
		dropdown: string[];
	}[] = [];
	export let selected = 0;
	export let outlined = false;

	let dropdowns: boolean[] = [];
	dropdowns = [];
	options.forEach((_) => {
		dropdowns.push(false);
	});

	let selectOption = (i: number) => {
		selected = i;
	};

	let selectDropdownOption = (i: number, o:number) => {
		selected = i;
		dispatch('dropdownOptionClicked', {
			optionIndex: i,
			dropdownIndex: o
		});
		dropdowns[i] = false;
	}

	const buttonClickHandler = (index: number) => {
		if (options[index].dropdown.length > 0) {
			if (!dropdowns[index]) {
				dropdowns.forEach((_, i) => (dropdowns[i] = false));
				dropdowns[index] = true;
				return;
			} else {
				dropdowns[index] = false;
				return;
			}
		}
		selectOption(index);
	};
</script>

<div class="switch" class:outlined>
	{#each options as option, i}
		<div class="wrapper">
			<div class="button" class:selected={selected === i} on:click={() => buttonClickHandler(i)}>
				<div class="text">
					{option.name}
				</div>
				{#if option.dropdown.length > 0}
					<div class="icon">
						<SwitchChevron />
					</div>
				{/if}
			</div>
			{#if dropdowns[i]}
				<div class="dropdown" transition:slide>
					{#each option.dropdown as option, index}
						<div class="dropdown-option" on:click={() => {
							selectDropdownOption(i, index);
						}}>
							{option}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.switch {
		@apply flex items-center gap-[clamp(10px,1.07vw,1.07vw)];
		@apply w-max h-max;
		@apply text-[clamp(10px,1.07vw,1.07vw)];
		@apply cursor-pointer;
	}

	.button {
		@apply p-[clamp(8px,0.6vw,0.6vw)];
		@apply border-color-progress-bg border-[clamp(1px,0.06vw,0.06vw)];
		@apply text-color-grey-footer-label;
		@apply rounded-[clamp(4px,0.48vw,0.48vw)];
		@apply transition-all duration-300;
		@apply flex items-center gap-[0.625vw];
	}

	.selected {
		@apply bg-color-hover-footer-link;
		@apply text-white;
		@apply border-color-hover-footer-link border-[clamp(1px,0.06vw,0.06vw)];
	}

	.icon {
		@apply w-[0.54vw] h-[0.33vw];
	}

	.outlined > div > .button {
		@apply border-[0vw];
	}
	.outlined > div > .selected {
		@apply text-color-hover-footer-link;
		@apply bg-white;
		@apply border-color-hover-footer-link border-[clamp(1px,0.06vw,0.06vw)];
	}

	.wrapper {
		@apply relative;
	}

	.dropdown {
		@apply absolute;
		@apply text-black text-center;
		@apply flex flex-col gap-[0.4vw];
		@apply w-full;
	}

	.dropdown-option {
		@apply hover:text-color-hover-footer-link;
		@apply cursor-pointer;
	}
</style>
