import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/coffee"),
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
    ],
  },
]);

export default routes;
