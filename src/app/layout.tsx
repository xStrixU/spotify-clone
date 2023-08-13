import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/common/assets/styles/globals.css';

export const metadata: Metadata = {
	title: 'Spotify - Web Player: Music for everyone',
	description:
		'Spotify is a digital music service that gives you access to millions of songs.',
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
