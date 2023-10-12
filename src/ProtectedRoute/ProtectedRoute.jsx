import React from "react";
import { Navigate, Outlet } from "react-router-dom";

 export function ProtectedRoute ({ redirectPath = "/Auth", isAllowed, currentTrack }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace  currentTrack={currentTrack} />;
  }

  return <Outlet />
};
