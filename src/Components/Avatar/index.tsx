import { FC } from "react";
import { TGradient, colorGenerator } from "utils";
import { IUser } from "types/user";

import styled from "styled-components";

interface IAvatarProps {
  user: IUser;
}

export const Avatar: FC<IAvatarProps> = ({
  user: { _id, fullName, avatar },
}) => {
  return avatar ? (
    <img src={avatar} alt={`${fullName} avatar`} />
  ) : (
    <Gradient $colors={colorGenerator(_id)}>
      {fullName[0].toUpperCase()}
    </Gradient>
  );
};

const Gradient = styled.div<{ $colors: TGradient }>`
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
