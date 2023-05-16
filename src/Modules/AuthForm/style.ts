import styled from "styled-components";
import { flexColumnCenter, subTitle } from "Styles/styles";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { Link } from "react-router-dom";

export const AuthTitle = styled.h2`
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const AuthSubTitle = styled.p`
  ${subTitle};
  margin: 0 auto 30px auto;
  letter-spacing: 1px;
  text-align: center;
`;

export const AuthBlock = styled.div<{ $height: string; $jc: string }>`
  width: 430px;
  min-height: ${({ $height }) => $height};
  padding: 45px;
  ${flexColumnCenter};
  justify-content: ${({ $jc }) => $jc};
  background: #fff;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
  border-radius: 3px;
`;

export const AuthButton = styled.button`
  width: 300px;
  height: 56px;
  border-radius: 5px;
  background-color: #0d5dce;
  color: white;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 15px;
`;

export const RouterLink = styled(Link)`
  display: block;
  color: #adadad;
  letter-spacing: 0.5px;
`;

export const FormIconStyleWrapper = styled.div`
  ${StyledIconBase} {
    opacity: 0.6;
    width: 20px;
    position: absolute;
    z-index: 1;
    top: 19.5px;
    left: 10px;
  }
`;
