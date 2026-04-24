import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root.jsx";
import Home from "./components/Home/Home.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import MyProducts from "./components/MyProducts/MyProducts.jsx";
import MyBids from "./components/MyBids/MyBids.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: 'myProducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: 'myBids',
        element: <MyBids></MyBids>
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: 'login',
        Component: Login
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
