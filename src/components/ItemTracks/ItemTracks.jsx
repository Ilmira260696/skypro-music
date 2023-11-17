import React from "react";
import * as S from "./ItemTracksStyle";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  currentTrackSelector,
  isPlayingSelector,
} from "../../store/selectors/track";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from "../../serviseQuery/tracks";

export function ItemTracks({ track, isLoading }) {
  const currentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();
  const auth = JSON.parse(localStorage.getItem("user"));
  const isUserLike = Boolean(
    track?.stared_user?.find((user) => user.id === auth.id)
  );
  const [isLiked, setIsLiked] = useState(isUserLike);

  useEffect(() => {
    if (track?.stared_user) {
      setIsLiked(isUserLike);
    } else {
      setIsLiked(true);
    }
  }, [isUserLike, track?.stared_user]);

  const handleLike = async (id) => {
    setIsLiked(true);
    await setLike({ id }).unwrap();
  };

  const handleDislike = async (id) => {
    setIsLiked(false);
    await setDislike({ id }).unwrap();
  };

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id);

  return (
    <S.PlaylistTrack>
      <S.trackTitle>
        <S.trackTitleImage>
          {currentTrack && currentTrack.id === track?.id ? (
            <S.PointPlaying $playing={isPlaying} />
          ) : (
            <S.trackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.trackTitleSvg>
          )}
        </S.trackTitleImage>

        {!isLoading ? (
          <div className="track__title-text">
            <S.trackTitleLink href="http://">
              {track.name}
              {track.remix ? (
                <S.trackTitleSpan>({track.remix})</S.trackTitleSpan>
              ) : (
                ""
              )}
            </S.trackTitleLink>
          </div>
        ) : (
          <S.Skeleton />
        )}
      </S.trackTitle>

      {!isLoading ? (
        <S.trackAuthor>
          <S.trackAuthorLink href="http://">{track.author}</S.trackAuthorLink>
        </S.trackAuthor>
      ) : (
        <S.Skeleton />
      )}

      {!isLoading ? (
        <S.trackAlbum>
          <S.trackAlbumLink href="http://">{track.album}</S.trackAlbumLink>
        </S.trackAlbum>
      ) : (
        <S.skeletonAlbum />
      )}
      {!isLoading && (
        <S.trackTime>
          <AudioPlayerIcons
            alt="like"
            click={() => {
              toggleLikeDislike(track?.id);
            }}
            isActive={isLiked}
          />

          <S.trackTimeText>
            {" "}
            {Math.floor(track.duration_in_seconds / 60) +
              ":" +
              (track.duration_in_seconds % 60 < 10
                ? (track.duration_in_seconds % 60) + "0"
                : track.duration_in_seconds % 60) ||
              (track.duration_in_seconds % 60 === 0
                ? "00"
                : track.duration_in_seconds % 60)}
          </S.trackTimeText>
        </S.trackTime>
      )}
    </S.PlaylistTrack>
  );
}
