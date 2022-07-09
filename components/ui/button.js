import Link from 'next/link';
import styles from './button.module.css';

export default function Button(props) {
  // button checks if a link props has been passed, if truthy will render a link
  // if not it will render a normal button
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
