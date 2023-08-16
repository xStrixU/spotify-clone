const generateMonths = () => {
	const date = new Date();
	const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long' });

	return Array.from({ length: 12 }).map((_, i) =>
		dateFormat.format(new Date(date.getFullYear(), i)),
	);
};

export const months = generateMonths();
