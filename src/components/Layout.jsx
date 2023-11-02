import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "../Pages/Main/MainPageStyle";
import { CurrentTrackSelector } from "../store/selectors/track";
import  NavMenu  from "./NavMenu/NavMenu";
import Search  from "./Search/Search";
import SideBar from "./Sidebar/Sidebar";
import TrackListTitle from "./TrackListTitle/TrackListTitle";
import AudioPlayer from "./AudioPlayer/AudioPlayer";

const Layout = ({ loading, loadingTracksError }) => {
  const currentTrack = useSelector(CurrentTrackSelector);
  return (
    // <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <S.MainCenterBlock>
              <Search />
              <S.CenterBlockH2>Треки</S.CenterBlockH2>
              <TrackListTitle />

              <Outlet />
            </S.MainCenterBlock>
            <SideBar
              loading={loading}
              loadingTracksError={loadingTracksError}
            />
          </S.main>
          {currentTrack && (
            <AudioPlayer loading={loading} currentTrack={currentTrack} />
          )}
        </S.container>
        <footer className="footer"></footer>
      </S.wrapper>
// </div>
  );
};
export { Layout };
