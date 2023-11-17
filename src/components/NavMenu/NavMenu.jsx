import React from "react";
import * as S from "./NavMenuStyle";
import { useState, useContext } from "react";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";
import { UserContext } from "../../Context/UserContext";

export function NavMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const { handleLogout } = useContext(UserContext);
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
            <NavMenuItems item={{ Link: "/", text: "Главное" }} />
            <NavMenuItems item={{ Link: "/Favorites", text: "Мой плейлист" }} />
            <NavMenuItems
              item={{ Link: "/Auth", text: "Выйти" }}
              handleLogout={handleLogout}
            />
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
