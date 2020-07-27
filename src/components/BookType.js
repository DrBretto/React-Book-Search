import React from "react";

import "./bookType.css";

export default class BookType extends React.Component {
  render() {
    return (
      <div className="bookType">
        <label htmlFor="bookTypeSelector">Book Type:</label>

        <select name="bookTypeSelector" className="bookTypeSelector">
          <option defaultValue="all">All</option>
          <option value="book">Book</option>
          <option value="magazine">Magazine</option>
        </select>
      </div>
    );
  }
}
