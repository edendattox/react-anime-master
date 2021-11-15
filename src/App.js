import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AiringProvider } from "./context/AiringContext";
import { PopularProvider } from "./context/Popular";
import { BrowseProvider } from "./context/BrowseAnime";
import Browse from "./page/browse/Browse";
import Header from "./components/header/Header";
import Random from "./page/random/random";
import SearchResult from "./page/searchResult/SearchResult";
import AnimeDetails from "./page/animeDetails/AnimeDetails";
import Genre from "./page/genre/Genre";

function App() {
  return (
    <AiringProvider>
      <PopularProvider>
        <BrowseProvider>
          <div className="App">
            <Router>
              <Fragment>
                <Header />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/browse" element={<Browse />} />
                  <Route exact path="/random" element={<Random />} />
                  <Route exact path="/genre" element={<Genre />} />
                  <Route exact path="/search" element={<SearchResult />} />
                  <Route exact path="/detail" element={<AnimeDetails />} />
                  <Route>404 Go Back</Route>
                </Routes>
              </Fragment>
            </Router>
          </div>
        </BrowseProvider>
      </PopularProvider>
    </AiringProvider>
  );
}

export default App;
