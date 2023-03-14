import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Link } from "react-router-dom";

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
  justify-content: ${(props) => props.$jc || "center"};
  align-items: center;
`;

export const FormContainer = styled(FlexCenter)`
  width: 100vw;
  margin: 0 auto;
`;

export const AuthTitle = styled.h2`
  font-size: ${(props) => props.$fz || "28px"};
  margin: 0.5rem;
  letter-spacing: 0.5px;
  text-align: center;
`;
export const AuthSubTitle = styled.p`
  font-size: ${(props) => props.$fz || "18px"};
  opacity: 0.5;
  line-height: 21px;
  letter-spacing: 0.1px;
  margin-bottom: 50px;
  max-width: 410px;
  text-align: center;
`;
export const Text = styled.p``;

export const AuthBlock = styled(FlexCenter)`
  min-height: ${(props) => props.$height || "auto"};
  gap: ${(props) => props.$gap || "auto"};
  padding: 45px;
  background: #fff;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
  border-radius: 3px;
  max-width: 430px;
`;

export const StyledButton = styled.button`
  width: 300px;
  height: 56px;
  border-radius: 5px;
  border: none;
  background-color: #0d5dce;
  color: white;
  letter-spacing: 0.15px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 15px;
  cursor: pointer;
`;

export const Linky = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: pointer;
  color: #adadad;
  letter-spacing: 0.1px;
  font-size: 16px;
  margin: 1.5rem 0 1rem 0;
`;

export const Label = styled.label`
  position: relative;
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
