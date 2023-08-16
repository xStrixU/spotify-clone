import { forwardRef, useId } from 'react';

import { FormField } from '../../FormField';

import { Input } from '@/ui/components/Input/Input';

import type { InputFormFieldProps } from '../InputFormField.types';

export const TextField = forwardRef<HTMLInputElement, InputFormFieldProps>(
	({ label, helpText, error, placeholder, ...props }, ref) => {
		const id = useId();

		return (
			<FormField id={id} label={label} helpText={helpText} error={error}>
				<Input
					ref={ref}
					id={id}
					type="text"
					placeholder={placeholder ?? label}
					fullWidth
					isError={!!error}
					{...props}
				/>
			</FormField>
		);
	},
);

TextField.displayName = 'TextField';
