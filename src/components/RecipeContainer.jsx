import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeContainer = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map((recipe, index) => (
          <div className="col-md-3">
            <RecipeCard
              key={index + Math.random()}
              image={recipe.image}
              label={recipe.label}
              url={recipe.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeContainer;
