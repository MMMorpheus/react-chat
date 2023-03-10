import React from "react";
import * as D from "./style";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

const DialogPreview = ({
  content: {
    user: { fullName, avatar },
    lastMessage: { text, isMe, isRead, unread },
  },
  isOnline,
}) => {
  return (
    <D.Preview>
      <D.Avatar>
        <img src={avatar} alt={`${fullName} avatar`} />
        {isOnline && <D.Online />}
      </D.Avatar>
      <D.Info>
        <D.Fullname>{fullName}</D.Fullname>
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
        <D.CreatedAt>
          {formatDistanceToNow(new Date(), { addSuffix: true, locale: ru })}
        </D.CreatedAt>
      </D.Info>
    </D.Preview>
  );
};

export default DialogPreview;
