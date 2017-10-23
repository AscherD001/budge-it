import React from "react";

const FlatNav = () =>

<div className="container">
<nav className="navbar navbar-inverse" role="navigation">
  <div className="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse">
      <span className="sr-only">Toggle navigation</span>
    </button>
    <a className="navbar-brand" href="#">Budge It</a>
  </div>
  <div className="collapse navbar-collapse" id="navbar-collapse-01">
    <ul className="nav navbar-nav">
      <li className="active"><a href="#fakelink">Your Budget</a></li>
      <li><a href="#fakelink">Another Page...</a></li>
    </ul>
  </div>
</nav>
</div>;

export default FlatNav;