
import {
  SET_ALL_TRACKS, 
  SET_CURRENT_TRACK, 
  SET_ISPLAYING, 
  SET_NEXT_TRACK, 
  SET_PREV_TRACK,
  TOGGLE_SHUFFLE_TRACKS} from "../actions/types/track";

const initialState = {
    allTracks: [],
    currentTrack:null,
    indexCurrentTrack: null,
    isPlaying: false,
    shuffle: false,
    shuffleAllTracks: [],
  };

  const getShuffleAllTracks = (array) => {
    const arrayTracks = new Array(...array);
    return arrayTracks.sort(() => Math.random() - 0.5);
  };


  export default function tracksReducer(state = initialState, action) {
    switch (action.type) {
      case SET_ALL_TRACKS: {
        const {allTracks} = action.payload;
        return {
          ...state,
          allTracks,
        };
      }
      case SET_ISPLAYING: {
        const isPlaying= action.payload;
        return {
          ...state,
          isPlaying,
        }
      }
      case SET_CURRENT_TRACK: {
        const {track, indexCurrentTrack } = action.payload;
        return {
          ...state,
          currentTrack: track,
          indexCurrentTrack,
        };
      }
      case SET_NEXT_TRACK: {
        const {indexNextTrack,nextTrack} = action.payload;
      return {
        ...state,
        currentTrack: nextTrack,
        indexCurrentTrack: indexNextTrack,
      };
    }
    case SET_PREV_TRACK: {
      const {indexPrevTrack,prevTrack} = action.payload;
    return {
      ...state,
      currentTrack: prevTrack,
      indexCurrentTrack: indexPrevTrack,
    };
  }

  case TOGGLE_SHUFFLE_TRACKS:{
    const {shuffle} = action.payload;
  return {
    ...state,
    shuffle,
    shuffleAllTracks:shuffle && getShuffleAllTracks(state.allTracks)
  };
}
      default:
        return state;
    }
  }
  

  


   
   