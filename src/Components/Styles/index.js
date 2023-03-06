import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin: 0.5rem;
  letter-spacing: 0.5px;
`;
export const SubTitle = styled.p`
  font-size: 18px;
  opacity: 0.5;
  line-height: 21px;
  letter-spacing: 0.1px;
  margin-bottom: 50px;
  max-width: 410px;
  text-align: center;
`;
export const Text = styled.p``;

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 300px;
  height: 56px;
  border-radius: 5px;
  border: 0.5px solid #909090;
  outline: none;
  margin-bottom: ${(props) => props.mg_bt || "1rem"};
  text-indent: 20px;
  font-size: 20px;
  &::placeholder {
    font-size: 14px;
  }
`;

export const Linky = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: pointer;
  color: #adadad;
  letter-spacing: 0.1px;
  font-size: 16px;
  margin-block: 1.5rem;
`;
