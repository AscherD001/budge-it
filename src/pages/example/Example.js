import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
//import ProgBar from "../../components/ProgressBar"; <ProgBar />
//import Input from "../../components/InputForm"; <Input />
//import AddBtn from "../../components/AddBtn"; <AddBtn />
//import DeleteBtn from "../../components/DeleteBtn"; <DeleteBtn />
import FlatNav from "../../components/FlatNav";
import Login from "../../components/Login";
import BudgetItem from "../../components/BudgetItem";


class Example extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Jumbotron value="This is commented out!">
        <h1 style={{ color: "white", textAlign: "center", lineHeight: "150px" }}>Budge It!</h1>
      </Jumbotron>
      <FlatNav />
      <Login />
      <BudgetItem />
      <BudgetItem />
      <BudgetItem />
      <BudgetItem />
      </div>
    );
  }
}

export default Example;

// jumbotron is imported from client/src/components
// the <h1> element is {children} inside the "../../components/Jumbotron/Jumbotron.js" file