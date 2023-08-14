import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type InputAddonProps = Readonly<{
	position: 'left' | 'right';
	className?: string;
	children: ReactNode;
}>;

export const InputAddon = ({
	position,
	className,
	children,
}: InputAddonProps) => (
	<div
		className={twMerge(
			'absolute bottom-0 top-0 flex w-12 items-center justify-center',
			position === 'left' && 'left-0',
			position === 'right' && 'right-0',
			className,
		)}
	>
		{children}
	</div>
);
