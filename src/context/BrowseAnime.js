import React, { useState, useEffect, createContext } from "react";

export const AnimeBrowseContext = createContext();

export const BrowseProvider = (props) => {
  const [browse, setBrowse] = useState([]);

  const GetPopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/favorite`
    ).then((data) => data.json());

    setBrowse(temp.top.slice(0, 50));
  };

  useEffect(() => {
    GetPopAnime();
  }, []);

  return (
    <AnimeBrowseContext.Provider value={[browse, setBrowse]}>
      {props.children}
    </AnimeBrowseContext.Provider>
  );
};
