import React from "react";

import * as R from "./style";

const ChatRoom = ({ children, isOnline }) => {
  return (
    <R.Room>
      <R.Header>
        <div></div>
        <R.UserInfo>
          <R.UserName>Тарас Шевченко</R.UserName>
          <R.Status $isOnline={isOnline}>
            {isOnline ? "онлайн" : "офлайн"}
          </R.Status>
        </R.UserInfo>
        <R.EditBtn>
          <R.Edit />
        </R.EditBtn>
      </R.Header>
      <R.ChatArea>{children}</R.ChatArea>
      <R.TypingArea>

      </R.TypingArea>
    </R.Room>
  );
};

export default ChatRoom;
