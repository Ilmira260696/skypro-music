import React from "react";
import *as S  from "./AudioPlayerStyle"
function AudioPlayer ({loading}) {
    return (
        <S.Bar>
       <S.BarContent> 
        <S.BarPlayerProgress></S.BarPlayerProgress>
         <S.BarPlayerBlock>
          <S.BarPlayerPlayer>
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
              </S.BarPlayerPlayer>
        
           <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImg>
                 <S.VolumeSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                  </S.VolumeImg>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
           
            </S.BarPlayerBlock>
          
          </S.BarContent>
      </S.Bar>
    )
}
export default AudioPlayer;