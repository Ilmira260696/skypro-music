import React from "react";
import *as S  from "./PlayerControlStyle"

function PlayerControl () {
    return (
        <S.PlayerControls>
        <S.PlayerBtnPrev>
         <S.PlayerBtnPrevSvg>
             <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
             </S.PlayerBtnPrevSvg>
           </S.PlayerBtnPrev>
       <S.PlayerBtnPlay>
          <S.PlayerBtnPlaySvg>
             <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
             </S.PlayerBtnPlaySvg>
           </S.PlayerBtnPlay>
        <S.PlayerBtnNext>
           <S.PlayerBtnNextSvg>
             <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
             </S.PlayerBtnNextSvg>
           </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
           <S.PlayerBtnRepeatSvg>
             <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
             </S.PlayerBtnRepeatSvg>
         </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle>
          <S.PlayerBtnShuffleSvg>
             <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
             </S.PlayerBtnShuffleSvg>
           </S.PlayerBtnShuffle>
         </S.PlayerControls>
    )
}
export default PlayerControl ;