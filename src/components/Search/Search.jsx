import React from "react";
import *as S  from "./SearchStyle";
import { useDispatch, useSelector } from "react-redux";
import {filtersPlaylistSelector} from '../../store/selectors/track';
import {setFilterPlaylist} from '../../store/slices/track';

function Seach() {
  const dispatch = useDispatch();
  const filtersPlaylist = useSelector(filtersPlaylistSelector);
    return(
      <S.CenterBlockSeach>
        <S.SearchSvg>
            <use xlinkHref="public/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
         <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
            value={filtersPlaylist.search}
            onChange={(e) => {
              dispatch(
                setFilterPlaylist({
                  search: e.target.value,
                })
              );
            }}
          />
       </S.CenterBlockSeach>
    )  
}
export default Seach;