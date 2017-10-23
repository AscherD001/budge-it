import React from "react";

const ProgBar = () =>
<div className="progress" style={{ maxWidth: 600 }}>
  <div className="progress-bar" style={{ width: "60%" }}></div>
  <div className="progress-bar progress-bar-warning" style={{ width: "20%" }}></div>
  <div className="progress-bar progress-bar-danger" style={{ width: "20%" }}></div> 
</div>;

export default ProgBar;