import { forwardRef } from 'react';

type RadioProps = Readonly<{ label?: string }> & JSX.IntrinsicElements['input'];

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ label, ...props }, ref) => (
		<label className="group flex w-fit cursor-pointer select-none gap-2 text-sm font-medium text-white">
			<input ref={ref} type="radio" className="peer sr-only" {...props} />
			<div className="h-4 w-4 rounded-full border border-neutral-500 bg-neutral-900 outline-1 outline-green-500 transition-[border-color] duration-200 group-hover:border-green-500 group-active:border-green-500 group-active:outline group-active:-outline-offset-2 peer-checked:border-4  peer-checked:border-green-500 peer-focus:border-green-500" />
			<span className="relative -top-0.5">{label}</span>
		</label>
	),
);

Radio.displayName = 'Radio';
