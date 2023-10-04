import React from "react";
import * as S from "./categoryStyle";
import { useParams } from "react-router-dom";
import { CategoryArr } from "../../utilits/Constans";

export const Category = () => {
  const params = useParams();
  const category = CategoryArr.find(
    (category) => category.id === Number(params.id)
  );
  return (
    <S.CategoryBlock>
      <h1>CategoryPage {category.id}</h1>
      {/* <img src={category.img} alt={category.alt} /> */}
    </S.CategoryBlock>
  );
};
