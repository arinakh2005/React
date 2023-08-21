import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../../components/EventsList';

const EventsPage = (param) => {
  const data = useLoaderData();
  const events = data.events;

  return (
    <EventsList events={events} />
  );
};

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // Alternative
    // throw new Response(
    //   JSON.stringify({ message: 'Could not fetch events.' }),
    //   {
    //     status: 500,
    //   });
    throw json(
      { message: 'Could not fetch events.' },
      { status: 500 },
    );
  } else {
    return response;
  }
}