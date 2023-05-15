import React from "react";
import { DialogItem } from "@/Components";
import { orderBy } from "lodash";

import styled from "styled-components";
import { flexColumnCenter, shake } from "@/Styles/styles";
import noData from "@/assets/img/no-data.png";

const DialogList = ({ items }) => {
  const dialogs = orderBy(items, ["createdAt"], ["desc"]).map((item) => {
    return <DialogItem key={item.user._id} content={item} isOnline />;
  });

  return items.length > 0 ? (
    <List>{dialogs}</List>
  ) : (
    <NoData>
      <h3>Уууупс!</h3>
      <img src={noData} alt="No results found" />
      <p>
        Здесь ничего нет! Возможно, попробуйте другой запрос или у Вас еще нет диалогов.
      </p>
    </NoData>
  );
};

const List = styled.ul`
  height: calc(100% - 100px);
  overflow: auto;
`;

const NoData = styled.div`
  margin-top: 50px;
  ${flexColumnCenter};
  gap: 20px;
  opacity: 0.7;
  & img {
    animation: ${shake} 0.3s ease;
  }
  & p {
    text-align: center;
    max-width: 80%;
    line-height: 1.5;
  }
`;

export default DialogList;
