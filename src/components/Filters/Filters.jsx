import React from "react";
import uniq from "lodash/uniq";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./FiltersStyle";
import { TracksFilterCategory } from "../TracksFilterCategory/TrackFilterCategory";
import { setFilterPlaylist } from "../../store/slices/track";
import { filtersPlaylistSelector } from "../../store/selectors/track";

function Filters({ selectedArrListFilter, currentPage }) {
  const dispatch = useDispatch();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  const selectedFiltersPlaylist = useSelector(filtersPlaylistSelector);

  useEffect(() => {
    console.log("author filter: ", selectedFiltersPlaylist?.authors);
  }, [selectedFiltersPlaylist?.authors]);

  useEffect(() => {
    console.log("genres filter: ", selectedFiltersPlaylist?.genres);
  }, [selectedFiltersPlaylist?.genres]);

  return (
    <S.CenterBlockFilter>
      <S.filterDiv>
        <S.filterTitle>Искать по:</S.filterTitle>
        <TracksFilterCategory
          nameCategory="исполнителю"
          numberSelectedValues={selectedFiltersPlaylist?.authors.length}
          content={uniq(
            selectedArrListFilter?.map((track) => track?.author)
          ).map((author) => (
            <S.FilterItem
              key={author}
              onClick={() => {
                dispatch(setFilterPlaylist({ authors: author }));
              }}
              $isSelected={selectedFiltersPlaylist?.authors.includes(author)}
            >
              {author}
            </S.FilterItem>
          ))}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
        />
        {currentPage !== "Category" && (
          <TracksFilterCategory
            nameCategory="жанру"
            isActiveCategory={activeCategoryFilter}
            setActiveCategory={setActiveCategoryFilter}
            numberSelectedValues={selectedFiltersPlaylist?.genres.length}
            content={uniq(
              selectedArrListFilter?.map((track) => track.genre)
            ).map((genre) => (
              <S.FilterItem
                key={genre}
                onClick={() => {
                  dispatch(setFilterPlaylist({ genres: genre }));
                }}
                $isSelected={selectedFiltersPlaylist?.genres.includes(genre)}
              >
                {genre}
              </S.FilterItem>
            ))}
          />
        )}
      </S.filterDiv>
      <S.filterDiv>
        <S.filterTitle>Сортировка:</S.filterTitle>
        <TracksFilterCategory
          nameCategory={selectedFiltersPlaylist?.sort}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
          numberSelectedValues={
            selectedFiltersPlaylist?.sort === "По умолчанию" ? 0 : 1
          }
          content={["По умолчанию", "Сначала новые", "Сначала старые"].map(
            (item) => (
              <S.FilterItem
                key={item}
                onClick={() => {
                  dispatch(setFilterPlaylist({ sort: item }));
                }}
                $isSelected={selectedFiltersPlaylist?.sort.includes(item)}
              >
                {item}
              </S.FilterItem>
            )
          )}
        />
      </S.filterDiv>
    </S.CenterBlockFilter>
  );
}
export default Filters;
