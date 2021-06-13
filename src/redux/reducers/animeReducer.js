import { ActionTypes } from "../contants/action-types";

const initialState = {
  animes: {},
  animeName: "",
  animeDetailName: "",
  idAnime: null,
  anime: {},
};

export const animeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ANIME:
      return { ...state, anime: payload };
    case ActionTypes.FETCH_ANIME:
      return { ...state, animes: payload };
    case ActionTypes.ANIME_NAME:
      return { ...state, animeName: payload };
    case ActionTypes.ANIME_DETAIL_NAME:
      return { ...state, animeDetailName: payload };
    case ActionTypes.ID_ANIME:
      return { ...state, idAnime: payload };
    case ActionTypes.SELECTED_ANIME:
      return { ...state, anime: payload };
    // case ActionTypes.REMOVE_SELECTED_ANIME:
    //   return { ...state, animes: {} };
    default:
      return state;
  }
};

// const initialStates = {};

// export const selectedAnimeReducer = (
//   state = initialStates,
//   { type, payload }
// ) => {
//   switch (type) {
//     case ActionTypes.SELECTED_ANIME:
//       return { ...state, anime: payload };
//     case ActionTypes.REMOVE_SELECTED_ANIME:
//       return {};
//     default:
//       return state;
//   }
// };
