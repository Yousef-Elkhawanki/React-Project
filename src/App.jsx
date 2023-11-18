import React, { useContext } from "react";
import { Layout } from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
import { SingleItem } from "./pages/SingleItem";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
export const App = () => {
  const client = new QueryClient();
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/categories", element: <Categories /> },
        {
          path: "/Shop",
          element: <Shop />,
        },
        { path: "/Shop/singleItem/:id", element: <SingleItem /> },
        { path: "/Contact", element: <Contact /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={Routing} />
      </QueryClientProvider>
    </>
  );
};
