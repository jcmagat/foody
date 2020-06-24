import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <Link
      to={{
        pathname: `/recipe/${props.recipe.id}`,
        state: { recipe: props.recipe },
      }}
    >
      <Card>
        <Card.Img
          variant="top"
          src={props.recipe.image}
          alt={props.recipe.title}
        />
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Card.Text>{`by ${props.recipe.sourceName}`}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default RecipeCard;
