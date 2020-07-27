import React from "react";

import "./searchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };

    this.inputUpdated = this.inputUpdated.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <form className="searchBar">
        <label htmlFor="bookSearchBar">Search books: </label>
        <input
          className="bookSearchBar"
          type="input"
          name="bookSearchBar"
          value={this.state.searchTerm}
          onInput={this.inputUpdated}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
