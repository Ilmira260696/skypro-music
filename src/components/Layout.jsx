import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "../Pages/Main/MainPageStyle";
import { currentTrackSelector } from "../store/selectors/track";
import { NavMenu } from "./NavMenu/NavMenu";
import Search from "./Search/Search";
import SideBar from "./Sidebar/Sidebar";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";

const Layout = ({ loading, loadingTracksError }) => {
  const currentTrack = useSelector(currentTrackSelector);

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <S.MainCenterBlock>
              <Search />

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
          <footer className="footer"></footer>
        </S.container>
      </S.wrapper>
    </div>
  );
};
export { Layout };
