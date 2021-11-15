import React from "react";
import "./Browse.css";
import Filter from "../filter/Filter";

function Browse() {
  return (
    <div className="browse">
      <h3>Browse</h3>
      <div className="browse__filter">
        <Filter title="Sort By" />
        <Filter title="Genre" />
        <Filter title="Season" />
        <Filter title="Status" />
        <Filter title="Year" />
        <Filter title="Type" />
      </div>
    </div>
  );
}

export default Browse;
