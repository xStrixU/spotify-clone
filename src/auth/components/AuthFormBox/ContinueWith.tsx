import { AuthFormBoxContentWrapper } from './AuthFormBoxContentWrapper';

import { authProviders } from '@/auth/data/auth-providers';
import { Button } from '@/ui/components/Button/Button';

export const ContinueWith = () => (
	<div className="mb-5">
		<AuthFormBoxContentWrapper className="flex flex-col gap-3">
			{authProviders.map(({ name, icon: Icon }) => (
				<Button key={name} variant="border" icon={<Icon />}>
					Continue with {name}
				</Button>
			))}
		</AuthFormBoxContentWrapper>
		<p className="mt-5 flex items-center font-medium text-neutral-400 before:mr-5 before:h-px before:grow before:bg-neutral-600 after:ml-5 after:h-px after:grow after:bg-neutral-600">
			or
		</p>
	</div>
);
