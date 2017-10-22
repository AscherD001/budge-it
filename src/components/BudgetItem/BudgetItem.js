import React from "react";

const BudgetItem = () => (
  <div className="container" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "80px" }}>  
    <div className="progress" style={{ maxWidth: 600 }}>
        <div className="progress-bar" style={{ width: "60%", }}></div>
        <div className="progress-bar progress-bar-warning" style={{ width: "20%" }}></div>
        <div className="progress-bar progress-bar-danger" style={{ width: "20%" }}></div> 
    </div>
    <input type="text" placeholder="input text here" className="form-control" style={{ maxWidth: 400, fontFamily: "Lato" }}/>
    <button className="btn btn-info" style={{ fontFamily: "Lato", marginTop: "20px", marginRight: "10px" }}>Submit</button>
    <button className="btn btn-success" style={{fontFamily: "Lato", marginTop: "20px", marginRight: "10px" }}>Reset</button>  
    <button className="btn btn-warning" style={{ fontFamily: "Lato", marginTop: "20px" }}>Delete this Budget Item</button>
  </div>  
);

export default BudgetItem;
