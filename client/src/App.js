import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Homepage from "./pages/Homepage";
import Budget from "./pages/Budget";

// import Books from "./pages/Books";
// import Nav from "./components/Nav";

const App = () => 
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Budget" component={Budget} />
    </div>
  </Router> ;

export default App;

//<Budget /> inside div to display budget page.

// <Route exact path="/Bills" component={Bills} />
