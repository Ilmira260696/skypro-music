import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentPage: "",
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffled: false,
  shuffledAllTracks: [],
  favouritesTracks: [],
  currentPlaylist: [],
};

const getShuffledAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

export const trackSlice = createSlice({
  name: "tracksReducer",
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    setFavouriteTracksAll: (state, action) => {
      state.favouritesTracks = action.payload;
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },

    setCurrentTrack: (state, action) => {
      const { track, indexCurrentTrack } = action.payload;
      state.currentTrack = track;
      state.indexCurrentTrack = indexCurrentTrack;
    },

    setNextTrack: (state, action) => {
      const { trackNext, indexNextTrack } = action.payload;
      state.currentTrack = trackNext;
      state.indexCurrentTrack = indexNextTrack;
    },

    setPrevTrack: (state, action) => {
      const { trackPred, indexPredTrack } = action.payload;
      state.currentTrack = trackPred;
      state.indexCurrentTrack = indexPredTrack;
    },

    toggleShuffleTracks: (state, action) => {
      state.shuffled = action.payload;

      if (state.shuffled) {
      }
      state.shuffledAllTracks =
        state.shuffled && getShuffledAllTracks(state.currentPlaylist);
    },
  },
});

export const {
  setAllTracks,
  setTracksRedux,
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  toggleShuffleTracks,
  setFavouriteTracksAll,
  setCurrentPage,
  setCurrentPlaylist,
} = trackSlice.actions;

export default trackSlice.reducer;