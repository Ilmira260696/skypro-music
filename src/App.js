import React from "react";
import { AppRoutes } from "./routes";
import "./index.css";
import { useState,  useEffect  } from "react";
import ArrTracks from "./ArrTracks/ArrTracks";
import { GetAllTracks } from "./Api";

function App() {
  const [currentTrack, setCurrentTrack] = useState (null);
  const [user, setUser] = useState(false);
  const [tracks, setArrTracks] = useState(ArrTracks);
  

  useEffect(() => {
    GetAllTracks().then((ArrTrack) => {
      console.log(ArrTrack);
      setArrTracks(ArrTrack);
    });
  }, []);




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
     tracks ={tracks}
     setArrTracks = {setArrTracks}
     currentTrack={currentTrack}
     />
           </div>
  )
 }
  export default App;

