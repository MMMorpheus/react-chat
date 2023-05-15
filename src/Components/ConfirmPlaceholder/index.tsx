import React from "react";
import * as C from "@/Modules/AuthForm/style";
import { ErrorCircle } from "@styled-icons/boxicons-regular";


const ConfirmPlaceholder = () => {
  return (
    <C.AuthBlock $jc="space-evenly" $height="550px">
      <ErrorCircle size="120" color="#467CEE"/>
      <C.AuthTitle >Подтвердите свой аккаунт</C.AuthTitle>
      <C.AuthSubTitle >
        На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
      </C.AuthSubTitle>
    </C.AuthBlock  >
  );
};

export default ConfirmPlaceholder;