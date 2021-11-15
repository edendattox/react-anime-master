import React, { useState, useEffect } from "react";
import DetailsCard from "../../components/detailCard/DetailsCard";
import "./animeDetails.css";
import useFetch from "../../customHooks/useFetch";

const AnimeDetails = () => {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(0);

  const getParameters = (n) => {
    let params = new URLSearchParams(window.location.search);
    return params.get(n);
  };
  let name = getParameters("title");
  let aid = getParameters("id");

  const URL = `https://api.jikan.moe/v3/search/anime?q=${query}&mal_id=${id}&limit=1`;

  const { loading, error, data } = useFetch(URL);

  useEffect(() => {
    if (name && aid) {
      setQuery(name);
      setId(aid);
    }

    if (data) {
      setAnime(data.results[0]);
    }
  }, [aid, data, name, id]);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const { image_url, title, synopsis, mal_id, type, score, episodes, rated } =
    anime;

  return (
    <div>
      <div className="a-container">
        <div className="cover">
          <img
            src="https://mcdn.wallpapersafari.com/medium/99/21/kKEU2A.jpg"
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
