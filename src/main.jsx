import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";
import ActiveSidebarContextProvider from "./context/ActiveSidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveSidebarContextProvider>
      <RouterProvider router={router} />
    </ActiveSidebarContextProvider>
  </React.StrictMode>
);
