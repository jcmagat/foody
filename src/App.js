import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const getRecipes = async () => {
      let results = [];

      if (query !== "") {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        results = data.hits.map((hit) => hit.recipe);

        console.log(results);
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
      <div className="container">
        <div className="col">
          <div className="row">
            {recipes.map((recipe, index) => (
              <Recipe
                key={index + Math.random()}
                image={recipe.image}
                label={recipe.label}
                url={recipe.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
