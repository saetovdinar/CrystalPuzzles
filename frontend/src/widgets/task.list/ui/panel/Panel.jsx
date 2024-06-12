import styles from './Panel.module.scss';
import { Button } from '@shared/ui';
import { Fullname } from '@widgets/task.list';
import { useState, useEffect } from 'react';
export default function Panel() {
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
		<section className={styles.panel}>
			{!isMobile ? (
				<>
					<Fullname>Дмитриева Анастасия Алексеевна</Fullname>
					<Button className={styles.btn} title="Выберите учеников" downArrow />
					<Button className={styles.btn} title="Выберите группу" downArrow />
					<Button className={styles.btn} title="Выберите уровень" downArrow />
					<Button className={styles.send_btn} title="Отправить чек-лист" />
				</>
			) : (
				<>
					<Button className={styles.btn} title="Выберите учеников" downArrow />
					<Button className={styles.btn} title="Выберите группу" downArrow />
					<Button className={styles.btn} title="Выберите уровень" downArrow />
					<Button className={styles.send_btn} title="Отправить чек-лист" />
				</>
			)}
		</section>
	);
}
