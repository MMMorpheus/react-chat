import React from "react";
import styled from "styled-components";

const StyledDialog = styled.section`
display: flex;
flex-direction: column;
padding: 10px;
`;

const Dialog = ({ children, ...props }) => {
  return <StyledDialog {...props}>{children}</StyledDialog>;
};

export default Dialog;
