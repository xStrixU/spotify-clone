import { TextField } from './TextField';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Forms/TextField',
	component: TextField,
	tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const WithLabel: Story = {
	args: {
		label: 'This is label',
	},
};

export const WithPlaceholder: Story = {
	args: {
		label: 'This is label',
		placeholder: 'This is placeholder',
	},
};

export const WithError: Story = {
	args: {
		label: 'Enter your email',
		placeholder: "What's your email?",
		error: 'You need to enter your email',
	},
};
