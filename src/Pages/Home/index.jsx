import React, { useState } from "react";
import { Auth } from "../";
import { DialogsList, Dialog } from "../../Modules";
import { Message } from "../../Components";
import testAvatar from "../../assets/img/testAvatar.png";

import styled from "styled-components";
const StyledHome = styled.section`
  display: flex;
  height: 100%;
`;

const Home = () => {
  const [isLogged, setisLogged] = useState(false);
  return isLogged ? (
    <Auth />
  ) : (
    <StyledHome>
      <DialogsList />
      <Dialog>
        <Message text ='Hello from React.JS! Welcome to the incredible world of Web Development!' user = {user}/>
        <Message isMe={true} text ='Hello from other user! Welcome to the incredible world of Web Development!' user = {user}/>
      </Dialog>
    </StyledHome>
  );
};

export default Home;

const user = {
  fullname: "John Doe",
  avatar: testAvatar,
};
