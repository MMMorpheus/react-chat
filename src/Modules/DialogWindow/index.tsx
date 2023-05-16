import {FC, ReactNode} from "react";
import { InputBar, StatusBar, MessageList } from "Components";
import styled from "styled-components";

interface IDialogWindowProps {
  user?: any,
  children?: ReactNode
}

export const DialogWindow:FC<IDialogWindowProps> = ({user = {name: "Test", isOnline: true}, children}) => {
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
