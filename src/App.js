import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import Filters from "./components/Filters/filters";
import Search from "./components/Search/search";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/Sidebar/sidebar";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

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
