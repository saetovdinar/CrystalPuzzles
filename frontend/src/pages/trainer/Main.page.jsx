import { Page, Button, NotificationTrainer } from '@shared/ui';
import { Notification } from '@widgets/notification';
import { ScheduleCard } from '@features/schedule';
import { CheckList } from '@features/check.list';
import { useState, useEffect } from 'react';
import { Wrapper } from '@features/calendar';
export default function MainPage() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 425);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<Page title="Главная страница">
			{isMobile ? (
				<>
					<ScheduleCard />
					<Wrapper>
						<NotificationTrainer />
						<Button width="135px" height="50px" title="Сформировать чек-лист" />
					</Wrapper>
					
					<CheckList />
				</>
			) : (
				<>
					<Notification />
					<ScheduleCard>
						<Button title="Сформировать чек-лист" />
					</ScheduleCard>
					<CheckList />
				</>
			)}
		</Page>
	);
}
