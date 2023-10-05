import React from "react";
import *as S  from "./TrackListStyle"
import ArrTracks from "../../ArrTracks/ArrTracks"
import { GetAllTracks } from "../../Api";
import { useState,  useEffect  } from "react";
function Tracks({loading}) {


  
  GetAllTracks().then((tracks)=>console.log(tracks));
  const [tracks, setArrTracks] = useState(ArrTracks);
  useEffect(() => {
    GetAllTracks().then((ArrTrack) => {
      console.log(ArrTrack);
      setArrTracks(ArrTrack);
    });
  }, []);

  const trackItems = tracks.map((track) => (
        <S.PlaylistItem key={track.id} className="playlist__item">
          <S.PlaylistTrack>
            <S.TrackTitle>
             <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
                </S.TrackTitleImg>
              {loading ? (
              <div className="track__title-text">
                <S.TrackListTitleLink href="http://">
                 {track.name}
                 {track.remix ? (
                  <S.TrackTitleSpan>({track.remix})</S.TrackTitleSpan>
                  ) : (
                    ""
                  )}
                </S.TrackListTitleLink>
              </div>
               ) : (
                <S.Skeleton> </S.Skeleton>
              )}
           </S.TrackTitle>
            {loading ? (
          <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
              {track.author}
              </S.TrackAuthorLink>
              </S.TrackAuthor>
                ) : (
                  <S.SkeletonAuthor> </S.SkeletonAuthor>)}
              

            {loading ? (
           <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
               {track.album}
              </S.TrackAlbumLink>
              </S.TrackAlbum>
            ) : 
              (<S.SkeletonAlbum> </S.SkeletonAlbum>)}
           
          
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>{track.time}</S.TrackTimeText>
            </div>
             
            </S.PlaylistTrack>
      </S.PlaylistItem>
          )
          );
          
          return <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>;
          
        }
     
      export default Tracks;