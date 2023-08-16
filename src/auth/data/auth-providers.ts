import AppleIcon from '@/auth/assets/icons/apple.svg';
import FacebookIcon from '@/auth/assets/icons/facebook.svg';
import GoogleIcon from '@/auth/assets/icons/google.svg';

import type { SVGComponent } from '@/common/types/react.types';

interface AuthProvider {
	name: string;
	icon: SVGComponent;
}

export const authProviders: AuthProvider[] = [
	{
		name: 'Google',
		icon: GoogleIcon,
	},
	{
		name: 'Facebook',
		icon: FacebookIcon,
	},
	{
		name: 'Apple',
		icon: AppleIcon,
	},
];
