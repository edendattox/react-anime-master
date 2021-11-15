import React, { useState, useEffect } from "react";
import DetailsCard from "../../components/detailCard/DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import "./random.css";
import { fetchAnimes } from "../../redux/actions/animeAction";

const AnimeDetails = () => {
  const dispatch = useDispatch();
  const animeDetail = useSelector((state) => state.allAnime.anime.results[0]);
  const [query, setQuery] = useState("k");
  const [id, setId] = useState();
  const { image_url, title, synopsis, mal_id, type, score, episodes, rated } =
    animeDetail;

  const random = () => {
    let num = Math.floor(Math.random() * 100);
    return num;
  };

  useEffect(() => {
    setId(random());
    dispatch(fetchAnimes(query, id));
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
