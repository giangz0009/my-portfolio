import About from "Components/pages/About";
import Contacts from "Components/pages/Contacts";
import Home from "Components/pages/Home";
import Portfolio from "Components/pages/Portfolio";
import Resume from "Components/pages/Resume";
import React from "react";
import {
  createHashRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import MainWrapper from "../MainWrapper";

export const sidebarRoute: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
];

const declareRoute: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/home"} replace />,
  },
  {
    element: <MainWrapper />,
    children: [...sidebarRoute],
  },
];

const MainRouter = () => {
  const router = createHashRouter(declareRoute);

  return <RouterProvider router={router} />;
};

export default MainRouter;
