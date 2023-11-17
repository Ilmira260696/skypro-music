import React from "react";
import * as S from "./ErrorStyle";
import { NavLink } from "react-router-dom";

export function Error() {
  return (
    <S.NotFoundBlock>
      <S.Problem>
        <S.ProblemDis>Страница не найдена</S.ProblemDis>
      </S.Problem>
      <S.GoToMainButton>
        <NavLink to={`/`}>Вернуться на главную</NavLink>
      </S.GoToMainButton>
    </S.NotFoundBlock>
  );
}
