import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Team from "../Pages/Team/Team";
import Portfolio from "../Pages/Portfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/our-team",
        element: <Team />,
      },
    ],
  },
]);
