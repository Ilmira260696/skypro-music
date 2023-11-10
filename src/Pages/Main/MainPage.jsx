import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {TrackList} from "../../components/TrackList/TrackList";
import { allTracksSelector } from "../../store/selectors/track";
import { setAllTracks, setCurrentPage } from "../../store/slices/track";
import  { useGetTracksAllQuery} from "../../serviseQuery/tracks";

export function Main() {
  const dispatch = useDispatch();
  const tracks = useSelector(allTracksSelector);
  const { data, isError, isLoading } = useGetTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    }
  }, [data]);

  return <TrackList isLoading={isLoading} tracks={tracks} error={isError} />;
}
  //       setLoading(true);
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [loading]);