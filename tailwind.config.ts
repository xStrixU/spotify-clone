import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				green: {
					50: '#79eca2',
					100: '#67e995',
					200: '#56e789',
					300: '#3be376',
					400: '#20df64',
					500: '#1fd760',
					600: '#1cc458',
					700: '#1ab250',
					800: '#169c46',
					900: '#13863c',
					950: '#106f32',
				},
			},
			fontFamily: {
				sans: ['var(--font-figtree)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
} satisfies Config;
