import React from "react";

const Recipe = (props) => {
  return (
    <div>
      <img className="img-fluid" src={props.image} alt="Responsive image" />
      <h3>{props.label}</h3>
    </div>
  );
};

export default Recipe;
