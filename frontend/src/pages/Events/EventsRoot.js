import { Outlet } from 'react-router-dom';
import EventsNavigation from '../../components/EventsNavigation';

const EventsRootLayout = (param) => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;