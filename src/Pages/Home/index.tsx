import { SideBar, DialogWindow } from "Modules";

import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <DialogWindow />
    </StyledHome>
  );
};

const StyledHome = styled.section`
  margin: 0 auto;
  width: 1340px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
  display: flex;
`;

export default Home;
