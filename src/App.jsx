import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const AppWrapper = styled.main`
  display: flex;
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
