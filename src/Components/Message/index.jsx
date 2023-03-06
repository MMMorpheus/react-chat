import React from "react";

import styled, { css } from "styled-components";
// M means styled components for Message component;
import * as M from "./style";
import { Text } from "../Styles";

import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

const StyledMessage = styled.div`
  max-width: 530px;
  display: flex;
  ${(props) =>
    props.$isMe &&
    css`
      flex-direction: row-reverse;
      align-self: flex-end;
    `}
  align-items: flex-end;
  margin-bottom: 25px;
`;

const Message = ({ text, user, isMe, isRead, attachments }) => {
  return (
    <StyledMessage $isMe={isMe}>
      <M.AvatarContainer $isMe={isMe}>
        <img src={user.avatar} alt={`${user.fullname} avatar`} />
      </M.AvatarContainer>

      <M.Content>

        <M.Bubble $isMe={isMe}>
          <Text>{text}</Text>
        </M.Bubble>

        <M.AttachmentList>
          {attachments?.map((elem) => {
            return (
              <M.AttachmentItem>
                <img src={elem.url} alt={elem.filename} />
              </M.AttachmentItem>
            );
          })}
        </M.AttachmentList>

        <M.CreatedAt $isMe={isMe}>
          {formatDistanceToNow(new Date(), { addSuffix: true, locale: ru })}
        </M.CreatedAt>
        
      </M.Content>

      <M.IsRead $isMe={isMe} $isRead={isRead} />


    </StyledMessage>
  );
};

export default Message;
