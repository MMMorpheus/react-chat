import React from "react";
import { Button, Block } from "../../Components";
import * as C from "../../Components/Styles";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <C.Title>Регистрация</C.Title>
      <C.SubTitle>Для входа в чат Вам нужно зарегистрироваться</C.SubTitle>
      <Block column>
        <C.Input type="email" placeholder="Адресс електронной почты" />
        <C.Input type="text" placeholder="Ваше имя" />
        <C.Input type="password" placeholder="Пароль" />
        <C.Input type="password" placeholder="Повторите пароль" mg_bt="3rem" />
        <Button>Зарегистрироваться</Button>
        <Link to={'/login'}>
          <C.Link>Войти в аккаунт</C.Link>
          {/* Войти в аккаунт */}
        </Link>
      </Block>
    </>
  );
};

export default RegisterForm;
