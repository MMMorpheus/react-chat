import React from "react";
import { AuthInput } from "@/Components";
import * as C from "@/Components/Styles";
import { Envelope, Lock } from "@styled-icons/boxicons-regular";
import { Formik, Form } from "formik";
import { LOG_IN_SCHEMA } from "@/utils/schemas";

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={LOG_IN_SCHEMA}>
    <C.FormContainer as="section" $column>
      <Form>
        <C.AuthTitle>Войти в аккаунт</C.AuthTitle>
        <C.AuthSubTitle>Пожалуйста, войдите в свой аккаунт</C.AuthSubTitle>
        <C.AuthBlock $column $jc="space-between" $height="400px">
          <C.Label>
            <AuthInput name="email" type="email" placeholder="Адресс електронной почты" />
            <C.FormIconStyleWrapper>
              <Envelope />
            </C.FormIconStyleWrapper>
          </C.Label>
          <C.Label>
            <AuthInput name="password" type="password" placeholder="Пароль"/>
            <C.FormIconStyleWrapper>
              <Lock />
            </C.FormIconStyleWrapper>
          </C.Label>

          <C.StyledButton>Войти в аккаунт</C.StyledButton>
          <C.Linky to={"/register"}>Зарегистрироваться</C.Linky>
        </C.AuthBlock>
      </Form>
    </C.FormContainer>
    </Formik>
  );
};

export default LoginForm;
