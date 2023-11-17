import React from "react";
import * as S from "./TrackListStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import {ItemTracks} from "../../components/ItemTracks/ItemTracks";
import {shuffledSelector,currentPlaylistSelector, shuffledAllTracksSelector, currentPageSelector, allTracksSelector,favouritesTracksSelector,categoryArrSelector,filtersPlaylistSelector,} from "../../store/selectors/track";
import { setCurrentTrack,setCurrentPlaylist, toggleShuffleTracks, setFilterPlaylist} from "../../store/slices/track";

export function TrackList({ title, error, isLoading, tracks, isFavorites, isMain }) {
    const dispatch = useDispatch();
    const shuffle = useSelector(shuffledSelector);
    const allTracks = useSelector(allTracksSelector);
    const favouritesTracks = useSelector(favouritesTracksSelector);
    const currentPlaylist = useSelector(currentPlaylistSelector);
    const shuffleAllTracks = useSelector(shuffledAllTracksSelector);
    const currentPage = useSelector(currentPageSelector);
    const categoryArr = useSelector(categoryArrSelector);
    const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist;
    const filtersPlaylist = useSelector(filtersPlaylistSelector);


    useEffect(() => {
      dispatch(setFilterPlaylist({ sort: "По умолчанию" }));
      dispatch(setFilterPlaylist({ search: "" }));
      dispatch(setFilterPlaylist({ authors: "" }));
      dispatch(setFilterPlaylist({ genres: "" }));
    }, [title]);
  
  
    const handleCurrentTrack = (track) => {
      if (!filtersPlaylist.isActiveSort && !filtersPlaylist?.isActiveAuthors) {
   
      if (currentPage === "Main") {
        dispatch(setCurrentPlaylist(allTracks));
      }
      if (currentPage === "Favorites") {
        dispatch(setCurrentPlaylist(favouritesTracks));
      }
      if (currentPage === "Category") {
        dispatch(setCurrentPlaylist(categoryArr));
      }
    } else {
      dispatch(setCurrentPlaylist(filtersPlaylist.filterTracksArr));
    }
  
      if (shuffle) {
        dispatch(toggleShuffleTracks({ shuffle }));
      }
  
      const indexCurrentTrack = arrayTracksAll.indexOf(track);
      dispatch(setCurrentTrack({ track, indexCurrentTrack }));
    };
  
    return (
      <>
        <S.CenterblockH2 className="centerblock__h2">
          {title || "Треки"}
        </S.CenterblockH2>
        <Filters 
        selectedArrListFilter={
          currentPage === "Main"
            ? allTracks
            : currentPage === "Favourites"
            ? favouritesTracks
            : categoryArr
        }
        currentPage={currentPage}/>
        <S.CenterblockContent>
          <TrackListTitle />
          {error ? (
            <div>Не удалось загрузить плейлист, попробуйте позже</div>
          ) : (
            <S.ContentPlaylist>
              {isLoading &&
                new Array(20)
                  .fill()
                  .map(() => (
                    <ItemTracks key={Math.random()} isLoading={isLoading} />
                  ))}
              {tracks &&
                tracks.map((track) => (
                  <S.PlaylistItem
                    key={track.id}
                    onClick={() => handleCurrentTrack(track)}
                  >
                    <ItemTracks
                      key={track.id}
                      onClick={() => handleCurrentTrack(track)}
                      isLoading={isLoading}
                      track={track}
                      tracks={tracks}
                    />
                  </S.PlaylistItem>
                ))}
            </S.ContentPlaylist>
          )}
        </S.CenterblockContent>
      </>
    );
  }