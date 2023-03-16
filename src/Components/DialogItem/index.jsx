import React from "react";
import {Avatar} from "@/Components";
import { formatTime } from "@/utils";

import * as C from "./style";

const DialogItem = ({
  content: {
    createdAt,
    text,
    isMe,
    isRead,
    unread,
    user,
  },
  isOnline,
}) => {
  return (
    <C.DgItem>
      <C.DialogAvatarContainer $isOnline={isOnline}>
        <Avatar user={user}/>
      </C.DialogAvatarContainer>
      <C.DialogContent>
        <C.DialogFullname>{user.fullName}</C.DialogFullname>
        <C.DialogMessage>{text}</C.DialogMessage>
        {/* Rendering amount of unread msg */}
        {!isMe && unread ? (
          <C.Unread>{unread}</C.Unread>
        ) : (
          // Rendering double check if unread amount is null
          <C.NotificationContainer>
            <C.isRead $isRead={isRead} />
          </C.NotificationContainer>
        )}
        {/* Rendering createdAt time */}
        <C.DialogCreatedAt>{formatTime(createdAt)}</C.DialogCreatedAt>
      </C.DialogContent>
    </C.DgItem>
  );
};

export default DialogItem;
