import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  EventsPage,
  eventsLoader,
  eventDetailLoader,
  EventDetailPage,
  NewEventPage,
  EditEventPage,
  RootLayout,
  EventsRootLayout,
  ErrorPage,
  manipulateEventAction,
  deleteEventAction
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage />, action: manipulateEventAction },
            ],
          },
          { path: "new", element: <NewEventPage />, action: manipulateEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
