import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <Link className="link link2" to="/Signup">
        Need an acoount ?
      </Link>
      <form className="form">
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button className="sign-btn">Sign in</button>
      </form>
    </div>
  );
}
