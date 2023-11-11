import React, { useContext } from "react";
import { Layout } from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
import { SingleItem } from "./pages/SingleItem";
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
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={Routing} />
      </QueryClientProvider>
    </>
  );
};
