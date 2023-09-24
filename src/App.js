import React from "react";
import { useState, useEffect } from "react";
import *as S  from './AppStyle'
import "./index.css";
import Search from "./components/Search/Search";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/Sidebar/Sidebar";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import Filters from "./components/Filters/Filters";
import TrackListTitle from "./components/TrackListTitle/TrackListTitle";

function App() {
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
    <div className="App">
      <S.wrapper>
       <S.container>
        <S.main>
            <NavMenu />
           <S.MainCenterBlock>
              <Search />
              <Filters />
             <S.CenterBlockH2>Треки</S.CenterBlockH2>
              <TrackListTitle loading={loading} />
              <TrackList loading={loading} />
              </S.MainCenterBlock>
            <SideBar loading={loading} />
            </S.main>
          <AudioPlayer loading={loading} />
          </S.container>
        <footer className="footer"></footer>
        </S.wrapper>
      </div>
   
  );
}

export default App;
