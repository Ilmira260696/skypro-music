import "./App.css";
import React from "react";

import Search from "./components/Search/Search";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/Sidebar/Sidebar";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <div className="main__centerBlock centerBlock">
              <Search />
<Filters/>
              <h2 className="centerBlock__h2">Треки</h2>
              <TrackList />
            </div>
            <SideBar />
          </main>
          <AudioPlayer />
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
export default App;
