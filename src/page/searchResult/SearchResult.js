import React, { useState, useEffect } from "react";
import SearchCard from "../../components/cardFront/CardFront";
import "./SearchResult.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { idAnime } from "../../redux/actions/animeAction";
import {
  // removeSelectedAnime,
  fetchAnime,
  animeDetailName,
} from "../../redux/actions/animeAction";

const SearchResult = () => {
  const animeName = useSelector((state) => state.allAnime.animeName);
  const animes = useSelector((state) => state.allAnime.animes.results);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const set = () => {
    if (animeName !== query) {
      setQuery(animeName);
    }
  };

  const handelName = () => {
    dispatch(animeDetailName(query));
  };

  useEffect(() => {
    handelName();
    set();
    if (!query.length == "" && query == query) {
      dispatch(fetchAnime(query, currentPage, postsPerPage));
    } else if (animes.length == 0) {
      dispatch(fetchAnime(query, currentPage, postsPerPage));
    }

    // return () => {
    //   dispatch(removeSelectedAnime());ss
    // };
  }, [animeName]);

  const renderList = animes.map((anime) => {
    const { image_url, mal_id, title } = anime;
    return (
      <div className="a-l_container" key={mal_id}>
        <Link to={"/detail?q=" + `${query}&title=${title}&id=${mal_id}`}>
          <div className="a-l_anime">
            <SearchCard
              className="SearchCard__style"
              key={mal_id}
              title={title}
              img={image_url}
              onClick={() => dispatch(idAnime(mal_id))}
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
