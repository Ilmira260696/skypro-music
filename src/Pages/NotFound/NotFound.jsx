import React from "react";
import * as S from "./NotFoundStyle";

import { useState, useEffect } from "react";
import { Error } from "../../components/Error/Error";

export function NotFound() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <S.wrapper>
      <S.container>
        <Error></Error>
      </S.container>
      <footer className="footer"></footer>
    </S.wrapper>
  );
}
