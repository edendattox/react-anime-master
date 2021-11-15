import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useDetail = ({ name, aid = null }) => {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(0);

  const URL = `https://api.jikan.moe/v3/search/anime?q=${query}&mal_id=${id}&limit=1`;

  const { loading, error, data } = useFetch(URL);

  console.log(name);

  console.log(anime);

  useEffect(() => {
    if (name && aid) {
      setQuery(name);
      setId(aid);
    }

    if (data) {
      setAnime(data.results[0]);
    }
  }, [aid, data, name, id]);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return { anime };
};

export default useDetail;
