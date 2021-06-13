import React from "react";
import "./DetailsCard.css";

const detailCard = ({ img, title, synopsis, type, score, episodes, rated }) => {
  return (
    <div className="detail-details">
      <div className="detail-img">
        <img src={img} alt={title} className="img" />
        <div className="detail-text">
          <h3 className="heading">TV</h3>
          <p className="para">{type}</p>
        </div>
        <div className="detail-text">
          <h3 className="heading">Score</h3>
          <p className="para">{score}</p>
        </div>
        <div className="detail-text">
          <h3 className="heading">Episodes</h3>
          <p className="para">{episodes}</p>
        </div>
        <div className="detail-text">
          <h3 className="heading">Rated</h3>
          <p className="para">{rated}</p>
        </div>
      </div>

      <div className="detail-story">
        <div className="detail-title">
          <h3 className="heading-s">{title}</h3>
        </div>
        <div className="detail-synopsis">
          <p className="para-s">{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default detailCard;
