import React from "react";
import *as S  from "./PlayerControlStyle";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";

function PlayerControl () {
    return (
        <S.PlayerControls>
        <AudioPlayerIcons
                onClick={() => {
                  alert("Еще не реализовано");
                }}
                alt="prev"
              />
              <AudioPlayerIcons alt="play" />
              <AudioPlayerIcons
                onClick={() => {
                  alert("Еще не реализовано");
                }}
                alt="next"
              />
              <AudioPlayerIcons alt="repeat" />
              <AudioPlayerIcons
                onClick={() => {
                  alert("Еще не реализовано");
                }}
                alt="shuffle"
              />
         </S.PlayerControls>
    )
}
export default PlayerControl ;