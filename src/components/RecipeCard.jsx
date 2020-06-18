import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{`by ${props.sourceName}`}</Card.Text>
        <Button
          href={props.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recipe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
