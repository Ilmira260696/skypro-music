import React from "react";
import * as S from "./TrackListStyle";
import { useDispatch, useSelector } from "react-redux";
// import {currentTrackSelector} from "../../store/selectors/track";
import Filters from "../../components/Filters/Filters";
import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import {ItemTracks} from "../../components/ItemTracks/ItemTracks";

import { shuffleSelector,
  currentPlaylistSelector, 
  shuffleAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favoritesTracksSelector
  } from "../../store/selectors/track";

  import { setCurrentTrack,   setPlayList, toggleShuffleTrack} from "../../store/slices/track";


function TrackList({ loading, title,error, isFavorites, tracks }) {
  const dispatch = useDispatch();
  const shuffle = useSelector (shuffleSelector);
  const allTracks = useSelector(allTracksSelector);
  const  favoritesTracks = useSelector(favoritesTracksSelector );
  const currentPlaylist = useSelector(currentPlaylistSelector);
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector);
  const currentPage = useSelector (currentPageSelector);
  const  arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist;

  const handleCurrentTrack = (track) => {
    if(currentPage === "Main") {
      dispatch( setPlayList(allTracks))
    }
    if (currentPage === "Favorites") {
      dispatch( setPlayList(favoritesTracks ))
    }

    if (shuffle) {
      dispatch (toggleShuffleTrack({shuffle}));
    }
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({indexCurrentTrack, track}))
  };
return (
  <>
    <S.centerblockH2 className="centerblock__h2">
  {title || "Треки"}
  </S.centerblockH2>
  <Filters />
  <S.CenterblockContent>
  <TrackListTitle  />
  {error ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <S.ContentPlaylist>
            {loading &&
            new Array(20)
            .fill()
            .map(()=>(
              <ItemTracks key={Math.random()} loading={loading}/>
            ))}
       
            {tracks &&
            tracks.map((track)=>(
              <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
                <ItemTracks key={track.id} onClick={() => handleCurrentTrack(track)}
                loading={loading}
                track={track}
                tracks={tracks}
                isFavorites = {isFavorites}
                />
  </S.PlaylistItem>
            ))}

          </S.ContentPlaylist>
        )}
          </S.CenterblockContent>
  </>
)
}

export default TrackList;
