import React from "react";
// import * as S from "./FavoritiesStyle";
// import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllFavoritesTrackQuery} from "../../serviseQuery/tracks";
import {setCurrentPage} from "../../store/slices/track";
import { favoritesTracksSelector } from "../../store/selectors/track";
import TrackList from "../../components/TrackList/TrackList";
import { setFavouritesTracks } from "../../store/slices/track";


 export function Favorites () {
    const dispatch = useDispatch();
    const {data, loadingTracksError, loading} =getAllFavoritesTrackQuery;
    const favoritesTracks = useSelector(favoritesTracksSelector);

    useEffect(()=> {
        if(data){
            dispatch(setFavouritesTracks(data));
            dispatch(setCurrentPage(Favorites));
        }
        
    },[data])
    return (
        <>
   <TrackList>
   title = "Мои Треки"
   tracks={favoritesTracks}
   loadingTracksError={loadingTracksError}
   loading ={loading}
   isFavorites
   </TrackList>
   {loading && <div>Подождите, идёт загрузка</div>}
   {loadingTracksError && <div> {loadingTracksError} </div>}
        </>
    )
   
 }