import styled, { css } from "styled-components";
import { CheckDouble } from "@styled-icons/boxicons-regular";

export const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 33px;
  height: 33px;
  overflow: hidden;
  margin-bottom: 8px;
  margin-right: 13px;
  ${(props) =>
    props.$isMe &&
    css`
      margin-right: 0;
      margin-left: 13px;
    `}
  & img {
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Bubble = styled.div`
  font-size: 14px;
  padding: 15px;
  color: #ffff;
  background-color: #3674ff;
  border-radius: 12px 12px 12px 0;
  margin: 0 8px 8px 0;
  ${(props) =>
    props.$isMe &&
    css`
      color: black;
      background-color: #fff;
      border-radius: 12px 12px 0 12px;
      border: 0.5px solid #b7b7b7;
      margin: 0 0 8px 0;
    `}
  max-width: 440px;
  line-height: 20px;

  box-shadow: 0 5px 5px rgba(51, 116, 255, 0.2);
  
`;

export const CreatedAt = styled.span`
  font-size: 12px;
  opacity: 0.5;
  min-width: max-content;
  position: absolute;
  bottom: -15px;
  ${(props) =>
    props.$isMe &&
    css`
      right: 10px;
    `}
`;

export const IsRead = styled(CheckDouble)`
  width: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  ${(props) =>
    props.$isMe &&
    css`
      margin-left: 0;
      margin-right: 5px;
    `}
  color: #b7b7b7;
  ${(props) =>
    props.$isRead &&
    css`
      color: #484fec;
    `}
`;

export const AttachmentList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-bottom: 8px;
`;

export const AttachmentItem = styled.li`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  & img {
    width: 100%;
  }
`;
