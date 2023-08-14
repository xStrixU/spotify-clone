import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: config => {
		const fileLoaderRule = config.module?.rules?.find(
			rule =>
				rule &&
				typeof rule !== 'string' &&
				rule.test instanceof RegExp &&
				rule.test.test('.svg'),
		);

		if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
			fileLoaderRule.exclude = /\.svg$/;
		}

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

export default config;
