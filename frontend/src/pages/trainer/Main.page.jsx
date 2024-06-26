import Page from '@components/page/Page';
import Button from '@components/button/Button';
import Notification from '@components/notification/Notification';
import Schedule from '@components/schedule/schedule.card/Schedule';
import CheckList from '@components/check.list/Check.list';

export default function MainPage() {
	return (
		<Page title="Главная страница">
			<Notification />
			<Schedule>
				<Button title="Сформировать чек-лист" />
			</Schedule>
			<CheckList />
		</Page>
	);
}
