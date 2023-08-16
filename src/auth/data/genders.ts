interface Gender {
	label: string;
	value: string;
}

export const genders: Gender[] = [
	{
		label: 'Male',
		value: 'male',
	},
	{
		label: 'Female',
		value: 'female',
	},
	{
		label: 'Non-binary',
		value: 'non-binary',
	},
	{
		label: 'Other',
		value: 'other',
	},
	{
		label: 'Prefer not to say',
		value: 'prefer-not-to-say',
	},
];
