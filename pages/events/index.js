import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';

export default function AllEventPage() {
  const allEvents = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={allEvents} />
    </Fragment>
  );
}
