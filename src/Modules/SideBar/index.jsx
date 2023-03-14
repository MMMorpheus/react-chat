import React from "react";
import { DialogList } from "@/Components";

import { items } from "../../TestObj";


import * as L from "./style";
import { Messages } from "@styled-icons/typicons";
import { Edit } from "@styled-icons/boxicons-regular";

const SideBar = ({ children, ...props }) => {
  

  return (
    <L.StyledAside {...props}>
      <L.HeaderContainer>
        <L.HeaderTitle>
          <Messages size="22" color="#475767" />
          <L.Title>Список диалогов</L.Title>
          <L.Edit title="edit-button">
            <Edit size="25" color="#475767" />
          </L.Edit>
        </L.HeaderTitle>
        <L.Label>
          <L.SearchField placeholder="Поиск среди контактов" />
          <L.SearchIcon />
        </L.Label>
      </L.HeaderContainer>
      
      <DialogList items={items}/>

    </L.StyledAside>
  );
};

export default SideBar;
