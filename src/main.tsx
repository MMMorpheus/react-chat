import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import {router} from "Router"

import { Global } from "Styles/GLobal";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Global />
    <RouterProvider router={router} />
  </>
);
