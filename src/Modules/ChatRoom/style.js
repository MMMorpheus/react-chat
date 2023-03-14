import styled, { css } from "styled-components";
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular";

export const Room = styled.section`
  flex: 1;
  background-color: #fff;
  min-height: 100%;
  
`;

export const Header = styled.div`
  width: 820px;
  padding: 0 10px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #f7f8f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.h4`
  margin-bottom: 5px;
`;

export const Status = styled.span`
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

export const EditBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const Edit = styled(DotsHorizontalRounded)`
  width: 35px;
  height: 35px;
`;

export const ChatArea = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const TypingArea = styled.div`
  width: inherit;
  height: 150px;
  /* position: fixed; */

  border: 1px solid black;
`;
