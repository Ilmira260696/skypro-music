import React from "react";
import { Link } from "react-router-dom";
import * as S from "./AuthStyle";
import { useEffect, useState } from "react";
import { RegistrationApi, LoginApi } from "../../Api";


export default function AuthPage({ isLoginMode, setUser }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [offButton, setOffButton] = useState(false)

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setError("Укажите почту или пароль");
    } else {
    try {
    const response = await LoginApi({email, password});
    console.log(response)
    setUser(response.username);
     localStorage.setItem ('user', response.username);
     setOffButton(true)
     window.location.href = './';
    } catch (curenterror) {
      setError(curenterror.message)
    } finally {
      setOffButton(false)
    }
  }
  }
  const handleRegister = async () => {
    if (password !==repeatPassword) {
      setError ('Пароли не совпадают');
    } else {
      try {
   const response = await RegistrationApi ({email, password});
   setOffButton(true)
   setUser(response.username);
   localStorage.setItem ('user', response.username);
   window.location.href = './';
  } catch (curenterror) {
    setError(curenterror.message)
  } finally {
    setOffButton(false)
  }
}
}

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/Login">
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
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
            <S.PrimaryButton>
                Зарегистрироваться
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
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
              {offButton? 'Загружаю...':'Войти'}
              </S.PrimaryButton>
              <Link to="/Registration">
                <S.ButtonTwo onClick={handleRegister} disabled={offButton}>
                {offButton? 'Идет регистрация':'Зарегистрироваться'}

                </S.ButtonTwo>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}