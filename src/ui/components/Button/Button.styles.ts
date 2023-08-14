export type Size = keyof typeof sizes;

export type Variant = keyof typeof variants;

export const sizes = {
	small: 'h-8 px-4',
	medium: 'h-12 px-8',
} as const;

export const variants = {
	white: 'bg-white text-black hover:bg-neutral-100 active:bg-neutral-400',
	primary: 'bg-green-500 text-black hover:bg-green-400 active:bg-green-800',
	transparent:
		'bg-transparent px-2 text-neutral-400 hover:text-white active:text-neutral-500',
	border:
		'border border-neutral-500 text-white hover:border-white active:border-neutral-600',
} as const;
