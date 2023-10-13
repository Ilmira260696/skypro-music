import React from "react";
import * as S from "./SidebarStyle";
import { CategoryArr } from "../../utilits/Constans";
import { NavLink } from "react-router-dom";
import UserContext from "../../Context/UserContext";


function SideBar({ loading, loadingTracksError, user, setUser}) {
 
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
 
  const FullCategory  = CategoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {loading && !loadingTracksError ? (
        <NavLink to={`/Category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </NavLink>
      ) : (
        <S.SkeletonSidebar> </S.SkeletonSidebar>
      )}
    </S.SidebarItem>
  ));
  return (
    <S.MainSidebar>
    <S.SidebarPersonal>
          <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
          <S.SidebarIcon >
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
      <S.SidebarBlock>
      <S.SidebarList>{FullCategory}</S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default SideBar;
