import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./redusers/track";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});