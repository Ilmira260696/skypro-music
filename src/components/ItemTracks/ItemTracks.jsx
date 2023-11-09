import React from "react";
import *as S  from "./ItemTracksStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {currentTrackSelector,  isPlayingSelector } from "../../store/selectors/track";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import {useSetLikeMutation, useSetDislikeMutation } from "../../serviseQuery/tracks";

export function ItemTracks ({track, loading,  isFavorites = false}) {
    const currentTrack = useSelector (currentTrackSelector);
    const isPlaying = useSelector (isPlayingSelector);
    const [setLike] = useSetLikeMutation();
    const [setDislike] = useSetDislikeMutation();
    const auth = JSON.parse(localStorage.getItem("user"));
    const isUserLike = Boolean(
      track?.stared_user?.find((user) => user.id === auth.id)
    );
    const[isLiked, setIsLiked] =useState(isUserLike);

    useEffect(()=>{
        if(isFavorites){
            setIsLiked(isFavorites)
        } else {
            setIsLiked(isUserLike)
        }
    },[isUserLike,isFavorites ]);

    const handleLike = async(id)=> {
        setIsLiked(true);
        await setLike({id}).unwrap();
    };

    const handleDislike = async(id)=> {
        setIsLiked(false);
        await setDislike({id}).unwrap();
    };

   const toggleLikeDislike =(id) => isLiked? handleLike(id):handleDislike(id);

    return (
        <S.PlaylistTrack>
       <S.TrackTitle>
       <S.TrackTitleImg>
      {currentTrack && currentTrack.id === track?.id ? (
               <S.PointPlaying $playing={isPlaying} />
            ) : (
            <S.TrackTitleSvg alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
            )}
          </S.TrackTitleImg>
          {!loading ? (
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
        {!loading ? (
           <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
         <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}
         {!loading ? (
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
         ) : (
          <S.SkeletonAlbum> </S.SkeletonAlbum>
         )}
         {!loading && (
          <S.TrackTimeText>
            <AudioPlayerIcons
             alt="like"
             click={() => {
                toggleLikeDislike(track?.id);
             }}
            isActive={isLiked}
            />
             {Math.floor(track.duration_in_seconds / 60) +
               ":" +
               (track.duration_in_seconds % 60 < 10
                 ? (track.duration_in_seconds % 60) + "0"
               : track.duration_in_seconds % 60) ||
               (track.duration_in_seconds % 60 === 0
                ? "00"
                : track.duration_in_seconds % 60)}
          </S.TrackTimeText>
         )}
      </S.PlaylistTrack>
    )  
}


         
         
           