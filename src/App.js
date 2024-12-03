import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./slices";
import { page_routes } from "./configs/routes";
import BusStopViewPage from "./pages/busStopPages/BusStopViewPage";
import RouteViewPage from "./pages/routeViewPages/RouteViewPage";
import BusStopList from "./pages/busStopPages/BusStopList";
import BusStopAddBusStop from "./pages/busStopPages/BusStopAddBusStop";
import BusStopSearchAddAdminPage from "./pages/BusStopAdminPages/BusStopSearchAddAdminPage";
import BusStopSearchAdmin from "./pages/BusStopAdminPages/BusStopSearchAdmin";
import RouteCreateAdminPage from "./pages/AdminPages/Routes/RouteCreateAdminPage";
import RouteListAdminPage from "./pages/AdminPages/Routes/RouteListAdminPage";
import TripCreateAdminPage from "./pages/AdminPages/Trip/TripCreateAdminPage";
import TripListAdminPage from "./pages/AdminPages/Trip/TripListAdminPage";
import TripBusStopTimeCreatePage from "./pages/AdminPages/TripBusStopTime/TripBusStopTimeCreatePage";
import TripBusStopTimeListPage from "./pages/AdminPages/TripBusStopTime/TripBusStopTimeListPage";
import BusStopIndivPage from "./pages/BusStopAdminPages/BusStopIndivPage";

const router = createBrowserRouter([
  {
    path: page_routes?.home?.direct_link,
    element: <h1 className=" text-center">Hello world Bus QR</h1>,
  },

  {
    path: page_routes?.bus_stop_view?.direct_link,
    children: [
      {
        index: true,
        element: <BusStopViewPage />,
      },
    ],
  },

  {
    path: page_routes?.bus_stop_admin_view?.direct_link,
    children: [
      {
        index: true,
        element: <BusStopViewPage />,
      },
      {
        path: page_routes?.bus_stop_list?.direct_link,
        element: <BusStopList />,
      },
      {
        path: page_routes?.bus_stop_add?.direct_link,
        element: <BusStopAddBusStop />,
      },
      {
        path: page_routes?.bus_stop_search_add?.direct_link,
        element: <BusStopSearchAddAdminPage />,
      },
      {
        path: page_routes?.bus_stop_search_admin?.direct_link,
        element: <BusStopSearchAdmin />,
      },
      {
        path: page_routes?.bus_stop_indiv?.direct_link,
        element: <BusStopIndivPage />,
      },
    ],
  },

  // admin
  {
    path: page_routes?.admin.direct_link,
    children: [
      { index: true, elment: <></> },
      // route- admin
      {
        path: page_routes.route_admin.direct_link,
        children: [
          { index: true, elment: <></> },
          {
            path: page_routes.route_create_admin.direct_link,
            element: <RouteCreateAdminPage />,
          },
          {
            path: page_routes.route_list_admin.direct_link,
            element: <RouteListAdminPage />,
          },
        ],
      },
      // Trip - admin
      {
        path: page_routes.trip_admin.direct_link,
        children: [
          { index: true, element: <></> },
          {
            path: page_routes.trip_create_admin.direct_link,
            element: <TripCreateAdminPage />,
          },
          {
            path: page_routes?.trip_list_admin.direct_link,
            element: <TripListAdminPage />,
          },
        ],
      },
      // --------------------------------
      {
        path: page_routes.tripbusstoptime_admin.direct_link,
        children: [
          { index: true, element: <></> },
          {
            path: page_routes.tripbusstoptime_create.direct_link,
            element: <TripBusStopTimeCreatePage />,
          },
          {
            path: page_routes.tripbusstoptime_list.direct_link,
            element: <TripBusStopTimeListPage />,
          },
        ],
      },
      // --------------------------------
    ],
  },
  // Route Page
  {
    path: page_routes?.route_view?.direct_link,
    children: [{ index: true, element: <RouteViewPage /> }],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
