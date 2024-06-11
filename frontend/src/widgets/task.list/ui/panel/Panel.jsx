import styles from './Panel.module.scss';
import { Button } from '@shared/ui';

export default function CheckListPage() {
	return (
		<section className={styles.panel}>
			<div className={styles.name}>Дмитриева Анастасия Алексеевна</div>
			<Button width="345px" title="Выберите учеников" downArrow />
			<Button width="345px" title="Выберите группу" downArrow />
			<Button width="345px" title="Выберите уровень" downArrow />
			<Button width="345px" title="Отправить чек-лист" />
		</section>
	);
}
