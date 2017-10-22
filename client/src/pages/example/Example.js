import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

class Example extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Jumbotron value="This is commented out!">
        <h1 style={{ color: "white", textAlign: "center", lineHeight: "150px" }}>Budge It!</h1>
      </Jumbotron>
      </div>
    );
  }
}

export default Example;

// jumbotron is imported from client/src/components
// the <h1> element is {children} inside the "../../components/Jumbotron/Jumbotron.js" file