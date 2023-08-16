import { FormError } from './FormError';

import type { ReactNode } from 'react';

type FormGroupProps = Readonly<{
	label: string;
	error?: string;
	children: ReactNode;
}>;

export const FormGroup = ({ label, error, children }: FormGroupProps) => (
	<fieldset className="flex w-full flex-col gap-1.5 text-sm">
		<legend className="font-bold text-white">{label}</legend>
		{children}
		{error && <FormError error={error} />}
	</fieldset>
);
