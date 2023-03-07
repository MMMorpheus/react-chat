import React, { useState } from "react";
import { Button, Block } from "../../Components";
import { ConfirmRegister } from "../";
import * as C from "../../Components/Styles";
import { User, Envelope, Lock } from "@styled-icons/boxicons-regular";

const RegisterForm = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFetching(!isFetching)
  }

  return (
    <C.FormContainer>
      <C.Title>Регистрация</C.Title>
      <C.SubTitle>Для входа в чат Вам нужно зарегистрироваться</C.SubTitle>
      
      {isFetching ? (
        <ConfirmRegister />
      ) : (
        <Block column jc="space-between" height="500px">
          <C.Label>
            <C.Input type="email" placeholder="Адресс електронной почты" />
            <C.FormIconStyleWrapper>
              <Envelope />
            </C.FormIconStyleWrapper>
          </C.Label>
          <C.Label>
            <C.Input type="text" placeholder="Ваше имя" />
            <C.FormIconStyleWrapper>
              <User />
            </C.FormIconStyleWrapper>
          </C.Label>
          <C.Label>
            <C.Input type="password" placeholder="Пароль" />
            <C.FormIconStyleWrapper>
              <Lock />
            </C.FormIconStyleWrapper>
          </C.Label>
          <C.Label>
            <C.Input type="password" placeholder="Повторите пароль" />
            <C.FormIconStyleWrapper>
              <Lock />
            </C.FormIconStyleWrapper>
          </C.Label>
          <Button onClick={handleSubmit}>Зарегистрироваться</Button>
          <C.Linky to={"/login"}>Войти в аккаунт</C.Linky>
        </Block>
      )}
    </C.FormContainer>
  );
};

export default RegisterForm;
