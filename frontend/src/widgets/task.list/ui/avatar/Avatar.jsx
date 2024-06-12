import styles from './Avatar.module.scss';
import { Fullname } from '@widgets/task.list';
import { useState, useEffect } from 'react';
export default function CheckListPage() {
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
		<div className={styles.container}>
			<section className={styles.avatar}>
				<img src="" alt="" />
			</section>
			{isMobile && <Fullname>Дмитриева Анастасия </Fullname>}
		</div>
	);
}
