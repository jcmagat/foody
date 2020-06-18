import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeContainer = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map((recipe) => (
          <div className="col-md-4 d-flex">
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              sourceName={recipe.sourceName}
              sourceUrl={recipe.sourceUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeContainer;
