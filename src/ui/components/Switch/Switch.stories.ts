import { Switch } from './Switch';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'UI/Switch',
	component: Switch,
	tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const WithoutLabel: Story = {};

export const WithLabel: Story = {
	args: {
		label: 'Lorem ipsum',
	},
};
