import React, { useState, useEffect } from "react";
import DetailsCard from "../../components/detailCard/DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import "./AiringDetails.css";
import {
  fetchAnimes,
  removeSelectedAnime,
} from "../../redux/actions/animeAction";

const AnimeDetails = () => {
  // const animeName = useSelector((state) => state.allAnime.animeName);
  const dispatch = useDispatch();
  const animeDetail = useSelector((state) => state.allAnime.anime.results[0]);
  const [query, setQuery] = useState("");
  const [id, setId] = useState();
  const { image_url, title, synopsis, mal_id, type, score, episodes, rated } =
    animeDetail;

  const getParameters = (n) => {
    let params = new URLSearchParams(window.location.search);
    return params.get(n);
  };
  let name = getParameters("title");
  let aid = getParameters("id");

  useEffect(() => {
    setQuery(name);
    setId(aid);
    dispatch(fetchAnimes(query, id));
    return () => {
      // dispatch(removeSelectedAnime());
    };
  }, [query]);
  return (
    <div>
      <div className="a-container">
        <div className="cover">
          <img
            src="https://4anime.to/static/Dr1FzAv.jpg"
            alt="background"
            className="bg"
          />
        </div>

        <div className="s-list">
          <DetailsCard
            className="SearchCard__style"
            key={mal_id}
            title={title}
            img={image_url}
            synopsis={synopsis}
            type={type}
            score={score}
            episodes={episodes}
            rated={rated}
          />
        </div>
        <div className="details"></div>
      </div>
    </div>
  );
};

export default AnimeDetails;