import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);