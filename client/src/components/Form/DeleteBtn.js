import React from "react";

const deleteButon = props =>
<button {...props} className="btn btn-danger pull-right" type="button" style={{ marginLeft: "20px" }}><span className="glyphicon glyphicon-remove"></span>
    {props.children}
  </button>;

  export default deleteButon;
