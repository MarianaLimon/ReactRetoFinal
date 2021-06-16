import React from "react";
import Dropdown from "./DropdownMenu/Dropdown";
import "./style.css";

class DateFilter extends React.Component {
  render() {
    return (
      <nav className="d-flex justify-content-between align-items-center pb-2">
        <h3><b>Posts</b></h3>
        <ul className="filter d-none d-lg-block">
          <li className="active">Feed</li>
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
          <li>Infinity</li>
          <li>Lastest</li>
        </ul>
        <Dropdown />
      </nav>
    );
  }
}

export default DateFilter;
