import { AuthFormBoxContentWrapper } from '../../AuthFormBoxContentWrapper';
import { DateOfBirthFormGroup } from './DateOfBirthFormGroup/DateOfBirthFormGroup';
import { GenderFormGroup } from './GenderFormGroup';

import { PasswordField } from '@/forms/components/InputFormField/PasswordField/PasswordField';
import { TextField } from '@/forms/components/InputFormField/TextField/TextField';
import { Button } from '@/ui/components/Button/Button';
import { Checkbox } from '@/ui/components/Checkbox/Checkbox';
import { Link } from '@/ui/components/Link/Link';

export const SignUpForm = () => (
	<AuthFormBoxContentWrapper as="form" className="flex flex-col gap-6">
		<TextField
			type="email"
			label="What's your email?"
			placeholder="Enter your email"
		/>
		<PasswordField label="Create a password" />
		<TextField
			label="What should we call you?"
			placeholder="Enter a profile name"
			helpText="This appears on your profile"
		/>
		<DateOfBirthFormGroup />
		<GenderFormGroup />
		<div className="mt-2 flex flex-col gap-8">
			<Checkbox label="Please send me news and offers from Spotify" />
			<Checkbox label="Share my registration data with Spotify's content providers for marketing purposes. Note that your data may be transferred to a country outside of the EEA as described in our privacy policy." />
			<Checkbox
				label={
					<>
						I agree to the{' '}
						<Link href="#">Spotify Terms and Conditions of Use</Link>.
					</>
				}
			/>
		</div>
		<div className="mt-4 w-full">
			<Button fullWidth>Sign up</Button>
		</div>
	</AuthFormBoxContentWrapper>
);
