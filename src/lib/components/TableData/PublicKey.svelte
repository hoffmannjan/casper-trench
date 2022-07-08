<script>
    import { millisToFormat } from "$utils/converters";
    import Hash from "./Hash.svelte";

    export let activeDate = Date.parse("July 8, 2022, 14:47");
    export let hash = 'cn9824n08cn280nch2n40hc0h81hh4b0h18h40h18h4';

    const diff = Date.now() - activeDate;
    const time = millisToFormat(diff);

    let textString = '';
    if (time.years >= 1) {
        textString = `${time.years=== 1 ? "a" : time.years} ${time.years === 1 ? "year" : "years"}`
    } else if (time.months >= 1) {
        textString = `${time.months === 1 ? "a" : time.months} ${time.months === 1 ? "month" : "months"}`
    } else if (time.days >= 1) {
        textString = `${time.days === 1 ? "a" : time.days} ${time.days === 1 ? "day" : "days"}`
    } else if (time.hours >= 1) {
        textString = `${time.hours === 1 ? "a" : time.hours} ${time.hours === 1 ? "hour" : "hours"}`
    } else if (time.minutes >= 1) {
        textString = `${time.minutes === 1 ? "a" : time.minutes} ${time.minutes === 1 ? "minute" : "minutes"}`
    } else {
        textString = `${time.seconds === 1 ? "a" : time.seconds} ${time.seconds === 1 ? "second" : "seconds"}`
    }
</script>

<div class="block-height">
    <Hash {hash} noOfCharacters={10} variant='right'/>
    <div class="time-ago">
        Active {textString} ago
    </div>
</div>

<style lang='postcss'>
    .time-ago {
        @apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header text-opacity-50;
    }
</style>