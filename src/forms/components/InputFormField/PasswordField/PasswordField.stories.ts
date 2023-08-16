import { PasswordField } from './PasswordField';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Forms/PasswordField',
	component: PasswordField,
	tags: ['autodocs'],
} satisfies Meta<typeof PasswordField>;

type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
	args: {
		label: 'Password Field',
	},
};
