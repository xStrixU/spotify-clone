import Link from 'next/link';

import Logo from '@/common/assets/svg/logo.svg';

export const AuthHeader = () => (
	<header className="flex h-24 shrink-0 items-center bg-black px-8 md:px-12">
		<Link href="/" aria-label="Go to index page">
			<Logo aria-hidden className="h-6 md:h-9" />
		</Link>
	</header>
);
