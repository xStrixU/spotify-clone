import { ContinueWith } from './ContinueWith';

import type { ReactNode } from 'react';

type AuthFormBoxProps = Readonly<{
	title: string;
	bottomSection: ReactNode;
	children: ReactNode;
}>;

export const AuthFormBox = ({
	title,
	bottomSection,
	children,
}: AuthFormBoxProps) => (
	<div className="h-full w-full bg-black px-8 pb-10 text-white md:h-fit md:max-w-3xl md:rounded-lg md:px-24 md:pt-20">
		<h1 className="mb-8 text-3xl font-bold md:mb-12 md:text-center md:text-5xl">
			{title}
		</h1>
		<ContinueWith />
		<div className="md:border-b md:border-neutral-700 md:pb-11">{children}</div>
		<p className="mt-6 text-center text-neutral-400 md:mt-10">
			{bottomSection}
		</p>
	</div>
);
