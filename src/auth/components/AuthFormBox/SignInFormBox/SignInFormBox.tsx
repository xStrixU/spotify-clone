import { AuthFormBox } from '../AuthFormBox';
import { SignInForm } from './SignInForm';

import { Link } from '@/ui/components/Link/Link';

export const SignInFormBox = () => (
	<AuthFormBox
		title="Log in to Spotify"
		bottomSection={
			<>
				{"Don't"} have an account?{' '}
				<Link href="/sign-up">Sign up for Spotify</Link>
			</>
		}
	>
		<SignInForm />
	</AuthFormBox>
);
