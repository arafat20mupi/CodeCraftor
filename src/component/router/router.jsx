import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Team from "../Pages/Team/Team";
import Career from "../Pages/Career/Career";
import Portfolio from "../Pages/Portfolio/Portfolio";
import CaseStudies from "../Pages/Home/CaseStudies/CaseStudies";
import ProjectShowcase from "../Pages/Home/ProjectShowcase/ProjectShowcase";
import Faq from "../Pages/Faq/Faq";
import Company from "../Pages/Company/Company";

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
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },
      {
        path: '/CaseStudies',
        element: <CaseStudies></CaseStudies>
      },
      {
        path: "/Project",
        element: <ProjectShowcase/>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/company',
        element: <Company></Company>
      },
      {
        path: '/contact',
      }
    ],
  },
]);
