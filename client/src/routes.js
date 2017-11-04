import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Bills from './pages/Bills/Bills.js';
import Budget from "./pages/Budget/Budget.js"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          {/* <Navpills /> */}
        <Switch>
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route exact path="/bills" render={(props) => <Bills auth={auth} {...props} />} />
          <Route exact path="/budget" render={(props) => <Budget auth={auth} {...props} />} />
        </Switch>
        </div>
      </Router>
  );
}
