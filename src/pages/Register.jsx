import React from "react";
import Add from "../img/Add.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">razdyp</span>
        <span className="title">Register</span>

        <form action="">
          <input type="text" placeholder="Username" autoComplete="off" />
          <input type="email" placeholder="Email" autoComplete="off" />
          <input type="password" placeholder="Password" autoComplete="off" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img
              src={Add}
              alt=""
              className="addImg"
              style={{ width: "40px", height: "40px" }}
            />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Log In</p>
      </div>
    </div>
  );
}

export default Register;
