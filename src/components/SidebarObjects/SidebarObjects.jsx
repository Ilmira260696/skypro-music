import React from "react";
import *as S  from "./SidebarObjectsStyle"

export function SidebarObjects (props) {
    return (
       <S.SidebarItem>
        {props.item.loading ? 
          <S.SidebarLink href={props.item.link}>
            <S.SidebarImg
              src={props.item.img}
              alt="day's playlist"
            />
          </S.SidebarLink>
       : ( <S.SkeletonSidebar> </S.SkeletonSidebar>)}
     </S.SidebarItem>
    );
    
}