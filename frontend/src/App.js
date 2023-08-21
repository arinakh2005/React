import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEventPage from './pages/Events/EditEvent';
import EventDetailPage from './pages/Events/EventDetail';
import EventsPage from './pages/Events/Events';
import EventsRootLayout from './pages/Events/EventsRoot';
import NewEventPage from './pages/Events/NewEvent';
import HomePage from './pages/Home/Home';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
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
