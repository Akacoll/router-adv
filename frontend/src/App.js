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
          { path: ":id", element: <EventDetailPage />, loader: eventDetailLoader, },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
