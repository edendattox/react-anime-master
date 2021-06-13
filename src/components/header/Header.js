import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  // removeSelectedAnime,
  fetchAnime,
  animeName,
} from "../../redux/actions/animeAction";

export const HeaderProvider = () => {
  // const query = useSelector((state) => state.allAnime.animeName);
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const handleSearch = (e) => {
    e.preventDefault();

    // fetchAnime(query, currentPage, postsPerPage);
    history.push("/search?q=" + query);

    // setQuery("");
  };

  useEffect(() => {
    if (!query.length == "") {
      dispatch(animeName(query));
    }
    if (!query.length == "" && query == query) {
      dispatch(fetchAnime(query, currentPage, postsPerPage));
    }
  }, [query]);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="logo"
            src="https://4anime.to/static/logo.png"
            alt="logo"
            height="54px"
            width="50px"
          />
        </Link>

        <Link to="/browse">
          <span>Browse</span>
        </Link>

        <Link to="/random">
          <span>Random</span>
        </Link>

        <span>Genre</span>
      </div>

      <div className="header__right">
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            style={{
              backgroundColor: "#161616",
              padding: "15px",
              border: "1px solid #b6b6b6",
              width: "400px",
              borderRadius: ".5em",
              color: "#b6b6b6",
            }}
          />
        </form>

        <span>
          <i
            className="fab fa-discord"
            id="icon"
            style={{ fontSize: "30px", color: "#b6b6b6" }}
          ></i>
        </span>
        <span>
          <i
            className="fas fa-sign-in-alt"
            id="icon"
            style={{ fontSize: "20px", color: "#b6b6b6" }}
          ></i>
        </span>
        <p>Login</p>
      </div>

      <div className="header__burger">
        <ShuffleIcon className="icon" />
        <SearchIcon className="icon" />
        <MenuIcon className="icon" />
      </div>
    </div>
  );
};

export default HeaderProvider;
