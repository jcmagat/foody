import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.image} alt={props.label} />
      <div className="card-body">
        <h4 className="card-title">{props.label}</h4>
        <p className="card-text">Info</p>
        <a
          className="btn btn-primary"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
