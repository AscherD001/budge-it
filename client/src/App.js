import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Homepage from "./pages/Homepage";
import Budget from "./pages/Budget";
import Bills from "./pages/Bills";
import Credit from "./pages/Credits";


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
            {
              !isAuthenticated() && (
                  <Button
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
            <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Budget" component={Budget} />
            <Route exact path="/Bills" component={Bills} />
            <Route exact path="/Credit" component={Credit} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
