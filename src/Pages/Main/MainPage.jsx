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
 
  const [tracks, setArrTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const handleCurrentTrack = (track) => setCurrentTrack(track);
  
  useEffect(() => {
    GetAllTracks().then((track) => {
      console.log(track);
      setArrTracks(track);
    });
  }, []);

    const [loading, setLoading] = useState(false);
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
              <TrackListTitle loading={loading} />
              <TrackList 
              loading={loading}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              
               />
            </S.MainCenterBlock>
            <SideBar loading={loading} />
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
