<script lang='ts'>
    export let blockDate = Date.parse("July 8, 2022, 12:47");
    export let blockHeight = '861,306';

    var diff = Date.now() - blockDate;
    var seconds = Math.floor(diff / 1000),
        minutes = Math.floor(seconds / 60),
        hours   = Math.floor(minutes / 60),
        days    = Math.floor(hours / 24),
        months  = Math.floor(days / 30),
        years   = Math.floor(days / 365);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;

    let textString = '';
    if (years >= 1) {
        textString = `${years} ${years === 1 ? "year" : "years"}`
    } else if (months >= 1) {
        textString = `${months} ${months === 1 ? "month" : "months"}`
    } else if (days >= 1) {
        textString = `${days} ${days === 1 ? "day" : "days"}`
    } else if (hours >= 1) {
        textString = `${hours} ${hours === 1 ? "hour" : "hours"}`
    } else if (minutes >= 1) {
        textString = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`
    } else {
        textString = `${seconds} ${seconds === 1 ? "second" : "seconds"}`
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

<style lang='postcss'>
    .time-ago {
        @apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header text-opacity-50;
    }

    .block-height {
        @apply text-[clamp(10px,1.07vw,1.07vw)] text-color-table-header text-opacity-100;
    }
</style>