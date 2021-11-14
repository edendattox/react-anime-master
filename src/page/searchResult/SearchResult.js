import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCard from "../../components/cardFront/CardFront";
import "./SearchResult.css";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { idAnime } from "../../redux/actions/animeAction";
// import {
//   animeDetailName,
//   fetchAnimes,
//   fetchAnime,
// } from "../../redux/actions/animeAction";

const SearchResult = () => {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);

  const getParameters = (n) => {
    let params = new URLSearchParams(window.location.search);
    return params.get(n);
  };
  let name = getParameters("q");

  console.log(name);

  useEffect(() => {
    setQuery(name);
    const detail = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=${20}&page=${1}`
      );
      const results = response.data.results[0];
      setAnime(results);
    };
    detail();
  }, [query, anime]);

  const renderList =
    anime.length > 0 &&
    anime.map((anime) => {
      const { image_url, mal_id, title } = anime;
      return (
        <div className="a-l_container" key={mal_id}>
          <Link to={`/detail?q=${`${query}&title=${title}&id=${mal_id}`}`}>
            <div className="a-l_anime">
              <SearchCard
                className="SearchCard__style"
                key={mal_id}
                title={title}
                img={image_url}
              />
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <div className="para-r">Showing Results for {query}</div>
      <div className="anime">{renderList}</div>
    </>
  );
};

export default SearchResult;
