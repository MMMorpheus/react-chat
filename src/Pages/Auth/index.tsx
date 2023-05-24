import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { flexColumnCenter } from "Styles/styles";

const Auth = () => {

  return (
    <StyledAuth>
      <Outlet />
    </StyledAuth>
  );
};


const StyledAuth = styled.section`
  ${flexColumnCenter}
`;
export default Auth;
