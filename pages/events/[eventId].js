import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../dummy-data';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function EvenDetailPage() {
  // id is part of the URL, so we use useRouter hook
  const router = useRouter();

  // query property is a object with a dynamic segment a.k.a ..event/[#] where # is the ID
  // by using the objects key we can access eventId
  const eventId = router.query.eventId;
  console.log(router.query);

  // then we call on the getEventById method which expects a argument "eventID"
  const event = getEventById(eventId);

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
