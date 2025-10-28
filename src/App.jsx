import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Login from "./pages/login";
import Oplata from "./pages/register"
import Cart from "./pages/cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import path from "path";
import product from "./pages/product";
import Product from "./pages/product";
import Info from "./pages/Info";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/Checkout";
import Profile from "./pages/profile"
const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
          {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/login",
          element: <Login />,
        },
         {
          path: "/info/:ID",
          element: <Info />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
          {
          path: "/wishlist",
          element: <Wishlist />,
        },
            {
          path: "/checkout",
          element: <Checkout />,
        },
                    {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
