import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const getRecipes = async () => {
    let results = [];

    if (query !== "") {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}&number=5`
      );
      const data = await response.json();
      results = data.results;
    }

    setRecipes(results);
    console.log(results);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
