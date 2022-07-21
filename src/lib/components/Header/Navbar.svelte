<script lang="ts">
	import CasperTrenchLogo from '$lib/icons/CasperTrenchLogo.svelte';
	import NavbarChevron from '$lib/icons/NavbarChevron.svelte';
	import UserIcon from '$lib/icons/UserIcon.svelte';

	let dropdownTest: {
		text: string;
		link: string;
	}[] = [
		{
			text: 'Item 1',
			link: ''
		},
		{
			text: 'Item 2',
			link: ''
		},
		{
			text: 'Item 3',
			link: ''
		}
	];

	let selected = 'blockchain';

	let navItems: {
		text: string;
		link: string;
		dropdown: {
			text: string;
			link: string;
		}[];
	}[] = [
		{
			text: 'Home',
			link: '',
			dropdown: []
		},
		{
			text: 'Blockchain',
			link: '',
			dropdown: dropdownTest
		},
		{
			text: 'Validators',
			link: '',
			dropdown: dropdownTest
		},
		{
			text: 'Tokens',
			link: '',
			dropdown: dropdownTest
		},
		{
			text: 'CSPR Live Charts & Stats',
			link: '',
			dropdown: []
		},
		{
			text: 'More',
			link: '',
			dropdown: dropdownTest
		}
	];
</script>

<div class="navbar">
	<div class="logo">
		<CasperTrenchLogo />
	</div>
	<div class="nav-items">
		{#each navItems as navItem}
			<div class="nav-item">
				<div class="text" class:selected={navItem.text.toLowerCase() === selected}>
					{navItem.text}
				</div>
				{#if navItem.dropdown.length > 0}
					<div class="chevron">
						<NavbarChevron />
					</div>
				{/if}
			</div>
		{/each}
		<div class="signin">
			<div class="user-icon">
				<UserIcon />
			</div>
			<div class="text">Sign In</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.navbar {
		@apply flex justify-between;
	}

	.nav-items {
		@apply flex gap-[clamp(16px,1.79vw,1.79vw)];
		@apply text-white text-opacity-50 text-[clamp(10px,0.83vw,0.83vw)];
		@apply hidden md:block;
	}

	.nav-item {
		@apply flex items-center cursor-pointer min-w-max;
	}

	.logo {
		@apply h-[clamp(16px,2.44vw,2.44vw)] w-[clamp(50px,10.42vw,10.42vw)];
	}

	.chevron {
		@apply h-[clamp(14px,0.95vw,0.95vw)] w-[clamp(14px,0.95vw,0.95vw)] ml-[clamp(4px,0.36vw,0.36vw)];
	}

	.selected {
		@apply text-white text-opacity-100;
	}

	.signin {
		@apply flex items-center cursor-pointer;
		@apply text-white text-opacity-100;
	}

	.user-icon {
		@apply h-[clamp(14px,1.07vw,1.07vw)] w-[clamp(14px,1.07vw,1.07vw)] mr-[clamp(4px,0.36vw,0.36vw)];
	}
</style>
