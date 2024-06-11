import styles from './Levels.module.scss';

export default function CheckListPage() {
	const tempArray = Array.from({ length: 5 });
	return (
		<section className={styles.levels}>
			<div className={styles.level}>
				Уровень:
				<span className={styles.levels_text}></span>
			</div>
			<div className={styles.place}>
				Площадка:
				<span className={styles.levels_text}>
					2- Бережковская набережная, д. 20, стр. 6
				</span>
			</div>
			{tempArray.map((_, index) => (
				<div key={index} className={styles.student}>
					Ученик:
					<span className={styles.levels_text}></span>
				</div>
			))}
		</section>
	);
}
