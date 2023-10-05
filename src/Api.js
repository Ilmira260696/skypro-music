import React from "react";

export async function GetAllTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const tracks = await response.json();
  return tracks;
}


// export async function GetTrackId (trackId) {
//   const response = await fetch (
//     "https:skypro-music-api.skyeng.tech/catalog/track/${trackId}"
//   );
//   if (!response.ok) {
//     throw new Error("Ошибка сервера");
//   }
//   const track = await response.json();
//   return track;
// }