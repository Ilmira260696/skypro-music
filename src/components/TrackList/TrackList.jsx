import React, { useEffect, useState } from "react";
import * as S from "./TrackListStyle";
import { GetAllTracks } from "../../Api";
import ArrTracks from "../../ArrTracks/ArrTracks";


function Tracks({ loading, tracks,setCurrentTrack}) {

  const handleCurrentTrack= (track)=> setCurrentTrack(track);
  
  const trackItems = tracks.map((track) => (
    <S.PlaylistItem  onClick={()=>handleCurrentTrack(track)} key={track.id}>
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
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}

        {loading ? (
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
        ) : (
          <S.SkeletonAlbum> </S.SkeletonAlbum>
        )}

        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{track.release_date}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));
  return <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>;

}

export default Tracks;
