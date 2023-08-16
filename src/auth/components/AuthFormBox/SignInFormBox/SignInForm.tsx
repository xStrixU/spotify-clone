import { AuthFormBoxContentWrapper } from '../AuthFormBoxContentWrapper';

import { PasswordField } from '@/forms/components/InputFormField/PasswordField/PasswordField';
import { TextField } from '@/forms/components/InputFormField/TextField/TextField';
import { Button } from '@/ui/components/Button/Button';
import { Link } from '@/ui/components/Link/Link';
import { Switch } from '@/ui/components/Switch/Switch';

export const SignInForm = () => (
	<AuthFormBoxContentWrapper
		as="form"
		className="flex flex-col gap-5 text-center"
	>
		<TextField label="Email or username" />
		<PasswordField label="Password" />
		<Switch label="Remember me" />
		<div className="mb-2 mt-4 w-full">
			<Button fullWidth>Log in</Button>
		</div>
		<Link href="/password-reset">Forgot your password?</Link>
	</AuthFormBoxContentWrapper>
);
