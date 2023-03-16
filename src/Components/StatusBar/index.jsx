import React from 'react';
import styled, {css} from 'styled-components';
import { flexColumnCenter } from '@/Styles/styles';
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular";

const StatusBar = ({user: {name, isOnline}}) => {
    return (
        <Bar>
        <div>{/*This is an empty div for jc = space btw correct work*/}</div>
        <UserInfo>
          <h4>{name}</h4>
          <Status $isOnline={isOnline}>
            {isOnline={} ? "онлайн" : "офлайн"}
          </Status>
        </UserInfo>
        <button>
          <DotsHorizontalRounded size="35" />
        </button>
      </Bar>
    );
}

const Bar = styled.div`
  height: 60px;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid #f7f8f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  ${flexColumnCenter};
  & h4 {
    margin-bottom: 5px;
  }
`;

const Status = styled.span`
  display: block;
  font-size: 14px;
  opacity: 0.5;
  position: relative;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    position: absolute;
    left: -15px;
    top: 4px;
    display: none;
    ${(props) =>
      props.$isOnline &&
      css`
        display: block;
      `}
  }
`;

export default StatusBar;