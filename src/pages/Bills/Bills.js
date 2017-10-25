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
    bill: "",
    category: "",
    amount: "",
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
        this.setState({ bills: res.data, bill: "", category: "", amount: "", explanation: "" })
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
    if (this.state.bill && this.state.amount) {
      API.saveBook({
        bill: this.state.bill,
        amount: this.state.amount,
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
              <h1>What Bills Must I Pay?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.bill}
                onChange={this.handleInputChange}
                name="bill"
                placeholder="Bill (required)"
              />
              <Input
                value={this.state.amout}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Amount (required)"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <TextArea
                value={this.state.explanation}
                onChange={this.handleInputChange}
                name="explanation"
                placeholder="Explanation (Optional)"
              />
              <FormBtn
                disabled={!(this.state.category && this.state.bill)}
                onClick={this.handleFormSubmit}
              >
                Submit Bill
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Bills</h1>
            </Jumbotron>
            {this.state.bills.length ? (
              <List>
                {this.state.bills.map(bill => {
                  return (
                    <ListItem key={bill._id}>
                      <a href={"/bills/" + bill._id}>
                        <strong>
                          {bill.bill} by {bill.category}
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
