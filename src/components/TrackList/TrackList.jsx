import React from "react";
import "./TrackList.css";
import ArrTracks from "../../ArrTracks/ArrTracks"


function Tracks({loading}) {
  const trackItems = ArrTracks.map((track) => (
        <div key={track.id} className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              {loading ? (
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                 {track.trackName}
                 {track.remix ? (
                  <span className="track__title-span">({track.remix})</span>
                  ) : (
                    ""
                  )}
                </a>
              </div>
               ) : (
                <div className="skeleton"> </div>
              )}
            </div>
            {loading ? (
            <div className="track__author">
              <a className="track__author-link" href="http://">
              {track.trackAuthor}
              </a>
            </div>
                ) : (
                  <div className="skeleton"> </div>)}
              

            {loading ? (
            <div className="track__album">
              <a className="track__album-link" href="http://">
               {track.trackAlbum}
              </a>
            </div>
            ) : 
              (<div className="skeleton skeleton__album"> </div>)}
           
          
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">{track.trackTime}</span>
            </div>
             
          </div>
        </div>
          )
          );
          
          return <ul className="content__playlist playlist">{trackItems}</ul>;
          
        }
     
      export default Tracks;
       