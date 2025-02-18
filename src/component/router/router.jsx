import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Team from "../Pages/Team/Team";
import Career from "../Pages/Career/Career";
import CaseStudies from "../Pages/Home/CaseStudies/CaseStudies";
import ProjectShowcase from "../Pages/Home/ProjectShowcase/ProjectShowcase";
import Faq from "../Pages/Faq/Faq";
import Company from "../Pages/Company/Company";
import Apply from "../Pages/Apply/Apply";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import SignUp from "../../Authintication/SignUp";
import Login from "../../Authintication/Login";
import AllUsers from "../../Dashboard/AllUsers";
import AdminProvider from "../../Provider/AdminProvider";
import JobApply from "../../Dashboard/JobApply";

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
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/CaseStudies",
        element: <CaseStudies></CaseStudies>,
      },
      {
        path: "/Project",
        element: <ProjectShowcase />,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/Policy",
        element: <Company></Company>,
      },
      {
        path: "/apply/:id",
        element: <Apply />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/users',
        element: <AdminProvider><AllUsers /></AdminProvider>
      },
      {
        path: '/AppliedJob',
        element: <AdminProvider><JobApply/></AdminProvider>
      }
    ],
  },
]);
