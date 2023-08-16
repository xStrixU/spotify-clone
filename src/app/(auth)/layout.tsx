import { AuthHeader } from '@/auth/components/AuthHeader';

import type { ReactNode } from 'react';

const AuthLayout = ({ children }: { readonly children: ReactNode }) => (
	<div className="flex h-full flex-col">
		<AuthHeader />
		<div className="flex grow justify-center bg-gradient-to-b from-[#1a1a1a] to-black md:p-8">
			{children}
		</div>
	</div>
);

export default AuthLayout;
