import styled, { css } from "styled-components";
import { CheckDouble } from "@styled-icons/boxicons-regular";
import { flexColumnCenter, read, unRead } from "Styles/styles";
import { IsOnlineProp, IsReadProp } from "types/styledProps";

export const StyledDialog = styled.li<IsOnlineProp>`
  height: 80px;
  transition: background-color .4s ease;
  &:hover {
    background-color: #e6e6e6;
  }
  cursor: pointer;
  & > a {
    padding: 15px; 
    height: 100%;
    display: flex;
    align-items: center;
    color: inherit;
    &.active {
      
      background-color: #adcfff;
    }
  }
  .isOnlineContainer {
    position: relative;
    &::after {
      content: "";
      display: none;
      ${(props) =>
        props.$isOnline &&
        css`
          display: block;
        `}
      width: 15px;
      height: 15px;
      background-color: green;
      border-radius: 50%;
      border: 3px solid white;
      position: absolute;
      z-index: 2;
      bottom: 0;
      right: 0;
    }
    .avatarContainer {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      font-size: 18px;
      font-weight: 400;
      & img {
        width: 100%;
      }
    }
  }
  .content {
    flex: 1;
    margin-left: 10px;
    position: relative;
    .content__fullName {
      font-weight: 600;
      margin-bottom: 5px;
      font-size: 17px;
      letter-spacing: 0.5px;
    }
    .content__message {
      opacity: 0.7;
      font-size: 14px;
      max-width: 250px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content__createdAt {
      display: block;
      font-size: 12px;
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const NotificationContainer = styled.div`
  width: 20px;
  height: 20px;
  ${flexColumnCenter};
  position: absolute;
  bottom: -2px;
  right: 0px;
`;

export const Unread = styled(NotificationContainer)`
  background-color: #f16969;
  color: white;
  font-size: 14px;
  border-radius: 50%;
`;

export const isRead = styled(CheckDouble)<IsReadProp>`
  ${unRead}
  ${(props) =>
    props.$isRead &&
    css`
      ${read}
    `}
`;
