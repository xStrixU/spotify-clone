import { months } from '@/auth/data/months';
import { Select } from '@/ui/components/Select/Select';

type MonthSelectProps = Readonly<{
	id: string;
}>;

export const MonthSelect = ({ id }: MonthSelectProps) => (
	<Select id={id}>
		<Select.PlaceholderOption>Month</Select.PlaceholderOption>
		{months.map(month => (
			<option key={month} value={month.toLowerCase()}>
				{month}
			</option>
		))}
	</Select>
);
