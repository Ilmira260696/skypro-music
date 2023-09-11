import "./TrackList.css";
import Track1 from "./Track1";
import Track2 from "./Track2";
import Track3 from "./Track3";
import Track4 from "./Track4";
import Track5 from "./Track5";
import Track6 from "./Track6";
import Track7 from "./Track7";
import Track8 from "./Track8";
import Track9 from "./Track9";
import Track10 from "./Track10";
import Track11 from "./Track11";
import Track12 from "./Track12";
import Track13 from "./Track13";
import Track14 from "./Track14";
import Track15 from "./Track15";
import Track16 from "./Track16";

function Tracks () {
    return (
        <div className="centerBlock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
      <Track1/>
      <Track2/>
      <Track3/>
      <Track4/>
      <Track5/>
      <Track6/>
      <Track7/>
      <Track8/>
      <Track9/>
      <Track10/>
      <Track11/>
      <Track12/>
      <Track13/>
      <Track14/>
      <Track15/>
      <Track16/>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <button
                  className="track__author-link"
                  href="http://"
                ></button>
              </div>
              <div className="track__album">
                <button
                  className="track__album-link"
                  href="http://"
                ></button>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Tracks;