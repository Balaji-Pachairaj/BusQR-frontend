import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./slices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className=" text-center  ">Hello world Bus QR</h1>,
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
