import React from "react";
import { Button, Block, Input } from "../../Components";
import * as C from "../../Components/Styles";
import { Envelope, Lock } from "@styled-icons/boxicons-regular";
import { Formik, Form } from "formik";
import { LOG_IN_SCHEMA } from "../../utils/schemas";

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={LOG_IN_SCHEMA}>
    <C.FormContainer>
      <Form>
        <C.Title>Войти в аккаунт</C.Title>
        <C.SubTitle>Пожалуйста, войдите в свой аккаунт</C.SubTitle>
        <Block column jc="space-between" height="375px">
          <C.Label>
            <Input name="email" type="email" placeholder="Адресс електронной почты" />
            <C.FormIconStyleWrapper>
              <Envelope />
            </C.FormIconStyleWrapper>
          </C.Label>
          <C.Label>
            <Input name="pasword" type="password" placeholder="Пароль"/>
            <C.FormIconStyleWrapper>
              <Lock />
            </C.FormIconStyleWrapper>
          </C.Label>

          <Button>Войти в аккаунт</Button>
          <C.Linky to={"/register"}>Зарегистрироваться</C.Linky>
        </Block>
      </Form>
    </C.FormContainer>
    </Formik>
  );
};

export default LoginForm;
