import styles from './NotificationTrain.module.scss';
import { Title } from '@shared/ui';

import { useNavigate } from 'react-router-dom';

export default function NotificationTrain() {
	const navigate = useNavigate();
	return (
		<section className={styles.container}>
			<Title tag="h2" className={styles.title}>
				Уведомления
			</Title>
			<div className={styles.notifications_count}> 2</div>
		</section>
	);
}
