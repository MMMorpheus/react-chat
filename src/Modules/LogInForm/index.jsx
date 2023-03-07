import React from "react";
import { Button, Block } from "../../Components";
import * as C from "../../Components/Styles";
import { Envelope, Lock } from "@styled-icons/boxicons-regular";


const LoginForm = () => {
  return (
    <C.FormContainer>
      <C.Title>Войти в аккаунт</C.Title>
      <C.SubTitle>Пожалуйста, войдите в свой аккаунт</C.SubTitle>
      <Block column jc="space-between" height="375px">
        <C.Label>
          <C.Input type="email" placeholder="Адресс електронной почты" />
          <C.FormIconStyleWrapper>
            <Envelope />
          </C.FormIconStyleWrapper>
        </C.Label>
        <C.Label>
          <C.Input type="password" placeholder="Пароль" mg_bt="3rem" />
          <C.FormIconStyleWrapper>
            <Lock />
          </C.FormIconStyleWrapper>
        </C.Label>

        <Button>Войти в аккаунт</Button>
        <C.Linky to={"/register"}>Зарегистрироваться</C.Linky>
      </Block>
    </C.FormContainer>
  );
};

export default LoginForm;
