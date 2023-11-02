import React from "react";
import * as S from "./TrackListStyle";
import {useSelector } from "react-redux";
import { isPlayingSelector} from "../../store/selectors/track";
import {CurrentTrackSelector} from "../../store/selectors/track";


function Tracks({ loading, handleCurrentTrack, tracks }) {
  // const tracks = useSelector(allTracksSelector);
  const currentTrack = useSelector (CurrentTrackSelector);
  const isPlaying = useSelector (isPlayingSelector);
  const trackItems = tracks.map((track) => (
    <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
          {currentTrack && currentTrack.id === track.id ? (
              <S.PointPlaying $playing={isPlaying} />
            ) : (
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
            )}
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
          <S.TrackTimeText>
            {Math.floor(track.duration_in_seconds / 60) +
              ":" +
              (track.duration_in_seconds % 60 < 10
                ? (track.duration_in_seconds % 60) + "0"
                : track.duration_in_seconds % 60) ||
              (track.duration_in_seconds % 60 === 0
                ? "00"
                : track.duration_in_seconds % 60)}
          </S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>;
}

export default Tracks;
