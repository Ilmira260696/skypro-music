import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrackList } from "../../components/TrackList/TrackList";
import {
  allTracksSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/track";
import { setAllTracks, setCurrentPage } from "../../store/slices/track";
import { useGetTracksAllQuery } from "../../serviseQuery/tracks";

export function Main() {
  const dispatch = useDispatch();
  const tracksAll = useSelector(allTracksSelector);
  const filtre = useSelector(filtersPlaylistSelector);
  const { data, isError, isLoading } = useGetTracksAllQuery();
  const tracks =
    filtre?.isActiveSort ||
    filtre?.isActiveAuthors ||
    filtre?.isActiveGenres ||
    filtre?.isActiveSearch
      ? filtre?.filterTracksArr
      : tracksAll;

  useEffect(() => {
    console.log(data);
    dispatch(setAllTracks(data));
  }, [filtre.isActiveSort, tracks]);

  useEffect(() => {
    if (data) {
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    }
  }, [data]);

  return <TrackList isLoading={isLoading} tracks={tracks} error={isError} />;
}
