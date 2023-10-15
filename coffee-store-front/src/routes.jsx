import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import ViewCoffee from "./Pages/ViewCoffee";
import Update from "./Pages/Update";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://coffee-store-seven.vercel.app/coffee"),
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/view/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-seven.vercel.app/coffee/${params.id}`),
        element: <ViewCoffee />,
      },
      {
        path: "/coffee/update/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-seven.vercel.app/coffee/${params.id}`),
        element: <Update />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
    ],
  },
]);

export default routes;
