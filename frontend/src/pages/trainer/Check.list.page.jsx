import { Avatar, Exercises, Levels, Panel } from '@widgets/task.list';
import { Page } from '@shared/ui';
import { useState, useEffect } from 'react';
export default function CheckListPage() {
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
		<Page title="Чек-листы">
			{isMobile ? (
				<>
					<Avatar />
					<Panel />
					<Levels />
					<Exercises />
				</>
			) : (
				<>
					<Avatar />
					<Levels />
					<Panel />
					<Exercises />
				</>
			)}
		</Page>
	);
}
