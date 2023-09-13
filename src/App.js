import "./App.css";
import React from "react";
import Filters from "./components/Filters/Filters"
import Search from "./components/Search/Search.jsx";
import TrackList from "./components/TrackList/TrackList.jsx";
import SideBar from "./components/Sidebar/Sidebar.jsx";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer.jsx";
import NavMenu from "./components/NavMenu/NavMenu.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <div className="main__centerBlock centerBlock">
              <Search />

              <h2 className="centerBlock__h2">Треки</h2>
              <Filters />
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
