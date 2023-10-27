import React from "react";
import * as S from "./MainPageStyle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import Search from "../../components/Search/Search";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/Sidebar/Sidebar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import NavMenu from "../../components/NavMenu/NavMenu";
import Filters from "../../components/Filters/Filters";
import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import { GetAllTracks } from "../../Api";
import { allTracksSelector, CurrentTrackSelector,shuffleAllTracksSelector,
 shuffleSelector } from "../../store/selectors/track";
import { setAllTracks, setCurrentTrack } from "../../store/slices/track";



function Main() {
  const dispatch = useDispatch();
  // const isPlaying = useSelector(isPlayingSelector);
  const [loading, setLoading] = useState(false);
  const tracks = useSelector(allTracksSelector);
  const [loadingTracksError, setLoadingTracksError] = useState(null);
  const currentTrack = useSelector (CurrentTrackSelector)
  const shuffle = useSelector ( shuffleSelector);
  const shuffleAllTracks = useSelector (shuffleAllTracksSelector);
  const arrayTracksAll = shuffle ? shuffleAllTracks :tracks;


  const handleCurrentTrack = (track) =>{
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack(track, indexCurrentTrack));
  }
  useEffect(() => {
  
    GetAllTracks().then((track) => {
      dispatch(setAllTracks(track));
    })
    .catch((error) => {
    setLoadingTracksError(error.message);
    });
  }, []);

    
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading]);
  return (
    <div>
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <S.MainCenterBlock>
              <Search />
              <Filters />
              <S.CenterBlockH2>Треки</S.CenterBlockH2>
              <TrackListTitle  />
              {loadingTracksError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (

              <TrackList 
              loading={loading}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}
               />

               )}
            </S.MainCenterBlock>
            <SideBar loading={loading}  loadingTracksError={loadingTracksError}/>
          </S.main>
          {currentTrack && (
          <AudioPlayer loading={loading}  currentTrack={currentTrack} />
          )}
        </S.container>
        <footer className="footer"></footer>
      </S.wrapper>
    </div>
  );
};
export default Main;
