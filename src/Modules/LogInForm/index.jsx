import React from "react";
import { Button, Block } from "../../Components";
import * as C from "../../Components/Styles";

const LoginForm = () => {
  return (
    <C.FormContainer>
      <C.Title>Войти в аккаунт</C.Title>
      <C.SubTitle>Пожалуйста, войдите в свой аккаунт</C.SubTitle>
      <Block column>
        <C.Input
          type="email"
          placeholder="Логин или адресс електронной почты"
        />
        <C.Input type="password" placeholder="Пароль" mg_bt="3rem" />
        <Button>Войти в аккаунт</Button>
        <C.Linky to={'/register'}>
          Зарегистрироваться
        </C.Linky>
      </Block>
    </C.FormContainer>
  );
};

export default LoginForm;
