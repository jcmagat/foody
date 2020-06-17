import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeContainer from "./components/RecipesContainer";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const getRecipes = async () => {
      let results = [];

      if (search !== "") {
        const response = await fetch(
          `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        results = data.hits.map((hit) => hit.recipe);

        console.log(results);
      }

      setRecipes(results);
    };

    getRecipes();
  }, [search]);

  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };

  return (
    <div className="App">
      <form className="input-group" onSubmit={updateSearch}>
        <input className="form-control" type="text" name="search" />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      <RecipeContainer key={Math.random()} recipes={recipes} />
    </div>
  );
}

export default App;
