import type { ComponentPropsWithRef, ElementType } from 'react';

export type OverridableProps<TTag extends ElementType> = {
	as?: TTag;
} & Omit<ComponentPropsWithRef<TTag>, 'as'>;
