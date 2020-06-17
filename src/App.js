import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getRecipes = async () => {
      let results = [];

      if (query !== "") {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}&number=5`
        );
        const data = await response.json();
        results = data.results;
        console.log(data);
      }

      setRecipes(results);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="input-group" onSubmit={getQuery}>
        <input
          className="form-control"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  );
}

export default App;
