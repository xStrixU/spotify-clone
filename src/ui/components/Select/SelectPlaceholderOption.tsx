import type { ReactNode } from 'react';

type SelectPlaceholderOptionProps = Readonly<{
	hidden?: boolean;
	children: ReactNode;
}>;

export const SelectPlaceholderOption = ({
	hidden,
	children,
}: SelectPlaceholderOptionProps) => (
	<option value="" selected disabled hidden={hidden}>
		{children}
	</option>
);
