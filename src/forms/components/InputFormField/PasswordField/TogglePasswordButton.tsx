import HideIcon from '@/forms/assets/icons/hide.svg';
import ShowIcon from '@/forms/assets/icons/show.svg';

type TogglePasswordButtonProps = Readonly<{
	isPasswordShown: boolean;
	onTogglePassword: (isPasswordShown: boolean) => void;
}>;

export const TogglePasswordButton = ({
	isPasswordShown,
	onTogglePassword,
}: TogglePasswordButtonProps) => (
	<button
		type="button"
		tabIndex={-1}
		aria-hidden
		onClick={() => onTogglePassword(!isPasswordShown)}
		className="h-full text-neutral-400 hover:scale-105 hover:text-white"
	>
		{isPasswordShown ? <ShowIcon /> : <HideIcon />}
	</button>
);
