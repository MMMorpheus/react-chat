import React from "react";
import { LoginForm, RegisterForm } from "../../Modules";

import styled from "styled-components";

const StyledAuth = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Auth = () => {
  return (
    <StyledAuth>
        {/* <LoginForm /> */}
        <RegisterForm />
    </StyledAuth>
  );
};

export default Auth;
