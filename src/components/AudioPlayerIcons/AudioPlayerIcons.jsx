import React from "react";
import { useState } from "react";

import *as S  from "./AudioPlayerIconsStyle";

export function AudioPlayerIcons(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <S.playerBtn
    $style={props.alt}
    onClick={() => {
      setIsActive(!isActive);
      props.click();
    }}
  >
    <S.playerBtnSvg
      $style={props.alt}
      alt={props.alt}
      $active={props.repeatTrack}
    >
      <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`} />
    </S.playerBtnSvg>
  </S.playerBtn>
  );
}