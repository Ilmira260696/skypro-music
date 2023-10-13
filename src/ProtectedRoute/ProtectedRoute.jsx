import React from "react";
import { Navigate, Outlet } from "react-router-dom";

 export function ProtectedRoute ({ redirectPath = "/Login", isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace   />;
  }

  return <Outlet />
};
