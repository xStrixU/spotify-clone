import { InputAddon } from './InputAddon';

import type { ReactNode } from 'react';

type InputRightSectionProps = Readonly<{
	children: ReactNode;
}>;

export const InputRightSection = ({ children }: InputRightSectionProps) => (
	<InputAddon position="right">{children}</InputAddon>
);
