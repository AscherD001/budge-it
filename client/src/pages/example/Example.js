import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

class Example extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Jumbotron>
        <h1 style={{ color: "white", textAlign: "center", lineHeight: "150px" }}>Budge It!</h1>
      </Jumbotron>
      </div>
    );
  }
}

export default Example;