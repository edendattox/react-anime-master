import React from "react";

export default function Search({ handleSearch, setQuery, query }) {
  return (
    <>
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
    </>
  );
}
