import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Auth from "./Pages/Auth";

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #202020;
`;

const App = () => {
  return (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default App;
