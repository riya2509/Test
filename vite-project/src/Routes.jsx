import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import StudentHome from "./StudentHome";
import Home from "./Home";
import StudentHome from "./StudentHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/StudentHome",
    element: <StudentHome />,
  },
]);
function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
