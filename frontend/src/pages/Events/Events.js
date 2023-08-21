import { useLoaderData } from 'react-router-dom';
import EventsList from '../../components/EventsList';

const EventsPage = (param) => {
  const events = useLoaderData();

  return (
    <EventsList events={events} />
  );
};

export default EventsPage;