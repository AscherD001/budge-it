import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Bills extends Component {
  // Setting our component's initial state
  state = {
    bills: [],
    name: "",
    amount: "", // Not sure if these should be in quotes or something else for Int values
    dueDate: "", // Shold this be in quotes or something else
    category: "",
    explanation: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBills();
  }

  // Loads all books  and sets them to this.state.books
  loadBills = () => {
    API.getBills()
      .then(res =>
        this.setState({ bills: res.data, name: "", explantaion: "", amount: "", dueDate: "", category: "" })
      )
      .catch(err => console.log(err));
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
        category: this.state.category
      })
        .then(res => this.loadBills())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Are My Bills?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Type of Bill (required)"
              />
              <Input
                value={this.state.explanation}
                onChange={this.handleInputChange}
                name="explanation"
                placeholder="Explanation (not required)"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Amount (required)"
              />
              <Input
                value={this.state.dueDate}
                onChange={this.handleInputChange}
                name="dueDate"
                placeholder="Due Date (required)"
              />
              <TextArea
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (Optional)"
              />
              <FormBtn
                disabled={!(this.state.amount && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Bill
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Bills On My List</h1>
            </Jumbotron>
            {this.state.bills.length ? (
              <List>
                {this.state.bills.map(bill => {
                  return (
                    <ListItem key={bill._id}>
                      <a href={"/bills/" + bill._id}>
                        <strong>
                          {bill.name} by {bill.amount}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBill(bill._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bills;
