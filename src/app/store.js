import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import animeReducer from "../features/animeSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    animes: animeReducer,
  },
});
