import { genders } from '@/auth/data/genders';
import { FormGroup } from '@/forms/components/FormGroup';
import { Radio } from '@/ui/components/Radio/Radio';

export const GenderFormGroup = () => (
	<FormGroup label="What's your gender?">
		<div className="mt-2 flex flex-wrap gap-4">
			{genders.map(({ label, value }) => (
				<Radio key={value} name="gender" label={label} value={value} />
			))}
		</div>
	</FormGroup>
);
