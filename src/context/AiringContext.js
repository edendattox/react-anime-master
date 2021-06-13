import React, { useState, useEffect, createContext } from "react";

export const AnimeAiringContext = createContext();

export const AiringProvider = (props) => {
  const [airing, setAiring] = useState([]);

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/schedule/sunday?limit=7`
    ).then((data) => data.json());

    setAiring(temp.sunday.slice(0, 7));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <AnimeAiringContext.Provider value={[airing, setAiring]}>
      {props.children}
    </AnimeAiringContext.Provider>
  );
};
