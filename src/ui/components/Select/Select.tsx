import { twMerge } from 'tailwind-merge';

import { SelectPlaceholderOption } from './SelectPlaceholderOption';

import SelectArrowIcon from '@/ui/assets/icons/select-arrow.svg';

import type { ReactNode } from 'react';

type SelectProps = Readonly<{
	isError?: boolean;
	children: ReactNode;
}> &
	JSX.IntrinsicElements['select'];

export const Select = ({ isError, children, ...props }: SelectProps) => (
	<div className="relative inline-block">
		<select
			required
			className={twMerge(
				'h-12 w-full appearance-none rounded border border-neutral-500 bg-neutral-900 px-3.5 pr-10 text-base font-medium text-white outline-none outline-2 -outline-offset-2 transition-all duration-200 invalid:text-neutral-400 hover:border-white focus:outline-white',
				isError && 'border-red-500 hover:border-red-600 focus:outline-red-600',
			)}
			{...props}
		>
			{children}
		</select>
		<SelectArrowIcon
			aria-hidden
			className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
		/>
	</div>
);

Select.PlaceholderOption = SelectPlaceholderOption;
