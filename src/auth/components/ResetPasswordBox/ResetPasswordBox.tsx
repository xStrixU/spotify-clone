import { ResetPasswordForm } from './ResetPasswordForm';

export const ResetPasswordBox = () => (
	<div className="h-full w-full bg-black px-4 text-center text-white md:h-fit md:max-w-3xl md:rounded-lg md:py-12">
		<div className="mx-auto flex max-w-md flex-col gap-6">
			<h1 className="text-3xl font-bold md:text-5xl">Password Reset</h1>
			<p>
				Enter your <b>Spotify username</b>, or the <b>email address</b> that you
				used to register. {"We'll"} send you an email with your username and a
				link to reset your password.
			</p>
			<ResetPasswordForm />
		</div>
	</div>
);
