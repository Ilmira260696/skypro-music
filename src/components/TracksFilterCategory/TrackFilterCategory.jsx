import React from "react";
import "./TracksFilterCategory.css"

  export function TracksFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
}) {
  const InstallСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  return (
    <div className="filter__category-name">
      <button
        type="button"
        onClick={InstallСategoryFilter}
        className={
          isActiveCategory === nameCategory
            ? "filter__button btn_active"
            : "filter__button _btn-text"
        }
      >
        {nameCategory}
      </button>
      {isActiveCategory === nameCategory && (
        <div className="filter__category-menu">
          <ul className="filter__list">{content}</ul>
        </div>
      )}
    </div>
  );
}
