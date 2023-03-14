import React, { useState } from "react";
import { ConfirmPlaceholder, AuthInput } from "@/Components";
import * as C from "@/Components/Styles";
import { User, Envelope, Lock } from "@styled-icons/boxicons-regular";
import { Formik, Form } from "formik";
import { REGISTER_SCHEMA } from "@/utils/schemas";

const RegisterForm = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
    setIsFetching(!isFetching);
  };

  const initialValues = {
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={REGISTER_SCHEMA}
    >
      <C.FormContainer as="section" $column>
        <Form>
          <C.AuthTitle>Регистрация</C.AuthTitle>
          <C.AuthSubTitle>Для входа в чат Вам нужно зарегистрироваться</C.AuthSubTitle>

          {isFetching ? (
            <ConfirmPlaceholder />
          ) : (
            <C.AuthBlock $column $jc="space-between" $height="550px">
              <C.Label>
                <AuthInput name="email" placeholder="Адресс електронной почты" />
                <C.FormIconStyleWrapper>
                  <Envelope />
                </C.FormIconStyleWrapper>
              </C.Label>

              <C.Label>
                <AuthInput name="name" placeholder="Ваше имя" />
                <C.FormIconStyleWrapper>
                  <User />
                </C.FormIconStyleWrapper>
              </C.Label>
              <C.Label>
                <AuthInput name="password" type="password" placeholder="Пароль" />
                <C.FormIconStyleWrapper>
                  <Lock />
                </C.FormIconStyleWrapper>
              </C.Label>
              <C.Label>
                <AuthInput
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Повторите пароль"
                />
                <C.FormIconStyleWrapper>
                  <Lock />
                </C.FormIconStyleWrapper>
              </C.Label>
              <C.StyledButton type="submit">Зарегистрироваться</C.StyledButton>
              <C.Linky to={"/login"}>Войти в аккаунт</C.Linky>
            </C.AuthBlock>
          )}
        </Form>
      </C.FormContainer>
    </Formik>
  );
};

export default RegisterForm;
