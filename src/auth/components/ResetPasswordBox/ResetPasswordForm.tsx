import { TextField } from '@/forms/components/InputFormField/TextField/TextField';
import { Button } from '@/ui/components/Button/Button';

export const ResetPasswordForm = () => (
	<form className="flex flex-col gap-5">
		<TextField label="Email address or username" />
		<Button fullWidth>Send</Button>
	</form>
);
