import styled, { css } from "styled-components";
import { CheckDouble } from "@styled-icons/boxicons-regular";
import { flexColumnCenter, read, unRead } from "@/Styles/styles";

export const DgItem = styled.li`
  height: 80px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const isOnlineContainer = styled.div`
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
`;

export const DialogAvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  font-size: 18px;
  font-weight: 400;
  & img {
    width: 100%;
  }
`;

export const DialogContent = styled.div`
  flex: 1;
  margin-left: 10px;
  position: relative;
`;

export const DialogFullname = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 17px;
`;
export const DialogMessage = styled.p`
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

export const isRead = styled(CheckDouble)`
  ${unRead}
  ${(props) =>
    props.$isRead &&
    css`
      ${read}
    `}
`;

export const DialogCreatedAt = styled.span`
  display: block;
  font-size: 12px;
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
`;
