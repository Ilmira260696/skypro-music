import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/mainPage";
import { Favorites } from "./Pages/Favorites/favorites";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Login } from "./Pages/Login/login";
import { Registration } from "./Pages/Registration/registration";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Category } from "./Pages/Category/category";

export function AppRoutes({ user, onAuthButtonClick }) {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
