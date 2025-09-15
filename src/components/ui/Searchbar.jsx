import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Searchbar = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  async function fetchMovies(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=8e6de51c`
      );
      if (data.Search) {
        setSearchResults(data.Search);
        
        navigate("/movie");
        
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <form onSubmit={fetchMovies} className="search__element">
      <input
        type="text"
        className="form__control"
        placeholder="Search Movie Title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="movie-search-box"
      />
      <div className="search__glass">
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          id="magnifying--glass"
          onClick={fetchMovies}
        />
      </div>
    </form>
  );
};

export default Searchbar;