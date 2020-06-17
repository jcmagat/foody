import React from "react";

const Recipe = ({ id, image, title }) => {
  const imageType = image.split(".")[1];
  const imageSrc = `https://spoonacular.com/recipeImages/${id}-636x393.${imageType}`;

  return (
    <div>
      <img className="img-fluid" src={imageSrc} alt="Responsive image" />
      <h3>{title}</h3>
    </div>
  );
};

export default Recipe;
