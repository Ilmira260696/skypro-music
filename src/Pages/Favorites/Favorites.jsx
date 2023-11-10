import React from "react";
// import * as S from "./FavoritiesStyle";
// import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFavouriteTracksAllQuery} from "../../serviseQuery/tracks";
import { setFavouriteTracksAll, setCurrentPage,} from "../../store/slices/track";
import {  favouritesTracksSelector } from "../../store/selectors/track";
import {TrackList} from "../../components/TrackList/TrackList";


export function Favorites() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetFavouriteTracksAllQuery();
  const favouritesTracks = useSelector(favouritesTracksSelector);

  useEffect(() => {
    if (data) {
      dispatch(setFavouriteTracksAll(data));
      dispatch(setCurrentPage("Favorites"));
    }
  }, [data]);

  return (
    <>
      <TrackList
        title="Мои треки"
        tracks={favouritesTracks}
        error={error}
        isLoading={isLoading}
        isFavorites
      />
      {isLoading && <div>Загрузка...</div>}
      {error && <div>{error}</div>}
    </>
  );
}