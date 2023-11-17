import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./Pages/Main/MainPage";
import { Favorites } from "./Pages/Favorites/Favorites";
import { NotFound } from "./Pages/NotFound/NotFound";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Category } from "./Pages/Category/Category";
import { AuthPage } from "./Pages/Auth/Auth";
import { Layout } from "./components/Layout";

export function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/Auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main setUser={setUser} />} />
          <Route path="/Category/:id" element={<Category />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
