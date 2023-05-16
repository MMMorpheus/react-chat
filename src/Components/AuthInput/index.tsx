import { FC } from "react";
import { Field } from "formik";
import styled, { css } from "styled-components";

interface IAuthInputProps {
  name: string;
  type?: string;
  placeholder: string;
}

export const AuthInput:FC<IAuthInputProps> = ({ name, type, placeholder, ...props }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <>
          <StyledInput
            type={type}
            placeholder={placeholder}
            {...field}
            autoComplete="off"
            $inValid={meta.touched && meta.error}
            $valid={meta.touched && !meta.error}
          />
          {/*Error component here*/}
          {meta.touched && meta.error && (
            <StyledError>{meta.error}</StyledError>
          )}
        </>
      )}
    </Field>
  );
};

const StyledInput = styled.input<{ $inValid: boolean; $valid: boolean }>`
  width: 300px;
  height: 56px;
  border-radius: 5px;
  border: 0.5px solid #909090;
  text-indent: 38px;
  font-size: 20px;
  &::placeholder {
    font-size: 14px;
  }
  &:focus {
    box-shadow: 0px 0px 10px 1px rgba(28, 136, 255, 0.5);
  }
  ${(props) =>
    props.$inValid &&
    css`
      border-color: red;
    `}
  ${(props) =>
    props.$valid &&
    css`
      border-color: lightgreen;
    `}
`;

const StyledError = styled.div`
  text-align: center;
  font-size: 12px;
  color: red;
  margin: 5px auto;
  max-width: 280px;
`;
