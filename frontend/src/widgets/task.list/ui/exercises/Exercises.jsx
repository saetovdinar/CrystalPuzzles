import styles from './Exercises.module.scss';

export default function CheckListPage() {
	const tempArray = Array.from({ length: 5 });
	return (
		<section className={styles.exercises}>
			<div className={styles.exercises_header}>Чек-лист</div>
			{tempArray.map((_, index) => (
				<div key={index} className={styles.exercises_item}></div>
			))}
		</section>
	);
}
