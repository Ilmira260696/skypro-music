import {
   SET_ALL_TRACKS, 
   SET_CURRENT_TRACK, 
   SET_ISPLAYING, 
   SET_NEXT_TRACK, 
   SET_PREV_TRACK, 
   TOGGLE_SHUFFLE_TRACKS} from "../types/track";


export const setAllTracks =(allTracks)=> ({
  type: SET_ALL_TRACKS,
  payload: {allTracks},
});


export const setCurrentTrack = (track, indexCurrentTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: {track, indexCurrentTrack,
   },
})

export const setIsPlaying = (isPlaying) =>({
  type:SET_ISPLAYING,
  payload: isPlaying,
})

export const setNextTrack =(nextTrack, indexNextTrack) => ({
  type: SET_NEXT_TRACK,
  payload:{nextTrack, indexNextTrack},
})

export const setPrevTrack =(prevTrack, indexPrevTrack) => ({
  type: SET_PREV_TRACK,
  payload:{prevTrack, indexPrevTrack},
})

export const toggleShuffleTrack = (shuffle) => ({
  type:TOGGLE_SHUFFLE_TRACKS,
  payload:{shuffle}
})