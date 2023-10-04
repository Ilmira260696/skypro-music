import React from "react";
import *as S  from "./PlayerTrackPlayStyle";

export function PlayerTrackPlay () {
    return (
        <S.PlayerTrackPlay>
        <S.TrackPlayContain>
        <S.TrackPlayImage>
           <S.TrackPlaySvg>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackPlaySvg>
            </S.TrackPlayImage>
          {loading ? (
          <S.TrackPlayAuthor>
         
            <S.TrackPlayAuthorLink href="http://">
              Ты та...
            </S.TrackPlayAuthorLink>
            
            </S.TrackPlayAuthor>
          ) :(
            <S.SkeletonPlayer></S.SkeletonPlayer>
          )}
          {loading ? (
          <S.TrackPlayAlbum>
            <S.TrackPlayLink href="http://">
              Баста
            </S.TrackPlayLink>
            </S.TrackPlayAlbum>
          ) :(
            <S.SkeletonPlayer></S.SkeletonPlayer>
          )}
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