import { twMerge } from 'tailwind-merge';

import { sizes, variants } from './Button.styles';

import type { Size, Variant } from './Button.styles';
import type { ReactNode } from 'react';

type ButtonProps = Readonly<{
	fullWidth?: boolean;
	icon?: ReactNode;
	size?: Size;
	variant?: Variant;
}> &
	JSX.IntrinsicElements['button'];

export const Button = ({
	fullWidth,
	icon,
	size = 'medium',
	variant = 'primary',
	children,
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={twMerge(
			'flex items-center rounded-full font-bold hover:scale-105 active:scale-100',
			fullWidth && 'w-full',
			sizes[size],
			variants[variant],
		)}
		{...props}
	>
		{icon && <div aria-hidden>{icon}</div>}
		<span className="mx-auto">{children}</span>
	</button>
);
