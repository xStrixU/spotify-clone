import { Link } from './Link';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'UI/Link',
	component: Link,
	tags: ['autodocs'],
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
	args: {
		href: '#',
		children: 'Lorem ipsum',
	},
};
