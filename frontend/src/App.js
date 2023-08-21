import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { action as manipulateEventAction } from './components/EventForm';
import ErrorPage from './pages/Error/Error';
import EditEventPage from './pages/Events/EditEvent';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/Events/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events/Events';
import EventsRootLayout from './pages/Events/EventsRoot';
import NewEventPage from './pages/Events/NewEvent';
import HomePage from './pages/Home/Home';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: manipulateEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
