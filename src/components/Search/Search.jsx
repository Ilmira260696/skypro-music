import React from "react";
import * as S from "./SearchStyle";
import { useDispatch } from "react-redux";
import { setFilterPlaylist } from "../../store/slices/track";

function Seach() {
  const dispatch = useDispatch();
  return (
    <S.CenterBlockSeach>
      <S.SearchSvg>
        <use xlinkHref="public/img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          dispatch(
            setFilterPlaylist({
              search: e.target.value,
            })
          );
        }}
      />
    </S.CenterBlockSeach>
  );
}
export default Seach;
