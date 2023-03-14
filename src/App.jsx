import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const AppWrapper = styled.main`
  background-color: #f4f7fd;
`;

const App = () => {
  return (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default App;
