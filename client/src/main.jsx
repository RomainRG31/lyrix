import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Layout from "./components/Layouts/Layout";
import Search from "./pages/Search/Search";
import Summary from "./pages/Summary/Summary";
import Favorites from "./pages/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
