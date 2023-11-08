import React from "react";
import * as S from "./MainPageStyle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import TrackList from "../../components/TrackList/TrackList";
import { allTracksSelector
 } from "../../store/selectors/track";
import { setAllTracks, setCurrentTrack } from "../../store/slices/track";
import  useGetTrackAllQuery from "../../serviseQuery/tracks";



function Main() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const tracks = useSelector(allTracksSelector);
  // const [loadingTracksError, setLoadingTracksError] = useState(null);
  // const currentTrack = useSelector (currentTrackSelector)
  // const shuffle = useSelector ( shuffleSelector);
  // const shuffleAllTracks = useSelector (shuffleAllTracksSelector);
  const {data,loadingTracksError} = useGetTrackAllQuery();



  // const handleCurrentTrack = (track) =>{
  //   const indexCurrentTrack = arrayTracksAll.indexOf(track);
  //   dispatch(setCurrentTrack({track, indexCurrentTrack}));
  // }
  // useEffect(() => {
  
  //   GetAllTracks().then((track) => {
  //     dispatch(setAllTracks(track));
  //   })
  //   .catch((error) => {
  //   setLoadingTracksError(error.message);
  //   });
  // }, []);

    
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(()=> {
    if(data) {
      dispatch(setAllTracks(data));
      dispatch(setCurrentTrack("Main"));
    }

  },[data])
  return (
 <>
              <TrackList 
              loading={loading}
              tracks={tracks}
              // handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}
               />
        </>
  );
};
export default Main;
