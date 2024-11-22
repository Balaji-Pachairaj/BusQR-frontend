import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./slices";
import { page_routes } from "./configs/routes";
import BusStopViewPage from "./pages/busStopPages/BusStopViewPage";

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
