import { FormError } from './FormError';

import type { ReactNode } from 'react';

type FormFieldProps = Readonly<{
	label: string;
	helpText?: string;
	id?: string;
	error?: string;
	children: ReactNode;
}>;

export const FormField = ({
	id,
	label,
	helpText,
	error,
	children,
}: FormFieldProps) => (
	<div className="flex w-full flex-col gap-1.5 text-sm">
		<label htmlFor={id} className="text-left font-bold text-white">
			{label}
		</label>
		{children}
		{helpText ? (
			<p className="mt-0.5 text-white">{helpText}</p>
		) : (
			error && <FormError error={error} />
		)}
	</div>
);
