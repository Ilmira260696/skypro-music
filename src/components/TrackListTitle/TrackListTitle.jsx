import React from "react";
import * as S from "./TrackListTitleStyle";

function TrackListTitle() {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
      <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
      <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
      <S.PlaylistTitleCol4>
        <S.PlayListTitleSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </S.PlayListTitleSvg>
      </S.PlaylistTitleCol4>
    </S.ContentTitle>
  );
}
export default TrackListTitle;
