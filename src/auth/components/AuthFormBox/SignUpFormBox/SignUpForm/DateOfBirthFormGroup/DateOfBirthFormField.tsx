import type { ReactNode } from 'react';

type DateOfBirthFormFieldProps = Readonly<{
	id: string;
	label: string;
	children: ReactNode;
}>;

export const DateOfBirthFormField = ({
	id,
	label,
	children,
}: DateOfBirthFormFieldProps) => (
	<div className="mt-2 flex flex-col gap-2.5">
		<label htmlFor={id} className="text-white">
			{label}
		</label>
		{children}
	</div>
);
