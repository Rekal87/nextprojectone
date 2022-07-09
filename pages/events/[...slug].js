import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  // to not get a error on first load due to react undefined, this prevents crash
  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filetedYear = filterData[0];
  const filteredMonth = filterData[1];

  // converting the array strings into a number
  const numYear = +filetedYear;
  const numMonth = +filteredMonth;

  // checking if the filter is valid
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
