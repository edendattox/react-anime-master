import axios from "axios";
import { ActionTypes } from "../contants/action-types";

export function fetchAnime(query) {
  return async (dispatch) => {
    let response;
    try {
      response = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=${20}&page=${1}`
      );
      dispatch({
        type: ActionTypes.FETCH_ANIME,
        payload: response.data,
      });
    } catch (err) {
      console.error(err.message, "redux");
    }
  };
}

export const animeName = (anime, id) => {
  return {
    type: ActionTypes.ANIME_NAME,
    payload: {
      anime,
      id,
    },
  };
};

export const removeSelectedAnime = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ANIME,
    payload: {},
  };
};
