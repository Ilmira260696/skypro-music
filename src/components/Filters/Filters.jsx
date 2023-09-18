import React from "react";
import { useState } from "react";
import "./Filters.css"
import ArrTracks from "../../ArrTracks/ArrTracks"
import {TracksFilterCategory} from "../TracksFilterCategory/TrackFilterCategory";



function Filters() {
 const [CategoryFilter, setCategoryFilter] = useState("");
  return (
    <div className="centerBlock__filter filter">
      <div className="filter__title">Искать по:</div>
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
  </div>
);
}
export default Filters;
