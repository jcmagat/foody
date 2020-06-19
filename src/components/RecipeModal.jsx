import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

const RecipeModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.recipe.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Ready in {props.recipe.readyInMinutes} minutes</p>
        <p>Serves {props.recipe.servings}</p>
        <p>Ingredients</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={props.handleClose}
          href={props.recipe.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipeModal;
