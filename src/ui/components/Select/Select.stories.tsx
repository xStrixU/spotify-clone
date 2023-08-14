import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'UI/Select',
	component: Select,
	tags: ['autodocs'],
	args: {
		children: (
			<>
				<Select.PlaceholderOption>Lorem ipsum</Select.PlaceholderOption>
				<option value="foo">Foo</option>
				<option value="bar">Bar</option>
				<option value="baz">Baz</option>
			</>
		),
	},
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Error: Story = {
	args: {
		isError: true,
	},
};
