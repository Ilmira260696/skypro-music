import React from "react";
import { AppRoutes } from "./routes";
import "./index.css";
import { useState, useEffect} from "react";


function App({handleLogin}) {
 
  const [user, setUser] =  useState(localStorage.getItem('') || null,
  
  )
  const [isLoginMode, setIsLoginMode] = useState(false);
  // const handleLogin = () => {
  //   localStorage.setItem('user', 'true');
  //   const curentLocalStorage = localStorage.getItem('user');
  //   setUser(curentLocalStorage);
  // }
  useEffect(()=>{
    const curentIsLoginMode = localStorage.getItem ('IsLoginMode');
    setIsLoginMode ( curentIsLoginMode || false);
  }, []);
  return (
    <div className="App">
     <AppRoutes
     user={user} 
     setUser = {setUser}
     isLoginMode = {isLoginMode}
     onAuthButtonClick={handleLogin}
     />
    </div>
  )
 }
  export default App;