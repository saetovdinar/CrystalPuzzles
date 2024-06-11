import { Page, Button } from '@shared/ui';
import { Feedback } from '@features/feedback';
import { Wrapper } from '@shared/ui';
export default function FeedbackPage() {
	return (
		<Page title="Обратная связь">
			<Wrapper>
				<Feedback>Оставить комментарий методисту</Feedback>
				<Button width="335px" title="Отправить" />
			</Wrapper>
		</Page>
	);
}
