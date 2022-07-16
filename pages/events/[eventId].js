import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById, getAllEvents } from '../../helpers/api-util';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function EvenDetailPage(props) {
  const event = props.selectedEvent;

  // if event is falsey, will push out a error message to user
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
  };
}

// tells NextJS which ids should be prerendered in a dynamic page
export async function getStaticPaths() {
  const events = getAllEvents();

  const paths = (await events).map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
