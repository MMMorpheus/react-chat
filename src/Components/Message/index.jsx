import React from "react";
import AudioMsg from "../AudioMsg";

// M means styled components for Message component;
import * as M from "./style";
import { Text } from "../Styles";

import { formatTime, colorGenerator } from "../../utils";

const Message = ({
  user: { fullname, avatar, hash },
  text,
  attachments,
  isMe,
  isRead,
  isTyping,
  created_at,
  audio,
}) => {
  return (
    <M.StyledMessage $isMe={isMe}>
      <M.AvatarContainer $isMe={isMe}>
        {avatar ? (
          <img src={avatar} alt={`${fullname} avatar`} />
        ) : (
          <M.Gradient $colors={colorGenerator(hash)}>{fullname[0].toUpperCase()}</M.Gradient>
        )}
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
            <M.Hint>{`${fullname} печатает...`}</M.Hint>
          </>
        )}

        {/* Rendering msg bubble if text is existing*/}

        {text && (
          <M.TextBubble $isMe={isMe}>
            <Text>{text}</Text>
          </M.TextBubble>
        )}

        {/* Rendering audio bubble if audio is existing */}

        {audio && <AudioMsg audio={audio} isMe={isMe} />}

        {/* Rendering big picture if it is only one*/}

        {!text && attachments?.length === 1 && (
          <M.BigAttachmentItem>
            <img src={attachments[0].url} alt={attachments[0].filename} />
          </M.BigAttachmentItem>
        )}

        {/* Rendering all passed pictures if text is existing*/}

        {text && (
          <M.AttachmentList>
            {attachments?.map((elem, index) => {
              return (
                <M.SmallAttachmentItem as="li" key={index}>
                  <img src={elem.url} alt={elem.filename} />
                </M.SmallAttachmentItem>
              );
            })}
          </M.AttachmentList>
        )}

        {/* Rendering createdAt hint if user isn't typing*/}

        {!isTyping && (
          <M.CreatedAt $isMe={isMe}>{formatTime(created_at)}</M.CreatedAt>
        )}
      </M.Content>

      {/* Rendering double-check if user has alrealy typed msg and has read it*/}

      {!isTyping && <M.IsRead $isMe={isMe} $isRead={isRead} />}
    </M.StyledMessage>
  );
};

export default Message;
