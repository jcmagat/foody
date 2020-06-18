import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchForm = (props) => {
  const [dropdownTitle, setDropdownTitle] = useState("Recipe Name");

  const updateDropdownTitle = (e) => {
    setDropdownTitle(e.target.text);
  };

  return (
    <Form onSubmit={props.updateSearch}>
      <InputGroup>
        <InputGroup.Prepend>
          <DropdownButton id="dropdown-basic-button" title={dropdownTitle}>
            <Dropdown.Item href="#" onClick={updateDropdownTitle}>
              Recipe Name
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={updateDropdownTitle}>
              Ingredients
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup.Prepend>

        <FormControl type="text" name="search" />

        <InputGroup.Append>
          <Button type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SearchForm;
