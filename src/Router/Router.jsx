import { createBrowserRouter } from "react-router-dom";
import DonateNow from "../Components/DonateNow";
import Mission from "../Components/Mission";
import Partners from "../Components/Partners";
import Programs from "../Components/Programs";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import Campaigns from "../Pages/Campaigns";
import Dashboard from "../Pages/Dashboard";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import HowToHelp from "../Pages/HowToHelp";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Mission />,
          },
          {
            path: "/programs",
            element: <Programs />,
          },
          {
            path: "/partners",
            element: <Partners />,
          },
          {
            path: "/donate-now",
            element: <DonateNow />,
          },
        ],
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/campaigns/:id",
        element: <Details />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/how-to-help",
        element: <HowToHelp />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
