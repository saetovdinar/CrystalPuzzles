import { Page, Button } from '@shared/ui';
import { Feedback, Wrapper } from '@features/feedback';
import { useState, useEffect } from 'react';

export default function FeedbackPage() {
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
		<Page title="Обратная связь">
			<Wrapper>
				<Feedback>Оставить комментарий тренеру</Feedback>
				{isMobile ? (
					<Button title="Отправить комментарий" width="335px" />
				) : (
					<Button title="Отправить комментарий" width="100%" />
				)}
			</Wrapper>
			{!isMobile && (
				<Button
					width="335px"
					height="57px"
					title="Выберите тренера"
					downArrow
				/>
			)}
		</Page>
	);
}
