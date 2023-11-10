import React from "react";
import * as S from "./TrackListStyle";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../../components/Filters/Filters";
import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import {ItemTracks} from "../../components/ItemTracks/ItemTracks";

import {   shuffledSelector,
  currentPlaylistSelector,
  shuffledAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favouritesTracksSelector,
  } from "../../store/selectors/track";

  import {   setCurrentTrack,
    setCurrentPlaylist,
    toggleShuffleTracks,} from "../../store/slices/track";


  export function TrackList({ title, error, isLoading, tracks, isFavorites }) {
    const dispatch = useDispatch();
    const shuffle = useSelector(shuffledSelector);
    const allTracks = useSelector(allTracksSelector);
    const favouritesTracks = useSelector(favouritesTracksSelector);
    const currentPlaylist = useSelector(currentPlaylistSelector);
    const shuffleAllTracks = useSelector(shuffledAllTracksSelector);
    const currentPage = useSelector(currentPageSelector);
    const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist;
  
    const handleCurrentTrack = (track) => {
   
      if (currentPage === "Main") {
        dispatch(setCurrentPlaylist(allTracks));
      }
      if (currentPage === "Favorites") {
        dispatch(setCurrentPlaylist(favouritesTracks));
      }
    
  
      if (shuffle) {
        dispatch(toggleShuffleTracks({ shuffle }));
      }
  
      const indexCurrentTrack = arrayTracksAll.indexOf(track);
      dispatch(setCurrentTrack({ track, indexCurrentTrack }));
      console.log(track);
    };
  
    return (
      <>
        <S.centerblockH2 className="centerblock__h2">
          {title || "Треки"}
        </S.centerblockH2>
        <Filters />
        <S.centerblockContent>
          <TrackListTitle />
          {error ? (
            <div>Не удалось загрузить плейлист, попробуйте позже</div>
          ) : (
            <S.contentPlaylist>
              {isLoading &&
                new Array(20)
                  .fill()
                  .map(() => (
                    <ItemTracks key={Math.random()} isLoading={isLoading} />
                  ))}
              {tracks &&
                tracks.map((track) => (
                  <S.playlistItem
                    key={track.id}
                    onClick={() => handleCurrentTrack(track)}
                  >
                    <ItemTracks
                      key={track.id}
                      onClick={() => handleCurrentTrack(track)}
                      isLoading={isLoading}
                      track={track}
                      tracks={tracks}
                      isFavorites={isFavorites}
                    />
                  </S.playlistItem>
                ))}
            </S.contentPlaylist>
          )}
        </S.centerblockContent>
      </>
    );
  }