<script>
    import StatisticsCard from '$lib/components/Validators/StatisticsCard.svelte';
	import ValidatorCard from '$lib/components/Validators/ValidatorCard.svelte';

	import CopyIcon from '$lib/icons/CopyIcon.svelte';

	let address = '012bac1d0ff9240ff0b7b06d555815640497861619ca12583ddef434885416e69b';
	let imgSrc =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Gnomelogo-footprint.svg/1200px-Gnomelogo-footprint.svg.png';
	let status = 'Active';
	let website = 'https://everstake.one/';
	let email = 'inbox@everstake.one';
	let twitter = '/';
	let facebook = '/';
	let telegram = '/';
	let github = '/';
    let publickKey = "01b205c2bd03ce19cd2876ccc21a3566c407b631f3e714532ce0c9956bbac85811";
    let validatorRewards = {
        cspr: 31821243,
        cashValue: 921232.02
    };
    let delegatorRewards = {
        cspr: 31821243,
        cashValue: 921232.02
    };
    let totalStake = {
        cspr: 31821243,
        cashValue: 921232.02
    };
    let selfStake = {
        cspr: 31821243,
        percentage: 0.0006
    };
    let commisionRate = 0.05;
    let performance = 0.94;
</script>

<div class="main">
	<div class="address">
		<div class="title">Address</div>
		<div class="value">
			<div class="text">
				{address}
			</div>
			<div class="copy-icon">
				<CopyIcon />
			</div>
		</div>
	</div>
	<div class="header-content">
        <ValidatorCard {imgSrc} {status} {website} {email} {twitter} {facebook} {telegram} {github} />
        <StatisticsCard {publickKey} {validatorRewards} {delegatorRewards} {totalStake} {selfStake} {commisionRate} {performance}/>
    </div>

    <!-- Delegators and verified blocks tabs go here-->
</div>

<style lang="postcss">
	.address {
		@apply text-color-table-header;
		@apply mb-[1.79vw];
	}
	.address > .value {
		@apply flex items-center gap-[0.24vw];
	}

	.address > .title {
		@apply font-bold text-[1.19vw];
	}

	.address > .value {
		@apply text-[0.95vw];
	}

	.copy-icon {
		@apply w-[1.96vw] h-[1.96vw];
        @apply cursor-pointer;
	}

    .header-content {
        @apply flex justify-between;
    }
</style>
