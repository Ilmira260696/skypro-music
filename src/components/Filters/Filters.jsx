import React from "react";
import { useState } from "react";
import *as S  from "./FiltersStyle"
import ArrTracks from "../../ArrTracks/ArrTracks"
import {TracksFilterCategory} from "../TracksFilterCategory/TrackFilterCategory";



function Filters() {
 const [CategoryFilter, setCategoryFilter] = useState("");
  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
  <TracksFilterCategory 
      nameCategory="исполнителю"
      content = {ArrTracks.map((track) =>(
          <li key={track.id} className="filter__item">
          {track.trackAuthor}
        </li>
      ))}
      isActiveCategory={CategoryFilter}
      setActiveCategory={setCategoryFilter}
      />
      <TracksFilterCategory 
      nameCategory="год выпуска"
      isActiveCategory={CategoryFilter}
      setActiveCategory={setCategoryFilter}
      content = {ArrTracks.map((track) =>(
      <li key={track.id} className="filter__item">
         {track.year}
        </li>
      ))}
      />
       <TracksFilterCategory 
       nameCategory="жанру"
       isActiveCategory={CategoryFilter}
      setActiveCategory={setCategoryFilter}
      content={ArrTracks.map((track) => (
        <li key={track.id} className="filter__item">
          {track.genre}
        </li>
      ))}
    />
 </S.CenterBlockFilter>
);
}
export default Filters;
