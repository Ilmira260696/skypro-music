import React from "react";
import * as S from "./NavMenuStyle";
import { useState } from "react";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";
import { Link } from "react-router-dom";

function NavMenu() {

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger type="button" onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      
      {visible && (
        <S.NavMenu>
          <S.MenuList>
          <NavMenuItems item={{ Link:"./",  text: "Главное" }} />
          <NavMenuItems item={{ Link:"./Favorites", text: "Мой плейлист" }} />
          <NavMenuItems item={{ Link:"./Login", text: "Войти" }} />
        
          </S.MenuList>
        </S.NavMenu>
      )} 
    </S.MainNav>
  );
}

export default NavMenu;
