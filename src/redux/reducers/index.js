import { combineReducers } from "redux";
import { animeReducer } from "./animeReducer";

const reducers = combineReducers({
  allAnime: animeReducer,
});

export default reducers;
