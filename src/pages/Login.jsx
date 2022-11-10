import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">razdyp</span>
        <span className="title">Register</span>

        <form action="">
          <input type="email" placeholder="Email" autoComplete="off" />
          <input type="password" placeholder="Password" autoComplete="off" />

          <button>Log In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
