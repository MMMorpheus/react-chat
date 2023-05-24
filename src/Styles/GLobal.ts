import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
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
body {
  font-family: Roboto, sans-serif;
  background-color: #f4f7fd;
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
