import React from "react";
import * as S from "./TracksFilterCategoryStyle";
import { useEffect } from "react";

export function TracksFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
  numberSelectedValues,
}) {
  const InstallСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  useEffect(() => {
    console.log("numberSelectedValues", numberSelectedValues);
  }, [numberSelectedValues]);

  return (
    <S.FilterCategoryName>
      <S.FilterButton
        type="button"
        onClick={InstallСategoryFilter}
        className={
          isActiveCategory === nameCategory
        }
      >
        {nameCategory}
      </S.FilterButton>
      {numberSelectedValues > 0 && (
        <S.selectedFilterCount>{numberSelectedValues}</S.selectedFilterCount>
      )}

      {isActiveCategory === nameCategory && (
        <S.FilterCategoryMenu>
          <S.FilterList>{content}</S.FilterList>
        </S.FilterCategoryMenu>
      )}
    </S.FilterCategoryName>
  );
}
