import React, { Component } from "react";
import { Image } from "react-bootstrap";

class RecipePage extends Component {
  state = {
    recipe: {},
  };

  componentDidMount = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getRecipe = async () => {
      const id = this.props.location.state.id;

      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
      );
      const result = await response.json();

      console.log(result);
      this.setState({ recipe: result });
    };

    getRecipe();
  };

  render() {
    return (
      <div>
        <Image src={this.state.recipe.image} fluid />
        <h1>{this.state.recipe.title}</h1>
        <p>by {this.state.recipe.sourceName}</p>
        <p>{this.state.recipe.readyInMinutes} minutes</p>
        <p>{this.state.recipe.servings} servings</p>
      </div>
    );
  }
}

export default RecipePage;
