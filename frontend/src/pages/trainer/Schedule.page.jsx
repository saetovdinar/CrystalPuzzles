import { Page, Button } from '@shared/ui';
import { CalendarBlock, Wrapper } from '@features/calendar';
import { ScheduleTable } from '@features/schedule';

export default function SchedulePage() {
	return (
		<Page title="Расписание">
			<ScheduleTable />
			<Wrapper>
				<CalendarBlock />
				<Button title="Выберите площадку" downArrow />
			</Wrapper>
		</Page>
	);
}
