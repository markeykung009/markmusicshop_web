import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../layouts/Layout";
import Cartpage from "../pages/Cartpage";
import Homepage from "../pages/Homepage";
import Itempage from "../pages/Itempage";
import Shoppingpage from "../pages/Shoppingpage";
import { ProductContextProvider } from "../contexts/ProductContext";
import Paymentpage from "../pages/Paymentpage";
import Adminpage from "../pages/Adminpage";
import Statuspage from "../pages/Statuspage";
import Searchpage from "../pages/Searchpage";

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
      {
        path: "/item/:productId",
        element: <Itempage />,
      },
      {
        path: "/cart",
        element: <Cartpage />,
      },
      {
        path: "/payment",
        element: <Paymentpage />,
      },
      {
        path: "/admin",
        element: <Adminpage />,
      },
      {
        path: "/status",
        element: <Statuspage />,
      },
      {
        path: "/search",
        element: <Searchpage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
