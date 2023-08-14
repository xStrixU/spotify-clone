import { forwardRef } from 'react';

import CheckIcon from '@/ui/assets/icons/check.svg';

import type { ReactNode } from 'react';

type CheckboxProps = Readonly<{
	label?: ReactNode;
}> &
	JSX.IntrinsicElements['input'];

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, ...props }, ref) => (
		<label className="group flex w-fit cursor-pointer select-none gap-3 text-sm font-medium text-white">
			<input ref={ref} type="checkbox" className="peer sr-only" {...props} />
			<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-neutral-500 bg-neutral-900 text-black outline-1 outline-green-500 transition-[border-color] duration-200 group-hover:border-green-500 group-active:border-green-500 group-active:outline group-active:-outline-offset-2 peer-checked:border-none peer-checked:bg-green-500 peer-focus:border-green-500 [&>svg]:hidden peer-checked:[&>svg]:block">
				<CheckIcon aria-hidden />
			</div>
			<span className="relative -top-0.5">{label}</span>
		</label>
	),
);

Checkbox.displayName = 'Checkbox';
