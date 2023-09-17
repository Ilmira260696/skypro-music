import "./App.css";
import React from "react";
import {useState, useEffect} from "react";
import Search from "./components/Search/Search";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/Sidebar/Sidebar";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import Filters from "./components/Filters/Filters";
import TrackListTitle from "./components/TrackListTitle/TrackListTitle";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect (() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  },
  [loading])
  
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
              <TrackListTitle loading={loading} />
              <TrackList loading={loading} />
            </div>
            <SideBar loading={loading} />
          </main>
          <AudioPlayer loading={loading} />
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
