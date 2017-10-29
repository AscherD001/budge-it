import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Homepage from "./pages/Homepage";
import Budget from "./pages/Budget";

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
            <Navpills />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Budget" component={Budget} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
