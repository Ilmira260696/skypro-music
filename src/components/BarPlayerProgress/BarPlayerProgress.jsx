import React from "react";
import * as S from "./BarPlayerProgressStyle";
import { DurationTrack } from "../../utilits/DurationTrack";

export function BarPlayerProgress({ duration, timeProgress, audioRef }) {
  return (
    <>
      <S.BarPlayerProgressTime>
        {DurationTrack(timeProgress)} /{DurationTrack(duration)}
      </S.BarPlayerProgressTime>
      <S.BarPlayerProgress
        type="range"
        onChange={(a) => {
          audioRef.current.currentTime = a.target.value;
        }}
        min={0}
        max={duration}
        value={timeProgress}
        step={0.1}
      />
    </>
  );
}
