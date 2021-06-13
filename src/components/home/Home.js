import React, { useContext } from "react";
import "./Home.css";
import CardFront from "../cardFront/CardFront";
import { AnimeAiringContext } from "../../context/AiringContext";
import { AnimePopularContext } from "../../context/Popular";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Home() {
  const [airing, setAiring] = useContext(AnimeAiringContext);
  const [popular, setPopular] = useContext(AnimePopularContext);

  return (
    <div className="home">
      <div className="home__title">
        <h3>Recently Added</h3>
      </div>

      <div className="home__anime">
        {airing.map((anime) => (
          <div key={anime.mal_id}>
            <Link to={"/airing?title=" + `${anime.title}&id=${anime.mal_id}`}>
              <CardFront
                className="cardFront__style"
                key={anime.mal_id}
                title={anime.title}
                img={anime.image_url}
                episode={anime.episodes}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="home__title__two">
        <h3>Popular This Week</h3>
      </div>

      <div className="home__anime">
        {popular.map((anime) => (
          <div key={anime.mal_id}>
            <Link to={"/popular?title=" + `${anime.title}&id=${anime.mal_id}`}>
              <CardFront
                className="cardFront__style"
                key={anime.mal_id}
                title={anime.title}
                img={anime.image_url}
                episode={anime.episodes}
              />
            </Link>
          </div>
        ))}

        <div className="middle__container">
          <div className="donate">
            <h3>
              We need your help to keep going. By donating you can help us to
              keep the site alive and even upgrade the servers for a better
              experience. Don't forget to join our discord community!
            </h3>
          </div>

          <div className="donate__button">
            <div className="donate__button__text">
              <h3>The donation amount is manually updated every few days.</h3>
            </div>
            <Button className="button">DONATE</Button>
          </div>

          <div className="bar" style={{ cursor: "pointer" }}>
            <div className="bar__bar"></div>
            <div className="bar__text">
              <h3> $781.30 / $1140.00 for January</h3>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
