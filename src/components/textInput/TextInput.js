import React from "react";

const TextInput = ({ handleSearch, handleChange, query }) => {
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          required
          style={{
            backgroundColor: "#161616",
            padding: "15px",
            border: "1px solid #b6b6b6",
            width: "400px",
            borderRadius: ".5em",
            color: "#b6b6b6",
          }}
        />
      </form>
    </div>
  );
};

export default TextInput;
