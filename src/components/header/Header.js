import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../features/userSlice";
import { anime } from "../../features/animeSlice";
import { auth } from "../../firebase/firebase";

export const HeaderProvider = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((user) => user.users.user);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/search?q=${query}`);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    dispatch(
      anime({
        name: query,
      })
    );
  }, [query, dispatch]);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="logo"
            src="https://4anime.city/wp-content/themes/4anime_city/assets/img/logo_front_page.png?v=12"
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

        {/* <span>Genre</span> */}
      </div>

      <div className="header__right">
        {!toggle && (
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
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
        )}
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
        {user ? (
          <Link
            to=""
            id="logout"
            onClick={logoutOfApp}
            style={{ textDecoration: "none" }}
          >
            <p
              style={{ color: "#b6b6b6", fontSize: "14px", marginLeft: "5px" }}
            >
              LogOut
            </p>
          </Link>
        ) : (
          <Link to="/login" id="login" style={{ textDecoration: "none" }}>
            <p
              style={{ color: "#b6b6b6", fontSize: "14px", marginLeft: "5px" }}
            >
              Login
            </p>
          </Link>
        )}
      </div>

      <div className="header__burger">
        <ShuffleIcon className="icon" />
        <SearchIcon onClick={triggerToggle} className="icon" />
        <MenuIcon className="icon" />
      </div>
    </div>
  );
};

export default HeaderProvider;
