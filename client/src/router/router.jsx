import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home";
import ProductPage from "../pages/Product";
import CartPage from "../pages/Cart";
import ProfilePage from "../pages/Profile";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:product_id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
