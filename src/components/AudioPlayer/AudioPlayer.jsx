import React from "react";
import *as S  from "./AudioPlayerStyle";
import PlayerControl from "../PlayerControl/PlayerControl";
import { PlayerTrackPlay } from "../PlayerTrackPlay/PlayerTrackPlay";
import { BarPlayerProgress } from "../BarPlayerProgress/BarPlayerProgress";
import { useState, useEffect, useRef } from "react";


function AudioPlayer ({ currentTrack}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
 
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const togglePlay = isPlaying ? handleStop : handleStart;
  useEffect(() => {
    handleStart();
  }, [currentTrack]);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const onTimeUpdate = () => {
    setTimeProgress(audioRef.current.currentTime);
  };

  const [repeatTrack, setRepeatTrack] = useState(false);

  const toggleTrackRepeat = () => {
    audioRef.current.loop = !repeatTrack;
    setRepeatTrack(!repeatTrack);
  };
    return (
        <S.Bar>
            <audio
        src={currentTrack.track_file}
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />
          
       <S.BarContent> 
        <BarPlayerProgress
        duration={duration}
          timeProgress={timeProgress}
          audioRef={audioRef}
        />
         <S.BarPlayerBlock>
          <S.BarPlayerPlayer>
            <PlayerControl />
            <PlayerTrackPlay   currentTrack={ currentTrack} />
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