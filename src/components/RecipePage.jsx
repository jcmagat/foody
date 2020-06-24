import React, { Component } from "react";

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
        <h1>{this.state.recipe.title}</h1>
        <p>Info</p>
      </div>
    );
  }
}

export default RecipePage;
