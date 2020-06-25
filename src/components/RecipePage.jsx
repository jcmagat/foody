import React, { Component } from "react";
import { Image } from "react-bootstrap";

class RecipePage extends Component {
  state = {
    recipe: {},
  };

  componentDidMount = async () => {
    const recipe = this.props.location.state.recipe;
    this.setState({ recipe });
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
