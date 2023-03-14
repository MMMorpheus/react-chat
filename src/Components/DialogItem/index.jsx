import React from "react";
import {Avatar} from "@/Components";
import { formatTime } from "@/utils";

import * as D from "./style";

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
    <D.Item>
      <D.AvatarContainer $isOnline={isOnline}>
        <Avatar user={user}/>
      </D.AvatarContainer>
      <D.Content>
        <D.Fullname>{user.fullName}</D.Fullname>
        <D.Message>{text}</D.Message>
        {/* Rendering amount of unread msg */}
        {!isMe && unread ? (
          <D.Unread>{unread}</D.Unread>
        ) : (
          // Rendering double check if unread amount is null
          <D.NotificationContainer>
            <D.isRead $isRead={isRead} />
          </D.NotificationContainer>
        )}
        {/* Rendering createdAt time */}
        <D.CreatedAt>{formatTime(createdAt)}</D.CreatedAt>
      </D.Content>
    </D.Item>
  );
};

export default DialogItem;
