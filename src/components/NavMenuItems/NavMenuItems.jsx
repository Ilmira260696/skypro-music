import React from "react";
import * as S from "./NavMenuItemsStyle";


export function NavMenuItems(props) {
  return (
    <S.MenuItem>
      
        <S.menuLink to={props.item.Link} >
   
          {props.item.text}
       
        </S.menuLink>
    </S.MenuItem>
  );
}