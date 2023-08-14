import { Radio } from './Radio';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'UI/Radio',
	component: Radio,
	tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const WithoutLabel: Story = {};

export const WithLabel: Story = {
	args: {
		label: 'Lorem ipsum',
	},
};
