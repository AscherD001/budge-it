import React from "react";
// amount
// :
// 450
// category
// :
// "Leisure"
// date
// :
// "2017-11-04T02:17:02.554Z"
// dueDate
// :
// "12/01"
// explanation
// :
// "50 less for Thankgsgiving Feast at home."
// name
// :
// "Restaurant Expenses"
// _id
// :
// "59fd1fafd6f2ca269c164b5c"

const BudgetItem = props => (
  <div className="container" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "80px" }}>
      <div className="col-lg-6 text-center" style={{ borderBottom: "#34495e 5px solid" }}> 
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <label className="control-label"><b>Bill Name: {}</b></label>
              <input className="form-control" type="text" placeholder="$00.00" style={{ marginRight: "20px", marginLeft: "20px", marginBottom: "20px" }}/>
            </div>  
          </div>  
          <div className="col-lg-3 pull-right" style={{ marginTop: "40px", marginRight: "120px" }}>
            <button onClick={() => props.deleteBudget(props.budget._id)} className="btn btn-danger pull-right" type="button" style={{ marginLeft: "20px" }}><span className="glyphicon glyphicon-remove"></span></button>
            <button onClick={props.inputSubmit} className="btn btn-success pull-right" type="button"><span className="glyphicon glyphicon-ok"></span></button>
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
            <p style={{ marginLeft: "20px" }}><b>Monthly: {props.budget.amount}</b></p>
          </div>  
          <div className="col-lg-3 pull-right">
            <p className="text pull-right" style={{ marginRight: "200px" }}><b>Remaining: {console.log(props) + console.log(props.budget)}</b></p>
          </div>
        </div>           
      </div>    
  </div>
    
);

export default BudgetItem;
