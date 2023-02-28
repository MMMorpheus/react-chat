import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "@fontsource/roboto";

import { createGlobalStyle } from "styled-components";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Global />
    <App />
  </>
);
