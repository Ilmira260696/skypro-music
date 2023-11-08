import React from "react";
import * as S from "./TrackListStyle";
import { useDispatch, useSelector } from "react-redux";
import {currentTrackSelector} from "../../store/selectors/track";
import { isPlayingSelector } from "../../store/selectors/track";
import Filters from "../../components/Filters/Filters";
import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";

import { shuffleSelector,
  currentPlaylistSelector, 
  shuffleAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favoritesTracksSelector } from "../../store/selectors/track";

  import { setCurrentTrack, setPlayList,toggleShuffleTrack

  } from "../../store/slices/track";
  import { ItemTracks } from "../ItemTracks/ItemTracks";

function TrackList({ loading, title,loadingTracksError, isFavorites, tracks }) {
  const dispatch = useDispatch();
  const shuffle = useSelector (shuffleSelector);
  const allTracks = useSelector(allTracksSelector);
  const currentTrack = useSelector (currentTrackSelector);
  const  favoritesTracks = useSelector(favoritesTracksSelector );
  const currentPlaylist = useSelector(currentPlaylistSelector);
  const isPlaying = useSelector (isPlayingSelector);
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector);
  const currentPage = useSelector (currentPageSelector);
   const  arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist;

  const handleCurrentTrack = (track) => {
    if(currentPage==="Main") {
      dispatch(setPlayList(allTracks))
    }
    if (currentPage==="Favorites") {
      dispatch(setCurrentTrack(favoritesTracks ))
    }

    if (shuffle) {
      dispatch (toggleShuffleTrack({shuffle}));
    }
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({indexCurrentTrack, track}))
  };
return (
  <>
  {/* <S.CenterBlock> */}
  {title || "Треки"}
  {/* </S.CenterBlock> */}
  <Filters />
  <TrackListTitle  />
  {loadingTracksError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <S.ContentPlaylist>
            {loading &&
            new Array(20).fill().map(()=>(
              <ItemTracks key={Math.random()} loading={loading}/>
            ))}
       
            {tracks &&
            tracks.map((track)=>(
              <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
                <ItemTracks key={track.id} onClick={() => handleCurrentTrack(track)}
                loading={loading}
                track={track}
                tracks={tracks}
                isFavorites = {isFavorites}
                />
  </S.PlaylistItem>
            ))}

          </S.ContentPlaylist>
        )}
  </>
)

//   const trackItems = tracks.map((track) => (
//     <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
//       <S.PlaylistTrack>
//         <S.TrackTitle>
//           <S.TrackTitleImg>
//           {currentTrack && currentTrack.id === track.id ? (
//               <S.PointPlaying $playing={isPlaying} />
//             ) : (
//             <S.TrackTitleSvg alt="music">
//               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
//             </S.TrackTitleSvg>
//             )}
//           </S.TrackTitleImg>
//           {loading ? (
//             <div className="track__title-text">
//               <S.TrackListTitleLink href="http://">
//                 {track.name}
//                 {track.remix ? (
//                   <S.TrackTitleSpan>({track.remix})</S.TrackTitleSpan>
//                 ) : (
//                   ""
//                 )}
//               </S.TrackListTitleLink>
//             </div>
//           ) : (
//             <S.Skeleton> </S.Skeleton>
//           )}
//         </S.TrackTitle>
//         {loading ? (
//           <S.TrackAuthor>
//             <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
//           </S.TrackAuthor>
//         ) : (
//           <S.SkeletonAuthor> </S.SkeletonAuthor>
//         )}
//         {loading ? (
//           <S.TrackAlbum>
//             <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
//           </S.TrackAlbum>
//         ) : (
//           <S.SkeletonAlbum> </S.SkeletonAlbum>
//         )}

//         <div className="track__time">
//           <S.TrackTimeSvg alt="time">
//             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
//           </S.TrackTimeSvg>
//           <S.TrackTimeText>
//             {Math.floor(track.duration_in_seconds / 60) +
//               ":" +
//               (track.duration_in_seconds % 60 < 10
//                 ? (track.duration_in_seconds % 60) + "0"
//                 : track.duration_in_seconds % 60) ||
//               (track.duration_in_seconds % 60 === 0
//                 ? "00"
//                 : track.duration_in_seconds % 60)}
//           </S.TrackTimeText>
//         </div>
//       </S.PlaylistTrack>
//      </S.PlaylistItem>
//   ));

//   return <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>;
}

export default TrackList;
