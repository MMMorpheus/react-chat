import React from "react";
import { DialogList } from "@/Components";

import { items } from "../../TestObj";


import * as C from "./style";
import { Messages } from "@styled-icons/typicons";
import { Edit } from "@styled-icons/boxicons-regular";

const SideBar = ({ children, ...props }) => {
  

  return (
    <C.StyledAside {...props}>
      <C.HeaderContainer>
        <div>
          <Messages size="22" color="#475767" />
          <h3>Список диалогов</h3>
          <button title="edit-button">
            <Edit size="25" color="#475767" />
          </button>
        </div>
        <label>
          <C.SearchField placeholder="Поиск среди контактов" />
          <C.SearchIcon />
        </label>
      </C.HeaderContainer>
      
      <DialogList items={items}/>

    </C.StyledAside>
  );
};

export default SideBar;
