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
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        loader: ()=>fetch('http://localhost:3000/products'),
        Component: AllProducts,
      },
      {
        path: "myProducts",
        element: (
          <PrivateRoutes>
            <MyProducts></MyProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "myBids",
        element: (
          <PrivateRoutes>
            <MyBids></MyBids>
          </PrivateRoutes>
        ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: 'productDetails/:id',
        loader: ({params})=>fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails,
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
