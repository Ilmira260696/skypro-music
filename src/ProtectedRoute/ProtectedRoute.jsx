import React from "react";
import { Navigate, Outlet } from "react-router-dom";

 export function ProtectedRoute ({ redirectPath = "/login", isAllowed, currentTrack }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace  currentTrack={currentTrack} />;
  }

  return <Outlet />
};
