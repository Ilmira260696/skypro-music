import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/MainPage";
// import {Login} from "./Pages/Login";
// import {Collections} from "./Pages/Collections";
// import {MyTracks} from "./Pages/MyTracks";
// import {Registration} from "./Pages/Registration";
import {NotFound} from "./Pages/NotFound/NotFound";



export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/MyTracks" element={<MyTracks />} />
        <Route path="/Registration" element={<Registration />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );
  };