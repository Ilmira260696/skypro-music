import React from "react";
import *as S  from "./AudioPlayerStyle";

import { PlayerTrackPlay } from "../PlayerTrackPlay/PlayerTrackPlay";
import { BarPlayerProgress } from "../BarPlayerProgress/BarPlayerProgress";
import { useState, useEffect, useRef } from "react";
import { PlayerControls } from "../PlayerControl/PlayerControlStyle";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import { VolumeBlock } from "../VolumeBlock/VolumeBlock";


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
          <PlayerControls>
          <AudioPlayerIcons
                alt="prev"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
              <AudioPlayerIcons
                alt={isPlaying ? "pause" : "play"}
                click={togglePlay}
              />
              <AudioPlayerIcons
                alt="next"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
              <AudioPlayerIcons alt="repeat" click={toggleTrackRepeat} repeatTrack={repeatTrack} />
              <AudioPlayerIcons
                alt="shuffle"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
         </PlayerControls>
            <PlayerTrackPlay   currentTrack={ currentTrack} />
              </S.BarPlayerPlayer>
            <VolumeBlock  audioRef={audioRef}  />
           
            </S.BarPlayerBlock>
          
          </S.BarContent>
      </S.Bar>
    )
}
export default AudioPlayer;