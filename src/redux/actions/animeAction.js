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
      console.error(err.message);
    }
  };
}

// export function fetchAnimes(query, id) {
//   return async (dispatch) => {
//     let response;
//     try {
//       if (query) {
//         response = await axios.get(
//           `https://api.jikan.moe/v3/search/anime?q=${query}&mal_id=${id}&limit=1`
//         );
//         dispatch({
//           type: ActionTypes.SELECTED_ANIME,
//           payload: response.data,
//         });
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
// }

// export const setAnime = (anime) => {
//   return {
//     type: ActionTypes.SET_ANIME,
//     payload: anime,
//   };
// };

export const animeName = (anime, id) => {
  return {
    type: ActionTypes.ANIME_NAME,
    payload: {
      anime,
      id,
    },
  };
};

// export const animeDetailName = (anime) => {
//   console.log(anime);
//   return {
//     type: ActionTypes.ANIME_DETAIL_NAME,
//     payload: anime,
//   };
// };

// export const idAnime = (anime) => {
//   console.log(anime);
//   return {
//     type: ActionTypes.ID_ANIME,
//     payload: anime,
//   };
// };

export const removeSelectedAnime = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ANIME,
    payload: {},
  };
};
