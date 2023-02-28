import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginForm, RegisterForm } from "./Modules";
import Auth from "./Pages/Auth";

import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  body, html, #root {
    height: 100%;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Auth /> },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Global />
    <RouterProvider router={router} />
  </>
);
