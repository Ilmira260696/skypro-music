import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/track";
import authReducers from "./slices/AuthorizationSlice";
import { tracksQuery } from "../serviseQuery/tracks";
import { tokenQuery } from "../serviseQuery/token";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    auth: authReducers,
    [tracksQuery.reducerPath]: tracksQuery.reducer,
    [tokenQuery.reducerPath]: tokenQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tracksQuery.middleware)
      .concat(tokenQuery.middleware),
});
