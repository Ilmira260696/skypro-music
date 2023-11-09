import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import TrackList from "../../components/TrackList/TrackList";
import { allTracksSelector } from "../../store/selectors/track";
import { setAllTracks, setCurrentPage } from "../../store/slices/track";
import  { useGetTrackAllQuery} from "../../serviseQuery/tracks";

function Main() {
  const dispatch = useDispatch();
  const tracks = useSelector(allTracksSelector);
  const {data,loading,  isError} = useGetTrackAllQuery();


  useEffect(()=> {
    if(data) {
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    }
  },[data]);
  return (
 <TrackList loading={loading}
            tracks={tracks}
            error={isError}
               />     
  );
};
export default Main;


  // useEffect(() => {
  //   if (!loading) {
  //     const timer = setTimeout(() => {
  //       setLoading(true);
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [loading]);