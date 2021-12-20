import React, { useState, useEffect } from "react";
import DetailsPage from "../../components/detailPage/DetailsPage";
import "./random.css";

const AnimeDetails = () => {
  const [anime, setAnime] = useState([]);

  let num = Math.floor(Math.random() * 50);

  const getAnime = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/favorite`
    ).then((data) => data.json());

    setAnime(response.top.slice(0, num).pop());
  };

  useEffect(() => {
    getAnime();
  }, []);

  const { mal_id, title, image_url, synopsis, type, score, episodes, rated } =
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
          <DetailsPage
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
        <div className="details">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
