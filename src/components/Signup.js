import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../store/action";

function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = {
      user: {
        username,
        email,
        password,
      },
    };
    props.dispatch(registerUser(user, props.history));
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Link className="link link2" to="/Signin">
        Have an acoount ?
      </Link>
      <form onSubmit={submit} className="form">
        <input
          onChange={({ target: { value } }) => setUsername(value)}
          placeholder="Username"
        />
        <input
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email"
        />
        <input
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Password"
        />
        <button type="submit" className="sign-btn">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default connect()(Signup);
