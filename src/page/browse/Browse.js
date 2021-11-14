import React, { useContext } from "react";
import { AnimeBrowseContext } from "../../context/BrowseAnime";
import CardFront from "../../components/cardFront/CardFront";
import { Link } from "react-router-dom";
import "./Browse.css";

function Browse() {
  const [browse] = useContext(AnimeBrowseContext);

  const renderList = browse.map((anime) => {
    const { image_url, mal_id, title } = anime;
    return (
      <div className="b-container" key={mal_id}>
        <Link to={`/title?q=${title}&id=${mal_id}`}>
          <div className="b-anime">
            <CardFront
              className="SearchCard__style"
              key={mal_id}
              title={title}
              img={image_url}
            />
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="b-para-r">Browse Results ...</div>
      <div className="b-r__anime">{renderList}</div>
    </>
  );
}

export default Browse;
