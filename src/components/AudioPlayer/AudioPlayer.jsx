import React from "react";
import *as S  from "./AudioPlayerStyle";
import PlayerControl from "../PlayerControl/PlayerControl";
import { PlayerTrackPlay } from "../PlayerTrackPlay/PlayerTrackPlay";


function AudioPlayer () {
    return (
        <S.Bar>
         
       <S.BarContent> 
        <S.BarPlayerProgress></S.BarPlayerProgress>
         <S.BarPlayerBlock>
          <S.BarPlayerPlayer>
            <PlayerControl />
            <PlayerTrackPlay />
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