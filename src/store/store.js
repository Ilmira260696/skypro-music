import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/track";
// import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
  // middleware: [thunk],
});