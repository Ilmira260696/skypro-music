import React from "react";
import * as S from "./AudioPlayerIconsStyle";

export function AudioPlayerIcons(props) {
  return (
    <S.playerBtn
      $style={props.alt}
      onClick={(event) => {
        props.click();
        event.stopPropagation();
      }}
    >
      <S.playerBtnSvg
        $style={props.alt}
        alt={props.alt}
        $active={props.isActive}
      >
        <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`} />
      </S.playerBtnSvg>
    </S.playerBtn>
  );
}
