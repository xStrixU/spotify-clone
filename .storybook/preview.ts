import type { Preview } from '@storybook/react';

import '@/common/assets/styles/tailwind.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#000',
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
