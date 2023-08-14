import { twMerge } from 'tailwind-merge';

import { InputAddon } from './InputAddon';

import type { ReactNode } from 'react';

type InputIconProps = Readonly<{
	isError: boolean;
	children: ReactNode;
}>;

export const InputIcon = ({ isError, children }: InputIconProps) => (
	<InputAddon
		position="left"
		className={twMerge(
			'pointer-events-none',
			isError ? 'text-red-400' : 'text-neutral-400',
		)}
	>
		{children}
	</InputAddon>
);
