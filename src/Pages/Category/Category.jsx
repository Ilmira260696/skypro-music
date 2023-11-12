import React from "react";
import * as S from "./CategoryStyle";
import { useParams } from "react-router-dom";
// import { CategoryArr } from "../../utilits/Constans";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackList } from "../../components/TrackList/TrackList";
import {useGetSelectionsQuery }from "../../serviseQuery/tracks";
import { setCurrentPage, setCategoryArr } from "../../store/slices/track";
import { categoryArrSelector, filtersPlaylistSelector} from '../../store/selectors/track';

export function Category() {
  const categoryArr = useSelector(categoryArrSelector);
  const filtred = useSelector(filtersPlaylistSelector);
  const params = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id));
  const tracks =
    filtred?.isActiveSort || filtred?.isActiveAuthors || filtred?.isActiveSearch
      ? filtred?.filterTracksArr
      : categoryArr;

  useEffect(() => {
    console.log("filterCategory", filtred.isActiveSort);
    console.log("tracksCategory", tracks);
    dispatch(setCategoryArr(data?.items));
  }, [filtred.isActiveSort, tracks]);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentPage("Category"));
      dispatch(setCategoryArr(data?.items));
      console.log(`category №${Number(params.id)}`, data);
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

