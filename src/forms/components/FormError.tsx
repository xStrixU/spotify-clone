import ErrorIcon from '@/forms/assets/icons/error.svg';

type FormErrorProps = Readonly<{
	error: string;
}>;

export const FormError = ({ error }: FormErrorProps) => (
	<p className="mt-0.5 flex items-center gap-1 text-red-600">
		<ErrorIcon aria-hidden />
		{error}
	</p>
);
