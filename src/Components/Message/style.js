import styled, { css, keyframes } from "styled-components";
import { CheckDouble, Play, Pause } from "@styled-icons/boxicons-regular";

const typingAnimation = keyframes`
  0% {
    transform: translateY(0px);
    background-color: #4A90E2;
  }
  28% {
    transform: translateY(-7px);
    background-color: #90D2FF;
  }
  44% {
    transform: translateY(0px);
    background-color: #71C5FF;
  }
`;

// Msg container - renders content (avatar && text && attach's && hints) left-to-right or right-to-left is $isMe prop have been passed
export const StyledMessage = styled.div`
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

// Avatar box - prop $isMe sets margins due to right-to-left content layout
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

// Content container wrapps bubble with text || typing buble || audio buble || attach's and set position for hints (isRead and createdAt)
export const Content = styled.div`
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

// General bubble container
export const Bubble = styled.div`
  max-width: 440px;
  min-height: 42px;
  margin: 0 8px 8px 0;
  padding: 15px;
  background-color: #3674ff;
  color: #ffff;
  border-radius: 12px 12px 12px 0;
  box-shadow: 0 5px 5px rgba(51, 116, 255, 0.2);
  ${(props) =>
    props.$isMe &&
    css`
      margin: 0 0 8px 8px;
      background-color: #fff;
      color: black;
      border: 0.5px solid #b7b7b7;
      border-radius: 12px 12px 0 12px;
    `}
`;

export const TextBubble = styled(Bubble)`
  font-size: 14px;
  line-height: 20px;
`;


export const TypingBubble = styled(Bubble)`
  width: 100px;
  background-color: #78c8ff;
  position: relative;
  display: flex;
  justify-content: space-between;
  & :nth-child(1) {
    animation-delay: 200ms;
  }
  & :nth-child(2) {
    animation-delay: 300ms;
  }
  & :nth-child(3) {
    animation-delay: 400ms;
  }
`;

export const Dot = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: ${typingAnimation} 1.8s infinite ease-in-out;
`;

export const Hint = styled.span`
  font-size: 12px;
  opacity: 0.5;
  min-width: max-content;
  position: absolute;
  bottom: -15px;
`;

export const AttachmentList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-bottom: 8px;
`;

export const BigAttachmentItem = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
  & img {
    width: 100%;
  }
`;
export const SmallAttachmentItem = styled(BigAttachmentItem)`
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 0;
`;

export const CreatedAt = styled(Hint)`
  ${(props) =>
    props.$isMe &&
    css`
      right: 0;
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
