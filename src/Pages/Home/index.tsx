import React, { useState } from "react";
import { SideBar, DialogWindow } from "@/Modules";
import { Auth } from "@/Pages";

import styled from "styled-components";


const Home = () => {
  const [isLogged, setisLogged] = useState(true);

  return !isLogged ? (
    <Auth />
  ) : (
    <StyledHome>
      <SideBar />
      <DialogWindow />
    </StyledHome>
  );
};

const StyledHome = styled.section`
  margin: 0 auto;
  width: 1140px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
  display: flex;
  
`;

export default Home;