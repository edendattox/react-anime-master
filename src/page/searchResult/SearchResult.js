import React, { useState, useEffect } from "react";
import SearchCard from "../../components/cardFront/CardFront";
import "./SearchResult.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idAnime } from "../../redux/actions/animeAction";
import {
  removeSelectedAnime,
  fetchAnime,
  animeDetailName,
} from "../../redux/actions/animeAction";

const SearchResult = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const animeName = useSelector((state) => state?.allAnime?.animeName);
  const animes = useSelector((state) => state?.allAnime?.animes?.results);

  useEffect(() => {
    !query && setQuery(animeName);
    !query.length ? dispatch(fetchAnime(query)) : console.error("not query");
    query && dispatch(animeDetailName(query));
    // return () => {
    //   dispatch(removeSelectedAnime(query));
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, animeName, animes]);

  console.log(animes);

  const renderList =
    animes &&
    animes.map((anime) => {
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
      <div className="para-r">Showing Results for {animeName}</div>
      <div className="anime">{renderList}</div>
    </>
  );
};

export default SearchResult;
