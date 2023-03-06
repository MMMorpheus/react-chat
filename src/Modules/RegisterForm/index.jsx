import React from "react";
import { Button, Block } from "../../Components";
import * as C from "../../Components/Styles";

const RegisterForm = () => {
  return (
    <C.FormContainer>
      <C.Title>Регистрация</C.Title>
      <C.SubTitle>Для входа в чат Вам нужно зарегистрироваться</C.SubTitle>
      <Block column>
        <C.Input type="email" placeholder="Адресс електронной почты" />
        <C.Input type="text" placeholder="Ваше имя" />
        <C.Input type="password" placeholder="Пароль" />
        <C.Input type="password" placeholder="Повторите пароль" mg_bt="3rem" />
        <Button>Зарегистрироваться</Button>
        <C.Linky to={'/login'}>
          Войти в аккаунт
        </C.Linky>
      </Block>
    </C.FormContainer>
  );
};

export default RegisterForm;
