import React from "react";
import "./Filter.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Filter({ title }) {
  return (
    <div className="filter">
      <h3>{title}</h3>
      <ExpandMoreIcon className="dropdown" />
    </div>
  );
}

export default Filter;
