import ProfilePage from "../Profile/ProfilePage";
import ProjectPage from "../Projects/ProjectPage";

import { createBrowserRouter } from "react-router"
import Layout from "./layout";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      { path:"/:pid", element: <ProjectPage/> },
      { index: true, element:<ProfilePage/>, }
    ],
  },
]);

export default router;



