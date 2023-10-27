import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/track";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});