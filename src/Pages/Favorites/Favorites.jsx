import React from "react";
// import * as S from "./FavoritiesStyle";
// import TrackListTitle from "../../components/TrackListTitle/TrackListTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useGetFavoritesAllTracksQuery} from "../../serviseQuery/tracks";
import {setCurrentPage} from "../../store/slices/track";
import { favoritesTracksSelector } from "../../store/selectors/track";
import TrackList from "../../components/TrackList/TrackList";
import setFavoritesTracksAll from "../../store/slices/track";


 export function Favorites () {
    const dispatch = useDispatch();
    const {data, error, loading} =useGetFavoritesAllTracksQuery;
    const favoritesTracks = useSelector(favoritesTracksSelector);

    useEffect(()=> {
        if(data) {
            dispatch( setFavoritesTracksAll(data));
            dispatch(setCurrentPage("Favorites"));
        }   
    },[data])
    return (
        <>
   <TrackList>
   title = "Мои Треки"
   tracks={favoritesTracks}
   error={error}
   loading ={loading}
   isFavorites
   </TrackList>
   {loading && <div>Подождите, идёт загрузка</div>}
   {error && <div> {error} </div>}
        </>
    )
   
 }