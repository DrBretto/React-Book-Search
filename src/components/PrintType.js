import React from "react";

import "./printType.css";

export default class PrintType extends React.Component {
  render() {
    return (
      <div className="printType">
        <label htmlFor="printTypeSelector">Print Type:</label>

        <select name="printTypeSelector" className="printTypeSelector">
          <option defaultValue="all">All</option>
          <option value="book">Book</option>
          <option value="magazine">Magazine</option>
        </select>
      </div>
    );
  }
}
