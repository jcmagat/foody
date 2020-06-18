import React from "react";

const SearchForm = (props) => {
  return (
    <form className="input-group" onSubmit={props.updateSearch}>
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
