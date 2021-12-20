import React, { useState, useEffect } from "react";
import DetailPage from "../../components/detailPage/DetailsPage";
import useFetch from "../../customHooks/useFetch";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import "./animeDetails.css";

const spinner = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const AnimeDetails = () => {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(0);
  const [color] = useState("#36D7B7");

  const getParameters = (n) => {
    let params = new URLSearchParams(window.location.search);
    return params.get(n);
  };
  let name = getParameters("title");
  let aid = getParameters("id");

  const URL = `https://api.jikan.moe/v3/search/anime?q=${query}&mal_id=${id}&limit=1`;

  const { loading = true, error, data } = useFetch(URL);

  useEffect(() => {
    if (name && aid) {
      setQuery(name);
      setId(aid);
    }

    if (data) {
      setAnime(data.results[0]);
    }
  }, [aid, data, name]);

  if (loading) {
    return (
      <div style={spinner}>
        <PuffLoader color={color} loading={loading} css={override} size={160} />
      </div>
    );
  }
  if (error && !anime) {
    return (
      <div className="error">
        <h1>
          {`Sorry, Not found Anime with keyword ${query}. You can find all anime
          at`}
        </h1>
      </div>
    );
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
          <DetailPage
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
