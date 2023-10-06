export async function GetAllTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
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