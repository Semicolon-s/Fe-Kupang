import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./screens/Dashboard";
import Management from "./screens/Management";
import Order from "./screens/Order";
import Register from "./screens/Register";
import History from "./screens/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "register-goods",
        element: <Register />,
      },
      {
        path: "product-order",
        element: <Order />,
      },
      {
        path: "stock-management",
        element: <Management />,
      },
      {
        path: "warehouse-history",
        element: <History />,
      },
    ],
  },
]);

export default router;
