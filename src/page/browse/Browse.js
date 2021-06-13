import React, { useContext } from "react";
import { AnimePopularContext } from "../../context/Popular";
import CardFront from "../../components/cardFront/CardFront";
import "./Browse.css";

function Browse() {
  const [popular] = useContext(AnimePopularContext);

  return (
    <div className="Browse">
      <div className="browse__anime">
        {popular.map((anime) => (
          <CardFront
            className="cardFront__style"
            key={anime.mal_id}
            title={anime.title}
            img={anime.image_url}
            episode={anime.episodes}
          />
        ))}
      </div>
    </div>
  );
}

export default Browse;
