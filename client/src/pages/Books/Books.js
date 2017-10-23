import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    name: "",
    account: "",// Not sure if these should be in quotes or something else for Int values
    amount: "", // Not sure if these should be in quotes or something else for Int values
    dueDate: "", // Shold this be in quotes or something else
    webAddress: "",
    category: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, name: "", account: "", amount: "", dueDate: "", webAddress: "", category: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
      API.saveBook({
        name: this.state.name,
        account: this.state.account,
        amount: this.state.amount,
        dueDate: this.state.dueDate,
        webAddress: this.state.webAddress,
        category: this.state.category
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.account}
                onChange={this.handleInputChange}
                name="account"
                placeholder="Account Number (required)"
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
              <Input
                value={this.state.webAddress}
                onChange={this.handleInputChange}
                name="webAddress"
                placeholder="Web Address"
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
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.name} by {book.amount}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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

export default Books;
