import React from "react";
import * as C from "../Styles";
import { ErrorCircle } from "@styled-icons/boxicons-regular";


const ConfirmPlaceholder = () => {
  return (
    <C.AuthBlock column height="500px" gap="15px">
      <ErrorCircle size="80" color="#467CEE"/>
      <C.Title fz="22px">Подтвердите свой аккаунт</C.Title>
      <C.SubTitle fz="16px">
        На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
      </C.SubTitle>
    </C.AuthBlock  >
  );
};

export default ConfirmPlaceholder;
