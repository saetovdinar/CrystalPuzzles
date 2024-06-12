import styles from './Fullname.module.scss';

export default function Fullname({ children }) {
	return <div className={styles.name}>{children}</div>;
}
