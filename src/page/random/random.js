import React, { useContext } from "react";
import { AnimePopularContext } from "../../context/Popular";
import CardFront from "../../components/cardFront/CardFront";
import "./random.css";

const Random = () => {
  const [popular] = useContext(AnimePopularContext);

  return (
    <div className="Random">
      <div className="Random__anime">
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
};

export default Random;
