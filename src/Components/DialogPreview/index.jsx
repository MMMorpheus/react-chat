import React from "react";
import * as D from "./style";
import {Avatar} from "../";
import { formatTime } from "../../utils";

const DialogPreview = ({
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
    <D.Preview>
      <D.AvatarContainer>
        <Avatar user={user}/>
        {isOnline && <D.Online />}
      </D.AvatarContainer>
      <D.Info>
        <D.Fullname>{user.fullName}</D.Fullname>
        <D.LastMessage>{text}</D.LastMessage>
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
      </D.Info>
    </D.Preview>
  );
};

export default DialogPreview;
