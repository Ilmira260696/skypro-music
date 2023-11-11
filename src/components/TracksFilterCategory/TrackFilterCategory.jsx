import React from "react";
import *as S  from "./TracksFilterCategoryStyle"

  export function TracksFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
}) {
  const InstallСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  return (
   <S.FilterCategoryName>
      <S.FilterButton
        type="button"
        onClick={InstallСategoryFilter}
        className={
          isActiveCategory === nameCategory
            ? <S.FilterButtonActive></S.FilterButtonActive>
            : <S.FilterButtonText></S.FilterButtonText>
        }
      >
        {nameCategory}
      </S.FilterButton>
      {isActiveCategory === nameCategory && (
       <S.FilterCategoryMenu>
          <S.FilterList>{content}</S.FilterList>
          </S.FilterCategoryMenu>
      )}
    </S.FilterCategoryName>
  );
}