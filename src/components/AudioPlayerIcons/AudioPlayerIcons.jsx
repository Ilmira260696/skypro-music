import React from "react";
import *as S  from "./AudioPlayerIconsStyle";

export function AudioPlayerIcons (props) {
    return (
        <S.playerBtn $style={props.alt}>
        <S.playerBtnSvg $style={props.alt} alt={props.alt}>
          <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`}/>
        </S.playerBtnSvg>
      </S.playerBtn>
    )
}