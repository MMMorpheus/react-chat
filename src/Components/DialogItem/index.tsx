import { FC } from "react";
import { Avatar } from "Components";
import { formatTime } from "utils";

import { NavLink } from "react-router-dom";

import * as C from "./style";

interface IDialogItemProps {
  content: any;
  isOnline: boolean;
}

// TODO Navlink to prop shoul go to dynamic dialog :id prop component

export const DialogItem: FC<IDialogItemProps> = ({
  content: { createdAt, text, isMe, isRead, unread, user },
  isOnline,
}) => {
  return (
    <C.StyledDialog $isOnline={isOnline}>
      <NavLink to="/">
        <div className="isOnlineContainer">
          <div className="avatarContainer">
            <Avatar user={user} />
          </div>
        </div>

        <div className="content">
          <p className="content__fullName">{user.fullName}</p>

          <p className="content__message">{text}</p>

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
          <span className="content__createdAt">{formatTime(createdAt)}</span>
        </div>
      </NavLink>
    </C.StyledDialog>
  );
};

export default DialogItem;
