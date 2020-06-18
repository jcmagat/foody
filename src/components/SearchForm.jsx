import React, { useState } from "react";

const SearchForm = (props) => {
  const [dropdownShow, setDropdownShow] = useState("");
  const [dropdownTitle, setDropdownTitle] = useState("Recipe Name");

  const toggleDropdown = () => {
    const temp = dropdownShow === "" ? " show" : "";
    setDropdownShow(temp);
  };

  const dropdownRecipeName = () => {
    toggleDropdown();
    setDropdownTitle("Recipe Name");
  };

  const updateDropdownTitle = (e) => {
    toggleDropdown();
    setDropdownTitle(e.target.text);
  };

  return (
    <form className="input-group" onSubmit={props.updateSearch}>
      <div className="input-group-prepend">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          {dropdownTitle}
        </button>
        <div className={`dropdown-menu${dropdownShow}`}>
          <a className="dropdown-item" href="#" onClick={updateDropdownTitle}>
            Recipe Name
          </a>
          <a className="dropdown-item" href="#" onClick={updateDropdownTitle}>
            Ingredients
          </a>
        </div>
      </div>
      <input className="form-control" type="text" name="search" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
