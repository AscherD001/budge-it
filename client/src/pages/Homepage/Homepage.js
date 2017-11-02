import React, { Component } from "react";
import Navpills from "../../components/Navpills";
import "./Homepage.css";

class Homepage extends Component {
    render() {
      return (
        <div>
        <Navpills />
        <img src="https://s-i.huffpost.com/gen/2132462/images/o-RAINING-MONEY-facebook.jpg" alt="Raining Money" width="100%"></img>
        <h1> Make Change!</h1>
        <p>
       Hello and Welcome to Budge-it! The application built to help you save money! 
       We have developed an easy to use method for keeping track of your bills and your expenses.
       Your Finances will be organized and viewing them will be a snap.
       To input your bills, navigate to the page and enter the require information.
       After clicking submit the bill will be saved and you may view it at any time by logging in.
       For your remaining budget, navigate to the budget page and you may input how much you have left to spend 
       and be made aware of your balance and remaining money on certain expenses. 
       Make the smart choice and make the switch to Budge-it today and start saving yourself some money!
       </p>
        </div>
      );
    }
  }
  
  export default Homepage;