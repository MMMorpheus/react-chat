import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const AppWrapper = styled.main`
  width: 100%;
  height: 100%;
  color: #202020;
  display: flex;
  align-items: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default App;
