import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import RecipeModal from "./RecipeModal";

const RecipeCard = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={props.recipe.image}
          alt={props.recipe.title}
        />
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Card.Text>{`by ${props.recipe.sourceName}`}</Card.Text>
          <Button onClick={handleShow}>Recipe</Button>
        </Card.Body>
      </Card>

      <RecipeModal
        show={show}
        handleClose={handleClose}
        recipe={props.recipe}
      />
    </>
  );
};

export default RecipeCard;
