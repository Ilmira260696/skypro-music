import React from "react";
import *as S  from "./SidebarStyle"
import { SidebarObjects } from "../SidebarObjects/SidebarObjects";

function SideBar({ loading }) {
  return (
   <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
    <S.SidebarBlock>
      <S.SidebarList>
      <SidebarObjects
       item={{ link: "#", img: "img/playlist01.png", loading: loading }}
       />
      <SidebarObjects
         item={{ link: "#", img: "img/playlist02.png", loading: loading }}
       />
       <SidebarObjects
         item={{ link: "#", img: "img/playlist03.png", loading: loading }}
       />
  </S.SidebarList>
     </S.SidebarBlock>
   </S.MainSidebar>
);
  }
export default SideBar;
