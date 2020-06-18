import React from "react";
import RecipeCard from "./RecipeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecipeContainer = (props) => {
  return (
    <Container>
      <Row>
        {props.recipes.map((recipe) => (
          <Col className="d-flex" md="4">
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              sourceName={recipe.sourceName}
              sourceUrl={recipe.sourceUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeContainer;
