import React from "react";

const Jumbotron = ( props ) => {
  // console.log(props.children);
  return(
  <div style={{ height: 300, backgroundColor: "#555555", paddingTop: "none" }} className="jumbotron">
    {props.children}
    {/* 
    <h1 style={{ color: "white", textAlign: "center", marginTop: "-45px" }}>{props.value}</h1>
    */}
  </div>
  );
};

export default Jumbotron;