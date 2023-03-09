import React from "react";
import styled, { css } from "styled-components";
import { Field } from "formik";

const StyledInput = styled.input`
  width: 300px;
  height: 56px;
  border-radius: 5px;
  border: 0.5px solid #909090;
  outline: none;
  text-indent: 38px;
  font-size: 20px;
  &::placeholder {
    font-size: 14px;
  };
  &:focus {
    box-shadow: 0px 0px 10px 1px rgba(28, 136, 255, 0.5);
  }
`;

const Input = ({ name, type, placeholder, ...props }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <>
          <StyledInput
            type={type}
            placeholder={placeholder}
            {...field}
            autoComplete="off"
          />
          {/*Error component here*/}
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  );
};

export default Input;
