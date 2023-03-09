import React, { useState } from "react";
import { Button, Block, Input } from "../../Components";
import { ConfirmRegister } from "../";
import * as C from "../../Components/Styles";
import { User, Envelope, Lock } from "@styled-icons/boxicons-regular";
import { Formik, Form } from "formik";
import { REGISTER_SCHEMA } from "../../utils/schemas";

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
      <C.FormContainer>
        <Form>
          <C.Title>Регистрация</C.Title>
          <C.SubTitle>Для входа в чат Вам нужно зарегистрироваться</C.SubTitle>

          {isFetching ? (
            <ConfirmRegister />
          ) : (
            <Block column jc="space-between" height="550px">
              <C.Label>
                <Input name="email" placeholder="Адресс електронной почты" />
                <C.FormIconStyleWrapper>
                  <Envelope />
                </C.FormIconStyleWrapper>
              </C.Label>

              <C.Label>
                <Input name="name" placeholder="Ваше имя" />
                <C.FormIconStyleWrapper>
                  <User />
                </C.FormIconStyleWrapper>
              </C.Label>
              <C.Label>
                <Input name="password" type="password" placeholder="Пароль" />
                <C.FormIconStyleWrapper>
                  <Lock />
                </C.FormIconStyleWrapper>
              </C.Label>
              <C.Label>
                <Input
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Повторите пароль"
                />
                <C.FormIconStyleWrapper>
                  <Lock />
                </C.FormIconStyleWrapper>
              </C.Label>
              <Button type="submit">Зарегистрироваться</Button>
              <C.Linky to={"/login"}>Войти в аккаунт</C.Linky>
            </Block>
          )}
        </Form>
      </C.FormContainer>
    </Formik>
  );
};

export default RegisterForm;
