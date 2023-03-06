import styled, { css } from "styled-components";
import { CheckDouble } from "@styled-icons/boxicons-regular";

export const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 33px;
  height: 33px;
  overflow: hidden;
  margin-bottom: 8px;
  margin-right: 13px;
  & img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;

export const Bubble = styled.div`
  font-size: 14px;
  padding: 15px;
  border-radius: 12px 12px 12px 0;
  max-width: 440px;
  line-height: 20px;
  background-color: #3674ff;
  color: #ffff;
  box-shadow: 0 5px 5px rgba(51, 116, 255, 0.2);
  margin: 0 0 8px 0;
`;

export const CreatedAt = styled.span`
  font-size: 12px;
  opacity: 0.5;
  min-width: max-content;
  position: absolute;
  left: 0;
  bottom: -10px;
`;

export const IsRead = styled(CheckDouble)`
  width: 20px;
  margin-left: 5px;
  color: #b7b7b7;
  ${(props) =>
    props.isRead &&
    css`
      color: #484FEC;
    `}
`;
