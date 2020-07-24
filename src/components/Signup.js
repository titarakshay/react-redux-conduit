import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Link className="link link2" to="/Signin">
        Have an acoount ?
      </Link>
      <form className="form">
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button className="sign-btn">Sign up</button>
      </form>
    </div>
  );
}
