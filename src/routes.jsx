import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/MainPage";
import { Favorites } from "./Pages/Favorites/Favorites";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Login } from "./Pages/Login/Login";
import { Registration } from "./Pages/Registration/Registration";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Category } from "./Pages/Category/Category";

export function AppRoutes({ user, onAuthButtonClick }) {
  return (
    <Routes>
      <Route
        path="/Login"
        element={<Login onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path="/Registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/Category/:id" element={<Category />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
