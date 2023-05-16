import { FC } from "react";
import { Avatar } from "Components";
import { formatTime } from "utils";

import * as C from "./style";

interface IDialogItemProps {
  content: any;
  isOnline: boolean;
}

export const DialogItem: FC<IDialogItemProps> = ({
  content: { createdAt, text, isMe, isRead, unread, user },
  isOnline,
}) => {
  return (
    <C.DgItem>
      <C.isOnlineContainer $isOnline={isOnline}>
        <C.DialogAvatarContainer>
          <Avatar user={user} />
        </C.DialogAvatarContainer>
      </C.isOnlineContainer>
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
