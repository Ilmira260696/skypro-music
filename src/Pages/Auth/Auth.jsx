import React from "react";
import { Link } from "react-router-dom";
import * as S from "./AuthStyle";
import { useEffect, useState } from "react";
import { RegistrationApi, LoginApi } from "../../Api";
import { useDispatch } from "react-redux";
import {setAuth} from "../../store/slices/AuthorizationSlice";
import {useAccessTokenUserMutation} from "../../serviseQuery/token"


export function AuthPage({ setUser }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [offButton, setOffButton] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [postToken] = useAccessTokenUserMutation;

  const responseToken = async() => {
    await postToken({email, password})
    .unwrap()
    .then((token)=>{
      dispatch(
        setAuth({
          access:token.access,
          refresh:token.refresh,
          user:JSON.parse(localStorage.getItem("user")),
        })
      )
    })
  }

  const handleLogin = async () => {
    try {
      const response = await LoginApi(email, password);
      console.log(email);
      console.log(response.username);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      responseToken();
      setOffButton(true);
      window.location.href = "/";
    } catch (currentError) {
      setError(currentError.message);
    } finally {
      setOffButton(false);
    }
  };

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
    } else {
      try {
        const response = await RegistrationApi(email, password);
        console.log(response);
        setOffButton(true);
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
        responseToken();
        window.location.href = "/";
      } catch (currentError) {
        setError(currentError.message);
        console.log(error);
      } finally {
        setOffButton(false);
      }
    }
  };

  const handleIsLoginMode = () => {
    setIsLoginMode(true);
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/Auth">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={offButton}>
                {offButton ? "Загружаем информацию..." : "Зарегистрироваться"}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
                {offButton ? "Загружаем информацию..." : "Войти"}
              </S.PrimaryButton>
              <Link to="/auth">
                <S.ButtonTwo onClick={handleIsLoginMode}>
                  Зарегистрироваться
                </S.ButtonTwo>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}