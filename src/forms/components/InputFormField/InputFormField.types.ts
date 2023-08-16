import type { FormField } from '../FormField';
import type { ComponentProps } from 'react';

import type { Input } from '@/ui/components/Input/Input';

export type InputFormFieldProps = Omit<
	ComponentProps<typeof FormField>,
	'id' | 'children'
> &
	Omit<ComponentProps<typeof Input>, 'id' | 'fullWidth' | 'isError'>;
