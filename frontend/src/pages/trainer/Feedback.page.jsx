import { Page, Button } from '@shared/ui';
import { Feedback } from '@features/feedback';

export default function FeedbackPage() {
	return (
		<Page title="Обратная связь">
			<Feedback />
			<Button title="Отправить" />
		</Page>
	);
}
