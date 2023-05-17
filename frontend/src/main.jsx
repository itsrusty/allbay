import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root.jsx";
import ErrorPage from "./components/error/error-page.jsx";

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all",
    element: "testing",
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: "/login",
    errorElement: <ErrorPage />,
  },
  {
    path: "/new/user",
    element: "/create-user",
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
