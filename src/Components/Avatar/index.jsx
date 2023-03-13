import React from "react";
import styled from 'styled-components';
import { colorGenerator } from "../../utils";

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    150deg,
    ${(props) => props.$colors.color} 50%,
    ${(props) => props.$colors.lightColor} 100%
  );
  color: #ffff;
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = ({ user: { fullname, avatar, hash } }) => {
  return avatar ? (
    <img src={avatar} alt={`${fullname} avatar`} />
  ) : (
    <Gradient $colors={colorGenerator(hash)}>
      {fullname[0].toUpperCase()}
    </Gradient>
  );
};

export default Avatar;
