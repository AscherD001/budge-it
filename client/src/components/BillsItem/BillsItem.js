import React from "react";

const BillsItem = (props) => (
  <div>
   <div className="jumbotron" >
            <h1 className="text-center" style={{"fontFamily" : "Montserrat", "fontWeight" : "400"}}>Bills Portfolio</h1>
      </div>
    <div className= "container">
     
        <div className="row">
          <div className = "col-md-6">
            <h3 style={{"borderBottom": "solid 1px black","marginBottom": "15px"}}>Create New Bill</h3>
            <form>
              <div className="form-group">
                  
                <input
                value={props.name}
                onChange={props.onChange}
                name="name"
                required
                type="text" className="form-control" placeholder="Bill Name" />
              </div>
              
              <div className="form-group">  
                <input 
                value={props.amount}
                onChange={props.onChange}
                name="amount"
                required
                type="number" className="form-control" placeholder="Amount" />
              </div>
              
              <div className="form-group">  
                <input 
                value={props.dueDate}
                onChange={props.onChange}
                name="dueDate"
                required
                type="date" className="form-control" placeholder="Due Date" />
              </div>
              
              <div className="form-group">  
                <input 
                value={props.category}
                onChange={props.onChange}
                name="category"
                type="text" className="form-control" placeholder="Category" />
              </div>
              
              <div className="form-group">  
                <textarea 
                value={props.explanation}
                onChange={props.onChange}
                name="explanation"
                type="text" className="form-control" placeholder="Description" />
              </div>               

              <button type ="submit"
                className="btn btn-primary pull-right"
                disabled={!(props.amount && props.name && props.dueDate)}
                style= {!(props.amount && props.name && props.dueDate) ? {cursor: 'not-allowed'} : {cursor: 'default'} }
                onClick={props.onClick}>
                Submit
              </button>
            </form>
          </div>
          
          <div className="col-md-6">
            <div>
              <h3 style={{"borderBottom": "solid 1px black","marginBottom": "15px"}}>Available Bills</h3>
            </div>
            {props.bills.length ? (
              <div>
                {props.bills.map(bill => {
                  const dueDate = new Date(bill.dueDate);
                  return (
                    
                    <div className="panel panel-default" key={bill._id} style={{"marginBottom": "10px"}}>
                      <div className="panel panel-body">
                        <h4>{bill.name}</h4>
                        <ul>
                          <li>Amount: ${bill.amount}</li> 
                          <li>Due Date: {(dueDate.getMonth() + 1) + "/" + (dueDate.getDate() + 1) + "/" + dueDate.getFullYear()}</li> 
                          <li>Category: {bill.category || "N/A"}</li>
                          <li>Description: {bill.explanation || "N/A"}</li>
                        </ul>
                      <button style={{"marginTop": "15px",}} className="btn btn-danger pull-right" onClick={() => props.deleteBill(bill._id)}>Delete</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h4 className="text-center" style={{"marginTop": "25px"}}>No bills to report</h4>
            )}
          </div>
        </div>
      </div>
      </div>
);

export default BillsItem;