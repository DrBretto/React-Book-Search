import React from "react";

import "./searchBar.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <label htmlFor="bookSearchBar">Search books: </label>
        <input className="bookSearchBar"></input>
      </div>
    );
  }
}
