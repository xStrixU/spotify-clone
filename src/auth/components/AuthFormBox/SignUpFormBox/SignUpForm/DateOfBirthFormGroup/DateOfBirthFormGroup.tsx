import { useId } from 'react';

import { DateOfBirthFormField } from './DateOfBirthFormField';
import { MonthSelect } from './MonthSelect';

import { FormGroup } from '@/forms/components/FormGroup';
import { Input } from '@/ui/components/Input/Input';

export const DateOfBirthFormGroup = () => {
	const [dayId, monthId, yearId] = [useId(), useId(), useId()];

	return (
		<FormGroup label="What's your date of birth?">
			<div className="flex justify-between">
				<div className="w-1/5">
					<DateOfBirthFormField id={dayId} label="Day">
						<Input
							id={dayId}
							type="number"
							min={1}
							maxLength={2}
							placeholder="DD"
						/>
					</DateOfBirthFormField>
				</div>
				<div className="w-[45%]">
					<DateOfBirthFormField id={monthId} label="Month">
						<MonthSelect id={monthId} />
					</DateOfBirthFormField>
				</div>
				<div className="w-1/4">
					<DateOfBirthFormField id={yearId} label="Year">
						<Input
							id={yearId}
							type="number"
							min={1}
							maxLength={4}
							placeholder="YYYY"
						/>
					</DateOfBirthFormField>
				</div>
			</div>
		</FormGroup>
	);
};
