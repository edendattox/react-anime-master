import React from "react";
import "./App.css";

import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SingleView from "./page/SingleView";
import { AiringProvider } from "./context/AiringContext";
import { PopularProvider } from "./context/Popular";
import Browse from "./page/browse/Browse";
import Header from "./components/header/Header";
import Random from "./page/random/random";
import SearchResult from "./page/searchResult/SearchResult";
import AnimeDetails from "./page/animeDetails/AnimeDetails";
import { useSelector } from "react-redux";

function App() {
  // const animeName = useSelector((state) => state.allAnime.animeName);

  // console.log(animeName);

  return (
    <AiringProvider>
      <PopularProvider>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/browse">
                <Browse />
              </Route>

              <Route path="/random" exact>
                <Random />
              </Route>
              <Route path="/search" exact>
                <SearchResult />
              </Route>
              <Route path="/detail" exact>
                <AnimeDetails />
              </Route>
              <Route>404 Go Back</Route>
            </Switch>
          </Router>
        </div>
      </PopularProvider>
    </AiringProvider>
  );
}

export default App;
