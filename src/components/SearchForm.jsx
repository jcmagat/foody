import React, { useState } from "react";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";

const SearchForm = (props) => {
  return (
    <Form onSubmit={props.updateSearch}>
      <InputGroup>
        <FormControl type="text" name="search" />

        <InputGroup.Append>
          <Button type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SearchForm;
