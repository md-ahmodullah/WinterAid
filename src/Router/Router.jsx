import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Campaigns from "../Pages/Campaigns";
import Dashboard from "../Pages/Dashboard";
import HowToHelp from "../Pages/HowToHelp";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/campaigns",
    element: <Campaigns />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/how-to-help",
    element: <HowToHelp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
