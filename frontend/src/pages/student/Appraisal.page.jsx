import { Emoji } from '@features/emoji';
import { Page } from '@shared/ui';
import { Feedback, Wrapper } from '@features/feedback';

export default function AppraisalPage() {
	return (
		<Page title="Оценка">
			<Wrapper>
				<Feedback>Оставить комментарий тренеру</Feedback>
			</Wrapper>
			<Emoji />
		</Page>
	);
}
