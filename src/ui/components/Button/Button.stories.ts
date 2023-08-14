import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
	args: {
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
	},
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
};

export const White: Story = {
	args: {
		variant: 'white',
	},
};

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
};

export const Transparent: Story = {
	args: {
		variant: 'transparent',
	},
};

export const Border: Story = {
	args: {
		variant: 'border',
	},
};
