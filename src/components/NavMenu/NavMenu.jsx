import React from "react";
import * as S from "./NavMenuStyle";
import { useState } from "react";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";


function NavMenu({setUser}) {

  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

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
        <S.BurgerLine  ></S.BurgerLine>
      </S.NavBurger>
      
      {visible && (
        <S.NavMenu>
          <S.MenuList>
          <NavMenuItems item={{ Link:"./",  text: "Главное" }} />
          <NavMenuItems item={{ Link:"./Favorites", text: "Мой плейлист" }} />
          <NavMenuItems onClick={handleLogout}  item={{ Link:"./login", text: "Выйти" }} />
        
          </S.MenuList>
        </S.NavMenu>
      )} 
    </S.MainNav>
  );
}

export default NavMenu;
