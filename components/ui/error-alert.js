import styles from './error-alert.module.css';

export default function ErrorAlert(props) {
  return <div className={styles.alert}>{props.children}</div>;
}
