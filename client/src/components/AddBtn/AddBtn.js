import React from "react";

const AddBtn = () => (
  <div className="col-lg-12 pull-left" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "130px" }}>
    <div className="row">
      <div className="control-label">Monthly Bills:</div>
      <button className="btn btn-info" type="button" style={{ marginBottom: "20px", marginRight: "125px" }}><span className="glyphicon glyphicon-plus" style={{ marginRight: "10px" }}></span>Add a Bill</button>
    </div>
  </div>     

);

export default AddBtn;
