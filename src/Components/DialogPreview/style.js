import styled, { css } from "styled-components";
import { CheckDouble } from "@styled-icons/boxicons-regular";

export const Preview = styled.div`
  display: flex;
  gap: 15px;
  height: 80px;
`;
export const Avatar = styled.div`
  margin: 0;
  align-self: center;
  & img {
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 50%;
  }
  position: relative;
`;

export const Online = styled.div`
  width: 15px;
  height: 15px;
  background-color: green;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  z-index: 2;
  bottom: 5px;
  right: 2px;
`;
export const Info = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
`;

export const Fullname = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
export const LastMessage = styled.div`
  opacity: 0.7;
  font-size: 14px;
  max-width: 260px;
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
  bottom: 15px;
  right: 30px;
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
  top: 15px;
  right: 30px;
`;
