import { Avatar, Exercises, Levels, Panel } from '@widgets/task.list';
import { Page } from '@shared/ui';

export default function CheckListPage() {
	return (
		<Page title="Чек-листы">
			<Avatar />
			<Levels />
			<Panel />
			<Exercises />
		</Page>
	);
}
