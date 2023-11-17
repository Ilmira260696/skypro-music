import React from "react";
import { useState, useEffect } from "react";
import * as S from "./VolumeBlockStyle";

export function VolumeBlock({ audioRef }) {
  const [volume, setVolume] = useState(50);
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      console.log(audioRef.current.volume);
    }
  }, [volume, audioRef]);
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImg>
          <S.VolumeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImg>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            $style="input"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(a) => setVolume(a.target.value)}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
}
