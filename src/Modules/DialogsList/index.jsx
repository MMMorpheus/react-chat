import React from "react";
import { DialogPreview } from "../../Components";
import styled from "styled-components";

const StyledAside = styled.aside`
  /* width: 400px; */
  flex: 0 1 30%;
  min-height: 100%;
  background-color: #d1d7da;
  overflow: auto;
`;

const items = [
  {
    user: {
      fullName: "Петро Ребро",
      avatar:
        "https://upload.wikimedia.org/wikipedia/uk/7/79/%D0%A0%D0%B5%D0%B1%D1%80%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B8%D1%87.jpg",
    },
    lastMessage: {
      createdAt: new Date(),
      text: `До церкви причвалав старий козак.
            В поклоні ледь не до землі зігнувся:
            — Зроби, о Боже милосердний, так,
            Щоб я сьогодні ж в турка обернувся!`,
      isMe: false,
      isRead: true,
      unread: null,
    },
  },
  {
    user: {
      fullName: "Петро Ребро",
      avatar:
        "https://upload.wikimedia.org/wikipedia/uk/7/79/%D0%A0%D0%B5%D0%B1%D1%80%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B8%D1%87.jpg",
    },
    lastMessage: {
      createdAt: new Date(),
      text: `До церкви причвалав старий козак.
            В поклоні ледь не до землі зігнувся:
            — Зроби, о Боже милосердний, так,
            Щоб я сьогодні ж в турка обернувся!`,
      isMe: false,
      isRead: false,
      unread: 3,
    },
  },
  {
    user: {
      fullName: "Петро Ребро",
      avatar:
        "https://upload.wikimedia.org/wikipedia/uk/7/79/%D0%A0%D0%B5%D0%B1%D1%80%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B8%D1%87.jpg",
    },
    lastMessage: {
      createdAt: new Date(),
      text: `До церкви причвалав старий козак.
            В поклоні ледь не до землі зігнувся:
            — Зроби, о Боже милосердний, так,
            Щоб я сьогодні ж в турка обернувся!`,
      isMe: true,
      isRead: true,
      unread: null,
    },
  },
  {
    user: {
      fullName: "Петро Ребро",
      avatar:
        "https://upload.wikimedia.org/wikipedia/uk/7/79/%D0%A0%D0%B5%D0%B1%D1%80%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B8%D1%87.jpg",
    },
    lastMessage: {
      createdAt: new Date(),
      text: `До церкви причвалав старий козак.
            В поклоні ледь не до землі зігнувся:
            — Зроби, о Боже милосердний, так,
            Щоб я сьогодні ж в турка обернувся!`,
      isMe: true,
      isRead: false,
      unread: null,
    },
  },
];

const DialogsList = ({ children, ...props }) => {
  const dialogs = items.map((item) => {
    return <DialogPreview content={item} isOnline />;
  });

  return <StyledAside {...props}>{dialogs}</StyledAside>;
};

export default DialogsList;
