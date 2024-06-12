import styles from './Schedule.module.scss';
import { Title } from '@shared/ui';
import { Link } from 'react-router-dom';

export default function Schedule({ children, to }) {
	return (
		<Link to={to} className={styles.schedule_wrap}>
			<div className={styles.content_wrap}>
				<Title tag="h2" className={styles.subtitle}>
					Расписание
				</Title>
				{[...Array(2)].map((_, index) => (
					<div key={index} className={styles.timetable_wrap}>
						<div className={styles.general_met_timetable_item}>
							<p className={styles.general_met_timetable_item_descr}>
								<span className={styles.gen_timetable_diff_color}>17/10</span>{' '}
								площадка номер 1{' '}
								<span className={styles.gen_timetable_diff_color}>14:00</span> -
								5 группа, тренер Дмитриева А.
							</p>
						</div>

						<div className={styles.general_met_timetable_decor_line}></div>
					</div>
				))}
			</div>

			<div className={styles.btns_wrap}>{children}</div>
		</Link>
	);
}
