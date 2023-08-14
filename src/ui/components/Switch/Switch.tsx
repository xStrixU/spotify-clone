import { forwardRef } from 'react';

type SwitchProps = Readonly<{
	label?: string;
}> &
	JSX.IntrinsicElements['input'];

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
	({ label, ...props }, ref) => (
		<label className="group flex w-fit cursor-pointer select-none gap-2 text-sm font-medium text-white">
			<input ref={ref} type="checkbox" className="peer sr-only" {...props} />
			<div className="relative h-4 w-8 rounded-full bg-neutral-500 transition-colors before:absolute before:left-0.5 before:top-0.5 before:h-3 before:w-3 before:rounded-full before:bg-neutral-900 before:transition-all group-active:bg-neutral-600 group-active:before:w-5 peer-checked:bg-green-600 peer-checked:before:left-[calc(100%-0.125rem)] peer-checked:before:-translate-x-full group-active:peer-checked:bg-green-800" />
			<span className="relative -top-0.5">{label}</span>
		</label>
	),
);

Switch.displayName = 'Switch';
