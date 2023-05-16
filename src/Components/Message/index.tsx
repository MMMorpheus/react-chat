import { FC } from "react";
import { AudioMsg, Avatar } from "Components";
import { formatTime } from "utils";

import * as C from "./style";
import { IUser } from "types/user";

interface IMessageProps {
  user: IUser;
  text: string;
  attachments: any[];
  isMe: boolean;
  isRead: boolean;
  isTyping: boolean;
  created_at: string;
  audio: any;
}

export const Message: FC<IMessageProps> = ({
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
    <C.StyledMessage $isMe={isMe}>
      <C.MessageAvatarContainer $isMe={isMe}>
        <Avatar user={user} />
      </C.MessageAvatarContainer>

      <C.Content>
        {/* Rendering typing animation */}

        {isTyping && !text && (
          <>
            <C.TypingBubble>
              <C.Dot />
              <C.Dot />
              <C.Dot />
            </C.TypingBubble>
            <C.Hint>{`${user.fullName} печатает...`}</C.Hint>
          </>
        )}

        {/* Rendering msg bubble if text is existing*/}

        {text && (
          <C.TextBubble $isMe={isMe}>
            <p>{text}</p>
          </C.TextBubble>
        )}

        {/* Rendering audio bubble if audio is existing */}

        {audio && <AudioMsg audio={audio} isMe={isMe} />}

        {/* Rendering big picture if it is only one*/}

        {!text && attachments?.length === 1 && (
          <C.BigAttachmentItem>
            <img src={attachments[0].url} alt={attachments[0].filename} />
          </C.BigAttachmentItem>
        )}

        {/* Rendering all passed pictures if text is existing*/}

        {text && (
          <C.AttachmentList>
            {attachments?.map((elem, index) => {
              return (
                <C.SmallAttachmentItem as="li" key={index}>
                  <img src={elem.url} alt={elem.filename} />
                </C.SmallAttachmentItem>
              );
            })}
          </C.AttachmentList>
        )}

        {/* Rendering createdAt hint if user isn't typing*/}

        {!isTyping && (
          <C.CreatedAt $isMe={isMe}>{formatTime(created_at)}</C.CreatedAt>
        )}
      </C.Content>

      {/* Rendering double-check if user has alrealy typed msg and has read it*/}

      {!isTyping && <C.IsRead $isMe={isMe} $isRead={isRead} />}
    </C.StyledMessage>
  );
};
