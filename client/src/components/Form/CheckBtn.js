import React from "react";

const checkButton = props =>
<button {...props} className="btn btn-success pull-right" type="button"><span className="glyphicon glyphicon-ok"></span>
    {props.children}
  </button>;

  export default checkButton;

  
  
 