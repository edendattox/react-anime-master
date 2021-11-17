import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchCard from "../../components/cardFront/CardFront";
import "./SearchResult.css";
import useFetch from "../../customHooks/useFetch";
import { useSelector } from "react-redux";
import useDebounce from "../../customHooks/useDebounce";

const SearchResult = () => {
  const animeName = useSelector((anime) => anime.allAnime.animeName.anime);
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);

  const getParameters = (n) => {
    let params = new URLSearchParams(window.location.search);
    return params.get(n);
  };
  let name = getParameters("q");

  const URL = `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=${20}&page=${1}`;

  const debouncedSearchTerm = useDebounce(animeName, 700);

  const { loading, error, data } = useFetch(URL);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setQuery(debouncedSearchTerm);
    }

    if (data) {
      setAnime(data.results);
    }

    return () => {
      setQuery("");
    };
  }, [data, query, debouncedSearchTerm]);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

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
