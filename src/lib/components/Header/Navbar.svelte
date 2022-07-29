<script lang="ts">
	import CasperTrenchLogo from '$lib/icons/CasperTrenchLogo.svelte';
	import UserIcon from '$lib/icons/UserIcon.svelte';
	import NavbarDropdown from './NavbarDropdown.svelte';
	import { page } from '$app/stores';

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
			link: '/',
			dropdown: []
		},
		{
			text: 'Blockchain',
			link: '',
			dropdown: [
				{
					text: 'Top Accounts',
					link: '/accounts/top-accounts'
				},
				{
					text: 'View Txns',
					link: '/transactions'
				},
				{
					text: 'View Blocks',
					link: '/blocks'
				},
				{
					text: 'Contracts',
					link: '/contracts'
				}
			]
		},
		{
			text: 'Validators',
			link: '/validators',
			dropdown: []
		},
		{
			text: 'CSPR Live Charts & Stats',
			link: '/charts',
			dropdown: []
		},
		// {
		// 	text: 'More',
		// 	link: '',
		// 	dropdown: [
		// 		{
		// 			text: 'Developers',
		// 			link: ''
		// 		},
		// 		{
		// 			text: 'Wallet Analyzer',
		// 			link: ''
		// 		},
		// 		{
		// 			text: 'Explore',
		// 			link: ''
		// 		}
		// 	]
		// },
		{
			text: 'Wallet',
			link: '',
			dropdown: [
				{
					text: 'Transfer',
					link: '/wallet/transfer'
				},
				{
					text: 'Delegate Stake',
					link: '/wallet/delegate-stake'
				},
				{
					text: 'Undelegate Stake',
					link: '/wallet/undelegate-stake'
				}
			]
		}
	];
</script>

<div class="navbar">
	<a href="/" class="logo">
		<CasperTrenchLogo />
	</a>
	<div class="nav-items">
		{#each navItems as navItem}
			<div class="nav-item">
				{#if navItem.dropdown.length > 0}
					<NavbarDropdown {navItem}/>
				{:else}
					<div class="text" class:selected={$page.url.pathname === navItem.link}>
						<a href={navItem.link}>{navItem.text}</a>
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
		@apply hidden md:flex gap-[clamp(16px,1.79vw,1.79vw)];
		@apply text-white text-opacity-50 text-[clamp(10px,0.83vw,0.83vw)];
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
