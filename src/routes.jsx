import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/MainPage";
import { Favorites } from "./Pages/Favorites/Favorites";
import { NotFound } from "./Pages/NotFound/NotFound";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Category } from "./Pages/Category/Category";
import AuthPage from "./Pages/Auth/Auth";

export function AppRoutes({ user,setUser, isLoginMode }) {
  return (
    <Routes>
      
     
      <Route
        path= "/Login" element= {<AuthPage isLoginMode={true} setUser = {setUser} />}
      />
        <Route path= "/Registration" element= {<AuthPage isLoginMode={false} setUser = {setUser}  />}
      />
      {/* <Route
        path="/Login"
        element={<Login onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path="/Registration" element={<Registration />} /> */}
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main setUser = {setUser}  />} />
        <Route path="/Category/:id" element={<Category />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
