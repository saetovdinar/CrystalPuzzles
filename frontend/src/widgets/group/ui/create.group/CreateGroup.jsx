import styles from './CreateGroup.module.scss';
import { Button } from '@shared/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './search/Search';
import Student from './student/Student';
import GroupName from './group.name/GroupName';

export default function CreateGroup() {
	const [showForm, setShowForm] = useState(false);
	const [student] = useState([1, 2, 3]);
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.container} data-form={showForm}>
				<GroupName setShowForm={setShowForm} />
				{showForm && (
					<>
						<Search />
						{student.map((item, index) => (
							<Student key={index} />
						))}
						<Button title="Создать" className={styles.btn} />
					</>
				)}
			</div>
			<Button
				title="Ученики"
				width="335px"
				height="42px"
				onClick={() => navigate('/students')}
			/>
		</>
	);
}
