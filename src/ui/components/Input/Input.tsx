import { forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputIcon } from './InputAddon/InputIcon';
import { InputRightSection } from './InputAddon/InputRightSection';

type InputProps = Readonly<{
	fullWidth?: boolean;
	icon?: ReactNode;
	rightSection?: ReactNode;
	isError?: boolean;
}> &
	JSX.IntrinsicElements['input'];

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ fullWidth = false, icon, rightSection, isError = false, ...props },
		ref,
	) => (
		<div
			className={twMerge(
				'relative inline-block',
				fullWidth ? 'w-full' : 'w-fit',
			)}
		>
			{icon && <InputIcon isError={isError}>{icon}</InputIcon>}
			<input
				ref={ref}
				className={twMerge(
					'h-12 w-full appearance-none rounded border border-neutral-500 bg-neutral-900 px-3.5 text-base font-medium text-white outline-none outline-2 -outline-offset-2 transition-all duration-200 placeholder:text-neutral-400 hover:border-white focus:outline-white',
					isError &&
						'border-red-500 hover:border-red-600 focus:outline-red-600',
					icon && 'pl-12',
					rightSection && 'pr-12',
				)}
				{...props}
			/>
			{rightSection && <InputRightSection>{rightSection}</InputRightSection>}
		</div>
	),
);

Input.displayName = 'Input';
