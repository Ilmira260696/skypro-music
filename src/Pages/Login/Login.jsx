import React from "react";
import * as S from "./LoginStyle";
import { NavLink } from "react-router-dom";

export const Login = ({ onAuthButtonClick }) => {
  return (
    <S.wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalFormLoginLink href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.ModalFormLoginLink>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />

            <S.ModalBtnEnter onClick={onAuthButtonClick} to="/">
              Войти{" "}
            </S.ModalBtnEnter>
            <NavLink to="/Registration">
              <S.ModalBtnSignup> Зарегистрироваться </S.ModalBtnSignup>
            </NavLink>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.wrapper>
  );
};
