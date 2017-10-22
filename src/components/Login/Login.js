import React from "react";

const Login = () => (
<div class="container">
    <h3>Login:</h3>
    <input type="text" placeholder="username" className="form-control" style={{ marginTop: "20px", maxWidth: 400, fontFamily: "Lato" }}/>
    <input type="text" placeholder="password" className="form-control" style={{ marginTop: "20px", maxWidth: 400, fontFamily: "Lato" }}/>
    <button className="btn btn-info" style={{ fontFamily: "Lato", marginTop: "20px" }}>Submit</button>
</div>  
)  

export default Login;
