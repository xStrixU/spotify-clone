import NextLink from 'next/link';

import type { ComponentProps } from 'react';

type LinkProps<T> = ComponentProps<typeof NextLink<T>>;

export const Link = <T,>(props: LinkProps<T>) => (
	<NextLink className="text-white underline hover:text-green-500" {...props} />
);
