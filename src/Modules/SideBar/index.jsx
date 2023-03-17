import React, { useState } from "react";
import { DialogList } from "@/Components";

import * as C from "./style";
import { Messages } from "@styled-icons/typicons";
import { Edit } from "@styled-icons/boxicons-regular";

// Originally this data will be received as props from main component
import data from "@/data";

const SideBar = ({ children, ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(data));
  
  const filterBySearch = ({target: {value}}) => {
      setFiltered(
      data.filter((item) => item.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    );
    setSearchValue(value);
    
  };

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
          <C.SearchField
            placeholder="Поиск среди контактов"
            onChange={filterBySearch}
            value={searchValue}
          />
          <C.SearchIcon />
        </label>
      </C.HeaderContainer>

      <DialogList items={filtered} />
    </C.StyledAside>
  );
};

export default SideBar;
