import axios from "axios";
import { ActionTypes } from "../contants/action-types";

export function fetchAnime(query, currentPage, postsPerPage) {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=${postsPerPage}&page=${currentPage}`
    );
    dispatch({
      type: ActionTypes.FETCH_ANIME,
      payload: response.data,
    });
  };
}

export function fetchAnimes(query, id) {
  return async (dispatch) => {
    console.log(query);
    const response = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&mal_id=${id}&limit=1`
    );
    dispatch({
      type: ActionTypes.SELECTED_ANIME,
      payload: response.data,
    });
  };
}

export const setAnime = (anime) => {
  return {
    type: ActionTypes.SET_ANIME,
    payload: anime,
  };
};

export const animeName = (animeN) => {
  return {
    type: ActionTypes.ANIME_NAME,
    payload: animeN,
  };
};

export const animeDetailName = (animeDN) => {
  console.log(animeDN);
  return {
    type: ActionTypes.ANIME_DETAIL_NAME,
    payload: animeDN,
  };
};

export const idAnime = (animeID) => {
  console.log(animeID);
  return {
    type: ActionTypes.ID_ANIME,
    payload: animeID,
  };
};

export const removeSelectedAnime = (animes) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ANIME,
    payload: animes,
  };
};
