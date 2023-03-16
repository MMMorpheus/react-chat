import React, { useState } from "react";
import { ConfirmPlaceholder, AuthInput } from "@/Components";
import * as C from "../style";
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
      <article>
        <Form>
          <C.AuthTitle>Регистрация</C.AuthTitle>
          <C.AuthSubTitle>Для входа в чат Вам нужно зарегистрироваться</C.AuthSubTitle>

          {isFetching ? (
            <ConfirmPlaceholder />
          ) : (
            <C.AuthBlock $jc="space-between" $height="550px">
              <label>
                <AuthInput name="email" placeholder="Адресс електронной почты" />
                <C.FormIconStyleWrapper>
                  <Envelope />
                </C.FormIconStyleWrapper>
              </label>

              <label>
                <AuthInput name="name" placeholder="Ваше имя" />
                <C.FormIconStyleWrapper>
                  <User />
                </C.FormIconStyleWrapper>
              </label>
              <label>
                <AuthInput name="password" type="password" placeholder="Пароль" />
                <C.FormIconStyleWrapper>
                  <Lock />
                </C.FormIconStyleWrapper>
              </label>
              <label>
                <AuthInput
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Повторите пароль"
                />
                <C.FormIconStyleWrapper>
                  <Lock />
                </C.FormIconStyleWrapper>
              </label>
              <C.AuthButton type="submit">Зарегистрироваться</C.AuthButton>
              <C.RouterLink to={"/login"}>Войти в аккаунт</C.RouterLink>
            </C.AuthBlock>
          )}
        </Form>
      </article>
    </Formik>
  );
};

export default RegisterForm;
