'use client';

import { forwardRef, useId, useState } from 'react';

import { FormField } from '../../FormField';
import { TogglePasswordButton } from './TogglePasswordButton';

import { Input } from '@/ui/components/Input/Input';

import type { InputFormFieldProps } from '../InputFormField.types';

type PasswordFieldProps = Omit<InputFormFieldProps, 'type' | 'rightSection'>;

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
	({ label, helpText, error, placeholder, ...props }, ref) => {
		const id = useId();
		const [isPasswordShown, setIsPasswordShown] = useState(false);

		return (
			<FormField id={id} label={label} helpText={helpText} error={error}>
				<Input
					ref={ref}
					id={id}
					type={isPasswordShown ? 'text' : 'password'}
					placeholder={placeholder ?? label}
					fullWidth
					isError={!!error}
					rightSection={
						<TogglePasswordButton
							isPasswordShown={isPasswordShown}
							onTogglePassword={setIsPasswordShown}
						/>
					}
					{...props}
				/>
			</FormField>
		);
	},
);

PasswordField.displayName = 'PasswordField';
