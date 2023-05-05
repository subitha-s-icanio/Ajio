import { lazy } from "react";
import { Navigate } from "react-router-dom";

// project imports
import MainLayout from "../layouts/index";
import { NAVIGATE_TO, PATH } from "./routePaths";
import Loadable from "../components/Loadable";

const SignIn = Loadable(
  lazy(() => import("../pages/SignIn/Index"))
);

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to={NAVIGATE_TO.signIn} />,
    },
    {
      path: PATH.signIn,
      element: <SignIn />,
    },
  ],
};

export default MainRoutes;
