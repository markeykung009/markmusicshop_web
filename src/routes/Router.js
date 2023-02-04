import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../layouts/Layout";
import Homepage from "../pages/Homepage";
import Shoppingpage from "../pages/Shoppingpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/shopping",
        element: <Shoppingpage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
