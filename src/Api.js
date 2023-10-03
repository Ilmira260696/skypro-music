import React from "react";

export async function GetAllTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  const tracks = await response.json();
  return tracks;
}


export async function GetTrackId (trackId) {
  const response = await fetch (
    "https:skypro-music-api.skyeng.tech/catalog/track/${trackId}"
  );
  const track = await response.json();
  return track;
}