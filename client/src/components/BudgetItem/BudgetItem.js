import React from "react";

const BudgetItem = () => (
  <div className="container" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "80px" }}>
      <div className="col-lg-6 text-center" style={{ borderBottom: "#34495e 5px solid" }}> 
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <label className="control-label"><b>Bill Name:</b></label>
              <input className="form-control" type="text" placeholder="$00.00" style={{ marginRight: "20px", marginLeft: "20px", marginBottom: "20px" }}/>
            </div>  
          </div>  
          <div className="col-lg-3 pull-right" style={{ marginTop: "40px", marginRight: "120px" }}>
            <button className="btn btn-danger pull-right" type="button" style={{ marginLeft: "20px" }}><span className="glyphicon glyphicon-remove"></span></button>
            <button className="btn btn-success pull-right" type="button"><span className="glyphicon glyphicon-ok"></span></button>
          </div>    
        </div> 
        <div className="row">
          <div className="progress" style={{ maxWidth: 450, height: "45px", lineHeight: "40px" }}>
            <span className="text pull-left" style={{ marginLeft: "20px"}}>$Spent / $Total</span>
            <span className="text pull-right" style={{ marginRight: "20px" }}>(%Percentage)</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <p style={{ marginLeft: "20px" }}><b>Monthly:</b></p>
          </div>  
          <div className="col-lg-3 pull-right">
            <p className="text pull-right" style={{ marginRight: "200px" }}><b>Remaining:</b></p>
          </div>
        </div>           
      </div>    
  </div>
    
);

export default BudgetItem;
