import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.radioValue === "Alphabetically"} onChange={(event) => props.handleClick(event.target.value)} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.radioValue === "Price"} onChange={(event) => props.handleClick(event.target.value)} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.handleOnChange(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
