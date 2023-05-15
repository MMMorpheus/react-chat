import React from "react";
import { InputBar, StatusBar, MessageList } from "@/components";
import styled from "styled-components";

const DialogWindow = ({user = {name: "Test", isOnline: true}, children}) => {
  return (
    <Window>
      <StatusBar user={user} />
      <MessageList>{children}</MessageList>
      <InputBar />
    </Window>
  );
};

const Window = styled.section`
  flex: 1;
  background-color: #fff;
`;

export default DialogWindow;
