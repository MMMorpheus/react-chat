import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
// M means styled components for Message component;
import * as M from "./style";
import { Text } from "../Styles";


import { formatDistanceToNow } from "date-fns";
import { ru } from 'date-fns/locale'

import doubleCheck from "../../assets/img/double-check.svg"

const StyledMessage = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Message = ({ text, user }) => {
  return (
    <StyledMessage>
      <M.AvatarContainer>
        <img src={user.avatar} alt={`${user.fullname} avatar`} />
      </M.AvatarContainer>
      <M.Content>
        <M.Bubble>
          <Text>{text}</Text>
        </M.Bubble>
        <M.CreatedAt>{formatDistanceToNow(new Date(), {addSuffix: true, locale: ru})}</M.CreatedAt>
      </M.Content>
      <M.IsRead isRead={false} />
    </StyledMessage>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
};

export default Message;
