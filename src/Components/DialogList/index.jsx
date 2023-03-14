import React from "react";
import {DialogItem} from "@/Components";
import { orderBy } from "lodash";

import styled from 'styled-components';

const List = styled.ul`

`

const DialogList = ({ items }) => {
    
  const dialogs = orderBy(items, ["createdAt"], ["desc"]).map((item) => {
    return <DialogItem key={item.user._id} content={item} isOnline />;
  });

  return (
    <List>
        {dialogs}
    </List>
  );
};

export default DialogList;
