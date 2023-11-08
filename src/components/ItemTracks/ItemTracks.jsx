import React from "react";
import *as S  from "./ItemTracksStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {currentTrackSelector,  isPlayingSelector } from "../../store/selectors/track";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import {useSetLikeMutation, useSetDisLikeMutation} from "../../serviseQuery/tracks";

export function ItemTracks ({track, loading,  isFavorites=false}) {
    const currentTrack = useSelector (currentTrackSelector);
    const isPlaying = useSelector (isPlayingSelector);
    const setLike = useSetLikeMutation();
    const setDisLike = useSetDisLikeMutation();
    const auth = JSON.parse(localStorage.getItem("user"));
    const isUserLike = Boolean (track?.stared_user?.find((user)=>user.id===auth.id));
    const[isLiked, setIsLiked] =useState(isUserLike);

    useEffect(()=>{
        if(isFavorites){
            setIsLiked(isFavorites)
        } else {
            setIsLiked(isUserLike)
        }
    },[isUserLike,isFavorites ]);

    const handleLike = async(id)=>{
        setIsLiked(true);
        await setLike({id}).unwrap();
    };

    const handleDisLike = async(id)=> {
        setIsLiked(false);
        await setDisLike({id}).unwrap();
    };

   const toggleLikeDisLike =(id)=> isLiked? handleLike(id):handleDisLike(id);

    return (
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

         <div className="track__time">
           <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </S.TrackTimeSvg>
           <S.TrackTimeText>
            <AudioPlayerIcons
             alt="like"
             click={() => {
                toggleLikeDisLike(track?.id);
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
        </div>
      </S.PlaylistTrack>
    )
    
}
