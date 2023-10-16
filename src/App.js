import React from "react";
import { AppRoutes } from "./routes";
import "./index.css";
import { useState} from "react";
import {UserContext} from "./Context/UserContext";


function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user") || null
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/Auth";
  };
  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      <AppRoutes user={user} setUser={setUser} />
    </UserContext.Provider>
  );
}
export default App;