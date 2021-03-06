import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${search}&instructionsRequired=true&number=12`
      );
      const data = await response.json();
      const results = data.results;

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
      <Navbar className="Nav">
        <Navbar.Brand href="/">
          <h3 className="Logo">Foody</h3>
        </Navbar.Brand>
      </Navbar>

      <SearchForm updateSearch={updateSearch} />

      <Container>
        <Row>
          {recipes.map((recipe) => (
            <Col className="d-flex" md="4">
              <RecipeCard key={recipe.id} recipe={recipe} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
