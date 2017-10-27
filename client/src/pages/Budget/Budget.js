import React, { Component } from "react";
import AddBtn from "../../components/AddBtn"; 
import BudgetItem from "../../components/BudgetItem";


class Budget extends Component {
  render() {
    return (
      <div>
        <AddBtn />
        <BudgetItem />
      </div>
    );
  }
}

export default Budget;

// jumbotron is imported from client/src/components
// the <h1> element is {children} inside the "../../components/Jumbotron/Jumbotron.js" file