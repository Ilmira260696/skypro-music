import React from "react";
import * as S from "./SidebarStyle";
import { CategoryArr } from "../../utilits/Constans";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

function SideBar({ loading, loadingTracksError }) {
  const FullCategory = CategoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {!loading && !loadingTracksError ? (
        <NavLink to={`/Category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </NavLink>
      ) : (
        <S.SkeletonSidebar> </S.SkeletonSidebar>
      )}
    </S.SidebarItem>
  ));

  const { handleLogout } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogout}>
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
