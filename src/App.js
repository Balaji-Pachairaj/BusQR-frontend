import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./slices";
import { page_routes } from "./configs/routes";
import BusStopViewPage from "./pages/busStopPages/BusStopViewPage";
import RouteViewPage from "./pages/routeViewPages/RouteViewPage";
import BusStopList from "./pages/busStopPages/BusStopList";
import BusStopAddBusStop from "./pages/busStopPages/BusStopAddBusStop";

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
