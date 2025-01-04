import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLaout/Main";
import Home from "../pages/Home/home/Home";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
export default router;
