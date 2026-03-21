import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";

import ProfilePage from "./ProfilePage";
import ProjectPage from "./ProjectPage";



const router = createBrowserRouter([
  {
    path:"/",
    element: <ProfilePage/>,
  },
  {
    path:"/:pid",
    element: <ProjectPage/>
  }
]);



function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
