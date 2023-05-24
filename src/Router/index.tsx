import {Layout} from "Layout";
import { RequireAuth } from "HOCs";
import { Home, Auth } from "Pages";
import { LoginForm, RegisterForm } from "Modules";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      // TODO: add dynamic :id param to HomePage, which will be received from backend
      {
        path: "me",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          { index: true, element: <LoginForm /> },
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
    ],
  },
]);
