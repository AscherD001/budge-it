import React from "react";

const FlatNav = () =>

<nav className="navbar navbar-inverse">
<div className="navbar-header">
  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
    <span className="sr-only">Toggle navigation</span>
  </button>
  <a className="navbar-brand" href="#">BUDGE-it!</a>
</div>
<div className="collapse navbar-collapse" id="navbar-collapse-01">
  <ul className="nav navbar-nav">
    <li className="active"><a href="/FlatNav.css">Budget</a></li>
    <li className="page"><a href="/FlatNav.css">Bills</a></li>
  </ul>
</div>
</nav>


export default FlatNav;