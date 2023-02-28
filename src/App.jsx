import React from "react";
import { Auth } from "./Pages";

import styled from "styled-components";

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
      <Auth />
    </AppWrapper>
  );
};

export default App;
