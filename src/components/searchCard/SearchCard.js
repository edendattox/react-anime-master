import React from "react";
import "./SearchCard.css";

const searchCard = ({ title, img }) => {
  return (
    <div
      className="searchCard"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <img
        src={img}
        alt={title}
        height="280px"
        width="190px"
        style={{
          cursor: "pointer",
        }}
      />
      <h4
        style={{
          cursor: "pointer",
        }}
      >
        {title}
      </h4>
    </div>
  );
};
export default searchCard;
