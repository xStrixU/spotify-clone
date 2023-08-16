import { AuthFormBox } from '../AuthFormBox';
import { SignUpForm } from './SignUpForm/SignUpForm';

import { Link } from '@/ui/components/Link/Link';

export const SignUpFormBox = () => (
	<AuthFormBox
		title="Sign up for free"
		bottomSection={
			<>
				Already have an account? <Link href="/sign-in">Log in to Spotify</Link>
			</>
		}
	>
		<SignUpForm />
	</AuthFormBox>
);
