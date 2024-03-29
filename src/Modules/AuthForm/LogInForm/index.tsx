import { FC, useEffect } from "react";
import { AuthInput } from "Components";
import * as C from "../style";
import { Envelope, Lock } from "@styled-icons/boxicons-regular";
import { Formik, Form } from "formik";
import { LOG_IN_SCHEMA } from "utils/schemas";
import { useLocation, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm: FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // By default authPage returns loginForm as index route without any URL path changing. Here we use navigate to handle path, 
  // so we can use relative path prop "to" in a Link component;

  useEffect(() => {
    if (location.pathname === "/auth") {
      navigate("login");
    }
  }, []);

  return (
    <Formik initialValues={initialValues} validationSchema={LOG_IN_SCHEMA}>
      <article>
        <Form>
          <C.AuthTitle>Войти в аккаунт</C.AuthTitle>
          <C.AuthSubTitle>Пожалуйста, войдите в свой аккаунт</C.AuthSubTitle>
          <C.AuthBlock $jc="space-between" $height="400px">
            <label>
              <AuthInput
                name="email"
                type="email"
                placeholder="Адресс електронной почты"
              />
              <C.FormIconStyleWrapper>
                <Envelope />
              </C.FormIconStyleWrapper>
            </label>
            <label>
              <AuthInput name="password" type="password" placeholder="Пароль" />
              <C.FormIconStyleWrapper>
                <Lock />
              </C.FormIconStyleWrapper>
            </label>

            <C.AuthButton>Войти в аккаунт</C.AuthButton>
            <C.RouterLink to={"../register"}>Зарегистрироваться</C.RouterLink>
          </C.AuthBlock>
        </Form>
      </article>
    </Formik>
  );
};
