import React from "react";
import *as S  from "./PlayerControlStyle";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";

function PlayerControl ({isPlaying,toggleTrackRepeat, repeatTrack, handleStart,handleStop}) {
  const togglePlay = isPlaying ? handleStop : handleStart;
    return (
        <S.PlayerControls>
       <AudioPlayerIcons
                alt="prev"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
              <AudioPlayerIcons
                alt={isPlaying ? "pause" : "play"}
                
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
         </S.PlayerControls>
    )
}
export default PlayerControl ;