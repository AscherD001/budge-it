import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Navpills from "../../components/Navpills";
import BillsItem from "../../components/BillsItem/BillsItem.js";

class Bills extends Component {
  // Setting our component's initial state
  state = {
    bills: [],
    name: "",
    amount: "",
    dueDate: "",
    category: "",
    explanation: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBills(); //this isn't working
  }

  // Loads all books  and sets them to this.state.books
  loadBills = () => {
    API.getBills()
      .then(res => {
        this.setState({ bills: res.data, name: "", explanation: "", amount: "", dueDate: "", category: "" })
      }
      )
      .catch(err => console.error("the error is: ",err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBill = id => {
    API.deleteBill(id)
      .then(res => this.loadBills())
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
      API.saveBill({
        name: this.state.name,
        explanation: this.state.explanation,
        amount: this.state.amount,
        dueDate: this.state.dueDate,
        category: this.state.category,
        userId: localStorage.user_id

      })
        .then(res => this.loadBills())
        .catch(err => console.log(err));
    }
    
  };

  render() {
    return (
      <div>
      <Navpills />
      <div style={{"marginBottom": "10px"}}>  
                <BillsItem 
                name={this.state.name}
                explanation={this.state.explanation}
                amount = {this.state.amount}
                dueDate = {this.state.dueDate}
                category = {this.state.category}
                bills = {this.state.bills}
                inputRef={(input) => this.textInput = input}
                onChange={this.handleInputChange}
                onClick={this.handleFormSubmit}
                deleteBill = {this.deleteBill}
      />
      </div>
      <div>


      {/* <div className= "container">
        <div className="row">
          <div className = "col-md-6">
            <div className="jumbotron">
              <h1>What Are My Bills?</h1>
            </div>
            <form>
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Type of Bill (required)"
              />
              <input
                value={this.state.explanation}
                onChange={this.handleInputChange}
                name="explanation"
                placeholder="Explanation (not required)"
              />
              <input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Amount (required)"
              />
              <input
                value={this.state.dueDate}
                onChange={this.handleInputChange}
                name="dueDate"
                placeholder="Due Date MM/DD/YYYY (required)"
              />
              <textarea
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (Optional)"
              />
              <button type="submit"
                disabled={!(this.state.amount && this.state.name && this.state.dueDate)}
                style= {!(this.state.amount && this.state.name && this.state.dueDate) ? {cursor: 'not-allowed'} : {cursor: 'default'} }
                onClick={this.handleFormSubmit}
              >
                Submit Bill
              </button>
            </form>
          </div>
          
          <div className="col-md-6">
            <div className="Jumbotron">
              <h1>Bills On My List</h1>
            </div>
            {this.state.bills.length ? (
              <ul>
                {this.state.bills.map(bill => {
                  return (
                    <li key={bill._id} style={{"margin-bottom": "10px"}}>
                      <a href={"/bills/" + bill._id}>
                        <strong>
                          Name: {bill.name} Amount: ${bill.amount} Due Date: {bill.dueDate}
                        </strong>
                      </a>
                      <button style={{"margin-left": "14px"}} className="Delete" onClick={() => this.deleteBill(bill._id)}>Delete</button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <h3>Get Buck with me!</h3>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }
} */}
</div>
</div>

      );
    }
  }

export default Bills;