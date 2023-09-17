import React from "react";
import "./Sidebar.css";
import { SidebarObjects } from "../SidebarObjects/SidebarObjects";

function SideBar({ loading }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
      <SidebarObjects
       item={{ link: "#", img: "img/playlist01.png", loading: loading }}
       />
      <SidebarObjects
         item={{ link: "#", img: "img/playlist02.png", loading: loading }}
       />
       <SidebarObjects
         item={{ link: "#", img: "img/playlist03.png", loading: loading }}
       />
     </div>
   </div>
 </div>
);
  }
export default SideBar;
