import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { animeReducer, selectedAnimeReducer } from "./animeReducer";

const persistConfig = {
  key: "root",
  storage,
  version: 0,
  whitelist: ["allAnime"],
};

const reducers = combineReducers({
  allAnime: animeReducer,
  // animes: selectedAnimeReducer,
});

export default persistReducer(persistConfig, reducers);
