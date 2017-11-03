import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-pills navbar navbar-inverse">
    <li className={window.location.pathname === "/" ? "active" : ""} style={{ fontSize: "150%" }}>
      <Link to="/">Budge-It!</Link>
    </li>
    <li className={window.location.pathname === "/Budget" ? "active" : ""} style={{ marginTop: "5px" }}>
      <Link to="/Budget">Budget</Link>
    </li>
    <li className={window.location.pathname === "/Bills" ? "active" : ""} style={{ marginTop: "5px" }}>
      <Link to="/Bills">Bills</Link>
    </li>
  </ul>;

export default Navpills;

//still in progress --Steve