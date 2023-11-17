import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackList } from "../../components/TrackList/TrackList";
import { useGetSelectionsQuery } from "../../serviseQuery/tracks";
import { setCurrentPage, setCategoryArr } from "../../store/slices/track";
import {
  categoryArrSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/track";

export function Category() {
  const categoryArr = useSelector(categoryArrSelector);
  const filtre = useSelector(filtersPlaylistSelector);
  const params = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id));
  const tracks =
    filtre?.isActiveSort || filtre?.isActiveAuthors || filtre?.isActiveSearch
      ? filtre?.filterTracksArr
      : categoryArr;

  useEffect(() => {
    dispatch(setCategoryArr(data?.items));
  }, [filtre.isActiveSort, tracks]);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentPage("Category"));
      dispatch(setCategoryArr(data?.items));
    }
  }, [data]);

  return (
    <TrackList
      title={data?.name}
      tracks={tracks}
      error={error}
      isLoading={isLoading}
    />
  );
}
