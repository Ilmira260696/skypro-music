import React from "react";
import *as S  from "./PlayerTrackPlayStyle";

export function PlayerTrackPlay ({ currentTrack}) {
    return (
        <S.PlayerTrackPlay>
        <S.TrackPlayContain>
        <S.TrackPlayImage>
           <S.TrackPlaySvg>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackPlaySvg>
            </S.TrackPlayImage>
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink href="http://">
            {currentTrack.name}
            </S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
          <S.TrackPlayAlbum>
            <S.TrackPlayLink href="http://">
            {currentTrack.author}
            </S.TrackPlayLink>
            </S.TrackPlayAlbum>   
       </S.TrackPlayContain>
        <S.TrackPlayLikeDis>
         <S.TrackPlayLike>
           <S.TrackPlayLikeSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackPlayLikeSvg>
            </S.TrackPlayLike>
          <S.TrackPlayDislike>
            <S.TrackPlayDislikeSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
              </S.TrackPlayDislikeSvg>
            </S.TrackPlayDislike>
          </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>  
    )
}
