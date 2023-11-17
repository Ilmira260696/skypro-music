import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFavouriteTracksAllQuery } from "../../serviseQuery/tracks";
import {
  setFavouriteTracksAll,
  setCurrentPage,
} from "../../store/slices/track";
import {
  favouritesTracksSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/track";
import { TrackList } from "../../components/TrackList/TrackList";

export function Favorites() {
  const dispatch = useDispatch();
  const filter = useSelector(filtersPlaylistSelector);
  const { data, error, isLoading } = useGetFavouriteTracksAllQuery();
  const favouritesTracks = useSelector(favouritesTracksSelector);

  const tracks =
    filter?.isActiveSort ||
    filter?.isActiveAuthors ||
    filter?.isActiveGenres ||
    filter?.isActiveSearch
      ? filter?.filterTracksArr
      : favouritesTracks;

  useEffect(() => {
    dispatch(setFavouriteTracksAll(data));
  }, [filter.isActiveSort, tracks]);

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
      />
    </>
  );
}
