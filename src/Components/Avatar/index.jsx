import React from "react";
import { colorGenerator } from "@/utils";

import styled from 'styled-components';

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

const Avatar = ({ user: { fullName, avatar, _id } }) => {
  return avatar ? (
    <img src={avatar} alt={`${fullName} avatar`} />
  ) : (
    <Gradient $colors={colorGenerator(_id)}>
      {fullName[0].toUpperCase()}
    </Gradient>
  );
};

export default Avatar;
