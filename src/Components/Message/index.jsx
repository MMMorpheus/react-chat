import React from "react";
import {AudioMsg, Avatar} from "@/Components";
import { formatTime } from "@/utils";

import * as M from "./style";



const Message = ({
  user,
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
        <Avatar user={user} />
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
          <M.TextBubble $isMe={isMe}>
            <p>{text}</p>
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
