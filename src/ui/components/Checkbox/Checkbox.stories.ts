import { Checkbox } from './Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'UI/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const WithoutLabel: Story = {};

export const WithLabel: Story = {
	args: {
		label: 'Lorem ipsum',
	},
};
