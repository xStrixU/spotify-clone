module.exports = {
	root: true,
	plugins: ['simple-import-sort'],
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:import/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
			],
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: 'tsconfig.json',
			},
			rules: {
				'@typescript-eslint/consistent-type-imports': 'error',
				'@typescript-eslint/no-floating-promises': [
					'error',
					{ ignoreVoid: true },
				],
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						argsIgnorePattern: '^_',
						varsIgnorePattern: '^_',
					},
				],
				'@typescript-eslint/prefer-optional-chain': 'error',
			},
		},
	],
	rules: {
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'require-await': 'error',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// packages
					['^@?\\w'],
					// relative paths
					['^\\.'],
					// components
					['^@/components'],
					// absolute imports like @/hooks, @/lib
					['^@/'],
					// package type imports
					['^(?!@/).+\\u0000$'],
					// absolute type imports like @/types
					['^@/.+\\u0000$'],
					// css and scss files
					['^.+\\.s?css$'],
				],
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: true,
			node: true,
		},
	},
};
