import React from "react";

const Input = props =>
  <div className="col-lg-3">
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  </div>
  
export default Input;

