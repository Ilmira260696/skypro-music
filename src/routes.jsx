import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/main/mainPage";
import { Favorites } from "./Pages/favorites/favorites";
import { Category } from "./Pages/category/category";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Login } from "./Pages/login/login";
import { Registration } from "./Pages/registration/registration";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

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
