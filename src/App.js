import React from "react";
import { AppRoutes } from "./routes";
import "./index.css";
import { useState, useEffect } from "react";
import UserContext from "./Context/UserContext";


function App() {
  const [user, setUser] = useState(window.localStorage.getItem("user") || null,
  
  )
 
  const [isLoginMode, setIsLoginMode] = useState(false);

  // useEffect(() => {
  //   const currentIsLoginMode = localStorage.getItem('isLoginMode');
  //   console.log(currentIsLoginMode);
  //   setIsLoginMode(currentIsLoginMode  || false);
  //   console.log(isLoginMode)
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   const curentLocalStorage = localStorage.getItem('user');
  //   console.log(curentLocalStorage)
  //   setUser(curentLocalStorage);
  // }
  return (
    <>
    
      <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes
        user={user}
        setUser={setUser}
        isLoginMode={isLoginMode}
      />
      </UserContext.Provider>
    </>
  )
}

export default App
