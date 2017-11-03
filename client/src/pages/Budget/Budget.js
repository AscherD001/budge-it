import React, { Component } from "react";
import API from "../../utils/API";

import AddBtn from "../../components/AddBtn"; 
import BudgetItem from "../../components/BudgetItem";
import BudgetInput from "../../components/BudgetInput";
import Navpills from "../../components/Navpills";

class Budget extends Component {
  state = {
    budget: [],
    name: "",
    amount: "",
    date: "",
    balance: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBudget();
  }

  // Loads all books  and sets them to this.state.books
  loadBudget = () => {
    API.getBudget()
      .then(res => {
        console.log(res)
        this.setState({ budget: res.data, name: "", amount: "", date: "", balance: "" })
      }
      )
      .catch(err => console.error("the error is: ",err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBudget = id => {
    API.deleteBudget(id)
      .then(res => this.loadBudget())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.amount) {
      API.saveBudget({
        name: this.state.name,
        amount: this.state.amount,
        date: this.state.date,
        balance: this.state.balance
      })
        .then(res => this.loadBudget())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Navpills />
        <AddBtn />
        <BudgetItem />
        <BudgetInput />
      </div>
    );
  }
}

export default Budget;

// jumbotron is imported from client/src/components
// the <h1> element is {children} inside the "../../components/Jumbotron/Jumbotron.js" file
