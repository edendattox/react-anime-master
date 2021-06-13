import React from "react";
import "./App.css";

import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SingleView from "./page/SingleView";
import { AiringProvider } from "./context/AiringContext";
import { PopularProvider } from "./context/Popular";
import { BrowseProvider } from "./context/BrowseAnime";
import Browse from "./page/browse/Browse";
import Header from "./components/header/Header";
import Random from "./page/random/random";
import SearchResult from "./page/searchResult/SearchResult";
import AnimeDetails from "./page/animeDetails/AnimeDetails";
import BrowseDetail from "./page/browseDetail/BrowseDetail";
import AiringDetails from "./page/airingDetails/AiringDetails";
import PopularDetail from "./page/popularDetail/PopularDetail";

function App() {
  return (
    <AiringProvider>
      <PopularProvider>
        <BrowseProvider>
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
                <Route path="/title" exact>
                  <BrowseDetail />
                </Route>
                <Route path="/airing" exact>
                  <AiringDetails />
                </Route>
                <Route path="/popular" exact>
                  <PopularDetail />
                </Route>
                <Route>404 Go Back</Route>
              </Switch>
            </Router>
          </div>
        </BrowseProvider>
      </PopularProvider>
    </AiringProvider>
  );
}

export default App;
