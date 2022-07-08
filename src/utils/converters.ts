export const millisToFormat = (
	diff: number
): {
	seconds: number;
	minutes: number;
	hours: number;
	days: number;
	months: number;
	years: number;
} => {
	let seconds = Math.floor(diff / 1000),
		minutes = Math.floor(seconds / 60),
		hours = Math.floor(minutes / 60),
		days = Math.floor(hours / 24),
		months = Math.floor(days / 30);

	const years = Math.floor(days / 365);

	seconds %= 60;
	minutes %= 60;
	hours %= 24;
	days %= 30;
	months %= 12;

	return {
		seconds,
		minutes,
		hours,
		days,
		months,
		years
	};
};
