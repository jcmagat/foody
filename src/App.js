import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import SearchForm from "./components/SearchForm";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getRecipes = async () => {
      // Get recipe IDs by name
      const getRecipeIdsResponse = await fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${search}&number=10`
      );
      const data = await getRecipeIdsResponse.json();
      const ids = data.results.map((result) => result.id);

      // Get recipes by IDs
      const getRecipesResponse = await fetch(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${ids.toString()}`
      );
      const results = await getRecipesResponse.json();

      setRecipes(results);
    };

    if (search !== "") {
      getRecipes();
    }
  }, [search]);

  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };

  return (
    <div className="App">
      <SearchForm updateSearch={updateSearch} />
      <RecipeContainer recipes={recipes} />
    </div>
  );
}

export default App;
