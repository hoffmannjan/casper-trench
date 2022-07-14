<script lang="ts">
	import { millisToFormat } from '$utils/converters';

	export let blockDate = Date.parse('July 8, 2022, 12:47');
	export let blockHeight = '861,306';

	const diff = Date.now() - blockDate;

	const time = millisToFormat(diff);
	let textString = '';
	if (time.years >= 1) {
		textString = `${time.years} ${time.years === 1 ? 'year' : 'years'}`;
	} else if (time.months >= 1) {
		textString = `${time.months} ${time.months === 1 ? 'month' : 'months'}`;
	} else if (time.days >= 1) {
		textString = `${time.days} ${time.days === 1 ? 'day' : 'days'}`;
	} else if (time.hours >= 1) {
		textString = `${time.hours} ${time.hours === 1 ? 'hour' : 'hours'}`;
	} else if (time.minutes >= 1) {
		textString = `${time.minutes} ${time.minutes === 1 ? 'minute' : 'minutes'}`;
	} else {
		textString = `${time.seconds} ${time.seconds === 1 ? 'second' : 'seconds'}`;
	}
</script>

<div class="block-height">
	<div class="block-height">
		{blockHeight}
	</div>
	<div class="time-ago">
		{textString} ago
	</div>
</div>

<style lang="postcss">
	.time-ago {
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header text-opacity-50;
		@apply mt-[clamp(2px,0.24vw,0.24vw)];
	}

	.block-height {
		@apply leading-none;
		@apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header text-opacity-100;
	}
</style>
