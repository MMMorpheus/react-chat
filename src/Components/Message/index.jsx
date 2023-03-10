import React from "react";

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
        {/* Rendering typing animation */}

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

        {/* Rendering msg bubble if text is existing*/}

        {text && (
          <M.Bubble $isMe={isMe}>
            <Text>{text}</Text>
          </M.Bubble>
        )}

        {/* Rendering big picture if it is only one*/}

        {!text && attachments?.length === 1 && (
          <M.BigAttachmentItem>
            <img src={attachments[0].url} alt={attachments[0].filename} />
          </M.BigAttachmentItem>
        )}

        {/* Rendering all passed pictures if text is existing*/}

        {text && (
          <M.AttachmentList>
            {attachments?.map((elem) => {
              return (
                <M.SmallAttachmentItem>
                  <img src={elem.url} alt={elem.filename} />
                </M.SmallAttachmentItem>
              );
            })}
          </M.AttachmentList>
        )}

        {/* Rendering createdAt hint if user isn't typing*/}

        {!isTyping && (
          <M.CreatedAt $isMe={isMe}>
            {formatDistanceToNow(new Date(), { addSuffix: true, locale: ru })}
          </M.CreatedAt>
        )}
      </M.Content>

      {/* Rendering double-check if user has alrealy typed msg and has read it*/}

      {!isTyping && <M.IsRead $isMe={isMe} $isRead={isRead} />}
    </M.StyledMessage>
  );
};

export default Message;
