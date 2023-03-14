import styled, { css } from "styled-components";
import { CheckDouble } from "@styled-icons/boxicons-regular";

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  cursor: pointer;
  padding-right: 5px;
`;
export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  font-size: 18px;
  font-weight: 400;
  & img {
    width: 100%;
  }
  position: relative;
  &::after {
    content: "";
    display: none;
    ${(props) =>
      props.$isOnline &&
      css`
        display: block;
      `}
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    border: 3px solid white;
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 10px;
  position: relative;
`;

export const Fullname = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 17px;
`;
export const Message = styled.p`
  opacity: 0.7;
  font-size: 14px;
  max-width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const NotificationContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const isRead = styled(CheckDouble)`
  color: #b7b7b7;
  ${(props) =>
    props.$isRead &&
    css`
      color: #484fec;
    `}
`;

export const CreatedAt = styled.span`
  display: block;
  font-size: 12px;
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
`;
