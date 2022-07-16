import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  return fetch(
    'https://nextjs-course-9b48b-default-rtdb.europe-west1.firebasedatabase.app/'
  ).then((response) => console.log(response));
}
