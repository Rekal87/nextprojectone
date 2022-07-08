import Link from 'next/link';
import Image from 'next/image';
import styles from './event-item.module.css';

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  // setting up the date to be easier readable
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(',', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={'/' + image} alt={title} width='100%' height='100%' />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
