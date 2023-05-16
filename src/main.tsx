import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { LoginForm, RegisterForm } from "./Modules";
import { Auth, Home } from "./Pages";

import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    outline: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body, html, #root, section {
    height: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  label {
    position: relative;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/me",
        element: <Home />,
      },
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Global />
      <RouterProvider router={router} />
  </>
);
