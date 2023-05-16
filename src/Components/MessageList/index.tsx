import {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface IMessageListProps {
  children: ReactNode
}

export const MessageList:FC<IMessageListProps> = ({children}) => {
    return (
        <List>{children}</List>
    );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: calc(100% - 138px);
  overflow-y: scroll;
  background-color: #fff;
`;
