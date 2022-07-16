import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

export default function EvenDetailPage(props) {
  const event = props.selectedEvent;

  // if event is falsey, will push out a error message to user
  if (!event) {
    return (
      <div className='center'>
        <p>Loading!</p>
      </div>
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
    revalidate: 30,
  };
}

// tells NextJS which ids should be prerendered in a dynamic page
export async function getStaticPaths() {
  const events = getFeaturedEvents();

  const paths = (await events).map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
