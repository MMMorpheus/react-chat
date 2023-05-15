import {useState} from "react";
import { LoginForm, RegisterForm } from "@/Modules";

import styled from "styled-components";
import { flexColumnCenter } from "@/Styles/styles";

const Auth = () => {
  const [authed, setAuthed] = useState<boolean>(false);

  return (
    <StyledAuth>
      { authed ? <LoginForm /> : <RegisterForm /> }
    </StyledAuth>
  );
};


const StyledAuth = styled.section`
  ${flexColumnCenter}
`;
export default Auth;
