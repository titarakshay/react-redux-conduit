import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../store/action";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = {
      user: {
        email,
        password,
      },
    };
    props.dispatch(loginUser(user, props.history));
  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <Link className="link link2" to="/SignUp">
        Need an acoount ?
      </Link>
      <form onSubmit={submit} className="form">
        <input
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email"
        />
        <input
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Password"
        />
        <button type="submit" className="sign-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default connect()(Signin);
