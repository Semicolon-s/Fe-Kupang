import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./screens/Dashboard";
import Management from "./screens/Management";
import Order from "./screens/Order";
import Register from "./screens/Register";
import History from "./screens/History";
import ItemInfo from "./components/ItemInfo";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/Fe-Kupang`,
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        // 상품 관리
        path: "register-goods",
        element: <Register />,
        children: [{ path: "", element: <ItemInfo /> }],
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
