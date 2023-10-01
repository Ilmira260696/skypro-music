import React from "react";
import { AppRoutes } from "./routes";
import "./index.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const handleLogin = () => {
    localStorage.setItem('user', 'true');
    const curentLocalStorage = localStorage.getItem('user');
    console.log(curentLocalStorage);
    setUser(curentLocalStorage);
  }
  return (
    <div className="App">
     <AppRoutes
     user={user}
     onAuthButtonClick={handleLogin}
     />
           </div>
  )
 }
  export default App;

