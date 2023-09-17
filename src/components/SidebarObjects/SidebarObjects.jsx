import React from "react";
import "./SidebarObjects.css";
export function SidebarObjects (props) {
    return (
        <div className="sidebar__item">
        {props.item.loading ? 
          <a className="sidebar__link" href={props.item.link}>
            <img
              className="sidebar__img"
              src={props.item.img}
              alt="day's playlist"
            />
          </a>
       : ( <div className="skeleton skeleton__sidebar"> </div>)}
      </div>
    );
    
}