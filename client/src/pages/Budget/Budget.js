import React, { Component } from "react";
import AddBtn from "../../components/AddBtn"; 
import CheckBtn from "../../components/Form/CheckBtn";
import DeleteBtn from "../../components/Form/DeleteBtn";
import Input from "../../components/Form/Input";
import BudgetItem from "../../components/BudgetItem";
// import BudgetInput from "../../components/BudgetInput";
import Navpills from "../../components/Navpills";
import API from "../../utils/API";

class Budget extends Component {
  state = {
    budget: [],
    name: "",
    amount: "",
    test: "",
    temp: ""
    // date: "",
    // balance: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBudget();
  }

  // Loads all books  and sets them to this.state.books
  loadBudget = () => {

    API.getBudgets()      
      .then(res => {
        console.log(res);
        this.setState({ budget: res.data, name: "", amount: "", test: "" })
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

  onChange () {
    console.log("Test");
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.amount) {
      API.saveBudget({
        name: this.state.name,
        amount: this.state.amount,
        userId: localStorage.user_id,
        test: 0,
        temp: 0
        // date: this.state.date,
        // balance: this.state.balance
      })
        .then(res => this.loadBudget())
        .catch(err => console.log(err));
    }
  };

  handleInputSubmit = event => {
    this.setState({temp: this.state.temp + this.state.test});
    
    console.log(this.state.temp);
    event.preventDefault();

    if (this.state.test > 0) {
      
      API.saveBalance({
        // name: this.state.name,
        amount: Budget.amount,
        test: this.state.test,
        userId: localStorage.user_id,
        temp: this.state.test + this.state.temp
        // date: this.state.date,
        // balance: this.state.balance
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
        <div className="container" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "80px" }}> 
          <div className="col-lg-6 text-center" style={{ borderBottom: "#34495e 5px solid" }}> 
            <div className="row">
              <form>   
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Expense Name (required)"
                />
                <Input
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                  name="amount"
                  placeholder="$00.00 Monthly (required)"
                />  
                <div className="col-lg-3 pull-right" style={{ marginTop: "40px", marginRight: "120px" }}>  
                  <DeleteBtn onClick={() => this.deleteBudget()} />         
                  <CheckBtn onClick={this.handleFormSubmit} />                 
                </div>
              </form>          
            </div>
            <div className="row">
              <div className="progress" style={{ maxWidth: 450, height: "45px" }}>
                <span className="text pull-left" style={{ marginLeft: "20px"}}>$Spent / $Total</span>
                <span className="text pull-right" style={{ marginRight: "20px" }}>(%Percentage)</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p style={{ marginLeft: "20px" }}><b>Monthly:</b></p>
              </div>  
              <div className="col-lg-3 pull-right">
                <p className="text pull-right" style={{ marginRight: "200px" }}><b>Remaining:</b></p>
              </div>
            </div> 
          </div>
        </div>
        
        {this.state.budget.length ? (
          <div>
            {this.state.budget.map(budget => {
                
              return (
                <div key={budget._id} style={{"marginBottom": "10px"}}>  
                <BudgetItem 
                value={this.state.test}
                name={budget.name}
                budget = {budget}
                inputRef={(input) => this.textInput = input} 
                onChange={this.onChange}
                deleteBudget = {this.deleteBudget}
                inputSubmit = {this.handleInputSubmit}
                remaining = {budget.amount - this.state.temp}
                />
              
                {/* <DeleteBtn onClick={() => this.deleteBudget(budget._id)} /> 
                <CheckBtn onClick={this.handleInputSubmit} /> */}
                </div>
              );
            })}
          </div>
            ) : (
              <h3>Please add an Expense</h3>
            )}
      </div>
    );
  }
}

export default Budget;

// jumbotron is imported from client/src/components
// the <h1> element is {children} inside the "../../components/Jumbotron/Jumbotron.js" file
