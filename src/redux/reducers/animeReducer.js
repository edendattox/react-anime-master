import { ActionTypes } from "../contants/action-types";

const initialState = {
  animeName: "",
};

export const animeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ANIME_NAME:
      return { ...state, animeName: payload };
    default:
      return state;
  }
};
