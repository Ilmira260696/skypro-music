import React from "react";
import * as S from "./MainPageStyle";
import { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/Sidebar/Sidebar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import NavMenu from "../../components/NavMenu/NavMenu";
import Filters from "../../components/Filters/Filters";
import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import { GetAllTracks } from "../../Api";

function Main() {
  const [loading, setLoading] = useState(false);
  const [tracks, setArrTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [loadingTracksError, setLoadingTracksError] = useState(null);
  const handleCurrentTrack = (track) => setCurrentTrack(track);
  

  
  useEffect(() => {
  
    GetAllTracks().then((track) => {
      setArrTracks(track);
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
