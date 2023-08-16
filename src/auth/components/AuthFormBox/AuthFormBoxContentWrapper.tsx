import { twMerge } from 'tailwind-merge';

import type { ElementType } from 'react';

import type { OverridableProps } from '@/common/types/components.types';

const DEFAULT_TAG = 'div';

export const AuthFormBoxContentWrapper = <
	TTag extends ElementType = typeof DEFAULT_TAG,
>({
	as,
	className,
	children,
}: OverridableProps<TTag>) => {
	const Tag = as ?? DEFAULT_TAG;

	return (
		<Tag className={twMerge('mx-auto md:w-96', className)}>{children}</Tag>
	);
};
