import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentHome from "./StudentHome";

const router = createBrowserRouter([
  {
    path: "/StudentHome",
    element: <StudentHome />,
  },
]);
function Route() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Route;
