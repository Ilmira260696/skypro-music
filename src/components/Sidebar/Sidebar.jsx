import React from "react";
import * as S from "./SidebarStyle";
import { CategoryArr } from "../../utilits/Constans";
import { NavLink } from "react-router-dom";

function SideBar({ loading, loadingTracksError}) {
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
        <S.SidebarPersonalName></S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
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
