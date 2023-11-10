import React from "react";
import *as S  from "./AudioPlayerStyle";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BarPlayerProgress } from "../BarPlayerProgress/BarPlayerProgress";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import { VolumeBlock } from "../VolumeBlock/VolumeBlock";
import {
  isPlayingSelector,
  currentPlaylistSelector,
  indexCurrentTrackSelector,
  shuffledSelector,
  shuffledAllTracksSelector,} from "../../store/selectors/track";
import { 
  setIsPlaying,
  setNextTrack,
  setPrevTrack,
  toggleShuffleTracks, } from "../../store/slices/track";


  export function AudioPlayer({ isLoading, currentTrack }) {
    const dispatch = useDispatch();
    const isPlaying = useSelector(isPlayingSelector);
    const shuffled = useSelector(shuffledSelector);
    const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
    const tracks = useSelector(currentPlaylistSelector);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const indexCurrentTrack = useSelector(indexCurrentTrackSelector);
  
    const handleStart = () => {
      audioRef.current.play();
      dispatch(setIsPlaying(true));
    };
    const handleStop = () => {
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
    };
  
    const togglePlay = isPlaying ? handleStop : handleStart;
    const arrayTracksAll = shuffled ? shuffledAllTracks : tracks;
  
    useEffect(() => {
      handleStart();
      audioRef.current.onended = () => {
        if (indexCurrentTrack < arrayTracksAll.length - 1) {
          dispatch(
            setNextTrack({
              trackNext: arrayTracksAll[arrayTracksAll.indexOf(currentTrack) + 1],
              indexNextTrack: arrayTracksAll.indexOf(currentTrack) + 1,
            })
          );
        }
        dispatch(setIsPlaying(false));
      };
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
    const toggleCurrentTrack = (alt) => {
      if (alt === "next" && indexCurrentTrack < arrayTracksAll.length - 1) {
        const indexNextTrack = arrayTracksAll.indexOf(currentTrack) + 1;
        console.log("Next", arrayTracksAll[indexNextTrack]);
        return dispatch(
          setNextTrack({
            trackNext: arrayTracksAll[indexNextTrack],
            indexNextTrack,
          })
        );
      }
      if (alt === "prev" && indexCurrentTrack > 0) {
        const indexPredTrack = arrayTracksAll.indexOf(currentTrack) - 1;
        console.log("Pred", arrayTracksAll[indexPredTrack]);
        return dispatch(
          setPrevTrack({
            trackPred: arrayTracksAll[indexPredTrack],
            indexPredTrack,
          })
        );
      }
    };
  
    return (
      <S.bar>
        <audio
          src={currentTrack.track_file}
          ref={audioRef}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
        />
        <S.barContent>
          <BarPlayerProgress
            duration={duration}
            timeProgress={timeProgress}
            audioRef={audioRef}
          />
          <S.barPlayerBlock>
            <S.barPlayer>
              <S.playerControls>
                <AudioPlayerIcons
                  alt="prev"
                  click={() => {
                    toggleCurrentTrack("prev");
                  }}
                />
                <AudioPlayerIcons
                  alt={isPlaying ? "pause" : "play"}
                  click={togglePlay}
                />
                <AudioPlayerIcons
                  alt="next"
                  click={() => {
                    toggleCurrentTrack("next");
                  }}
                />
                <AudioPlayerIcons
                  alt="repeat"
                  click={toggleTrackRepeat}
                  isActive={repeatTrack}
                />
                <AudioPlayerIcons
                  alt="shuffle"
                  click={() => {
                    dispatch(toggleShuffleTracks(!shuffled));
                  }}
                  isActive={shuffled}
                />
              </S.playerControls>
              <S.playerTrackPlay>
                <S.trackPlayContain>
                  <S.trackPlayImage>
                    <S.trackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.trackPlaySvg>
                  </S.trackPlayImage>
  
                  {!isLoading ? (
                    <S.trackPlayAuthor>
                      <S.trackPlayAuthorLink href="http://">
                        {currentTrack.name}
                      </S.trackPlayAuthorLink>
                    </S.trackPlayAuthor>
                  ) : (
                    <S.SkeletonPlayBar />
                  )}
  
                  {!isLoading ? (
                    <S.trackPlayAlbum>
                      <S.trackPlayAlbumLink href="http://">
                        {currentTrack.author}
                      </S.trackPlayAlbumLink>
                    </S.trackPlayAlbum>
                  ) : (
                    <S.SkeletonPlayBar />
                  )}
                </S.trackPlayContain>
                <S.trackPlayLikeDis>
                  <S.trackPlayLike>
                    <S.trackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.trackPlayLikeSvg>
                  </S.trackPlayLike>
                  <S.trackPlayDislike>
                    <S.trackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </S.trackPlayDislikeSvg>
                  </S.trackPlayDislike>
                </S.trackPlayLikeDis>
              </S.playerTrackPlay>
            </S.barPlayer>
            <VolumeBlock  audioRef={audioRef} />
          </S.barPlayerBlock>
        </S.barContent>
      </S.bar>
    );
  }