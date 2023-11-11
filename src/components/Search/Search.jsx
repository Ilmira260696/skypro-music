import React from "react";
import *as S  from "./SearchStyle"

function Seach() {
    return(
      <S.CenterBlockSeach>
        <S.SearchSvg>
            <use xlinkHref="public/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
         <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
       </S.CenterBlockSeach>
    )  
}
export default Seach;