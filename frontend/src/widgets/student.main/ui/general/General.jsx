import { Feedback, Wrapper } from '@features/feedback/';
import { useState, useEffect } from 'react';
import { CardLink, RewardsPopup, Button } from '@shared/ui';
import styles from './General.module.scss';

export default function General() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
	const [reward, setReward] = useState(false);
	const tempArray = Array(2).fill(0);

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
		<>
			<CardLink
				title={'Мои награды'}
				className={styles.reward_img + ' ' + styles.card_cont}
				onClick={() => setReward(true)}
			/>
			{reward && <RewardsPopup onHide={() => setReward(false)} />}
			<CardLink
				to="/train"
				title={'Мои тренировки'}
				className={styles.card_cont}
			>
				<span className={styles.train_text}>тренер оценил вашу тренировку</span>
			</CardLink>
			<CardLink
				to="/check-list"
				title={'Мои чек-листы'}
				className={styles.card_cont}
			/>
			<CardLink
				to="/schedule"
				title={'Мои расписание на сегодня'}
				className={styles.card_cont}
			>
				<div className={styles.schedule_container}>
					{tempArray.map((_, index) => (
						<div key={index} className={styles.shedule_item}>
							<span className={styles.shedule_item_time}>12:50</span>
							<span> - </span>
							<span>
								1 площадка, <br /> тренер - Ильина Анастасия
							</span>
						</div>
					))}
				</div>
			</CardLink>
			{!isMobile && (
				<Wrapper>
					<Feedback>Оставить комментарий тренеру</Feedback>
					<Button title="Отправить комментарий" width="100%" />
				</Wrapper>
			)}
			{isMobile && (
				<Button
					title="Написать тренеру"
					width="334px"
					height="64px"
					className={styles.btn}
				/>
			)}
		</>
	);
}
