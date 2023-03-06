import React from "react";

import styled, { css } from "styled-components";
// M means styled components for Message component;
import * as M from "./style";
import { Text } from "../Styles";

import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

const Message = ({ user, text, attachments, isMe, isRead, isTyping }) => {
  return (
    <M.StyledMessage $isMe={isMe}>
      <M.AvatarContainer $isMe={isMe}>
        <img src={user.avatar} alt={`${user.fullname} avatar`} />
      </M.AvatarContainer>

      <M.Content>
        {isTyping && !text && (
          <>
          <M.TypingBubble>
            <M.Dot />
            <M.Dot />
            <M.Dot />
          </M.TypingBubble>
          <M.Hint>{`${user.fullname} печатает...`}</M.Hint>
          </>
        )}
        {text && (
          <M.Bubble $isMe={isMe}>
            <Text>{text}</Text>
          </M.Bubble>
        )}

        <M.AttachmentList>
          {attachments?.map((elem) => {
            return (
              <M.AttachmentItem>
                <img src={elem.url} alt={elem.filename} />
              </M.AttachmentItem>
            );
          })}
        </M.AttachmentList>

        {!isTyping && (
          <M.CreatedAt $isMe={isMe}>
            {formatDistanceToNow(new Date(), { addSuffix: true, locale: ru })}
          </M.CreatedAt>
        )}
      </M.Content>

      {!isTyping && <M.IsRead $isMe={isMe} $isRead={isRead} />}
    </M.StyledMessage>
  );
};

export default Message;
