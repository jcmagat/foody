import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

const RecipeContainer = (props) => {
  return (
    <Container>
      <Row>
        {props.recipes.map((recipe) => (
          <Col className="d-flex" md="4">
            <RecipeCard key={recipe.id} recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeContainer;
