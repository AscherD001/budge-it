import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300, backgroundColor: "#555555", paddingTop: "none" }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;