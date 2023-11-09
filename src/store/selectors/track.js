
export const allTracksSelector = (store) => store.tracks.allTracks;
export const currentTrackSelector = (store)=> store.tracks.currentTrack;
export const isPlayingSelector = (store) => store.tracks.isPlaying;
export const indexCurrentTrackSelector = (store) => store.tracks.indexCurrentTrack;
export const shuffleAllTracksSelector = (store)=> store.tracks.shuffleAllTracks;
export const shuffleSelector = (store)=> store.tracks.shuffle;
export const favoritesTracksSelector = (store) => store.tracks.favoritesTracks;
export const currentPageSelector = (store)=> store.tracks.currentPage;
export const tokenSelector = (store) =>store.tracks.accessToken;
export const currentPlaylistSelector = (store) => store.tracks.currentPlaylist;